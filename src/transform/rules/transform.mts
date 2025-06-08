import { twMerge } from 'tailwind-merge';
import { getTailwindBy, removeSpace } from '../../utils/index.mjs';
import { toTailwindClass } from '../functions.mjs';
import { splitByCommas, splitBySpaces } from '../parsers/split.mjs';
import { scale } from './scale.mjs';
import { functionParser } from '../../index.mjs';
import { translate } from './translate.mjs';

const ruleMap: Record<string, (val: string) => string | false> = {
  scale: (val) => scale(['scale', val]),
  scaleX: (val) => scale(['scale', `${val} 1`]),
  scaleY: (val) => scale(['scale', `1 ${val}`]),
  scaleZ: (val) => scale(['scale', `1 1 ${val}`]),
  translate: (val) => translate(['translate', val]),
  translateX: (val) => translate(['translate', `${val} 0px`]),
  translateY: (val) => translate(['translate', `0px ${val}`]),
  translateZ: (val) => translate(['translate', `0px 0px ${val}`]),
};
const ruleKeys = Object.keys(ruleMap);

const map: Record<
  string,
  {
    key: string;
    prop: string;
    convertor?: (val: string) => string;
    rule?: (val: string) => string | false;
  }
> = {
  rotate: {
    key: 'rotate',
    prop: 'rotate',
    convertor: (v: string) => v,
  },
  rotateX: {
    key: 'rotate-x',
    prop: 'rotateX',
    convertor: (v: string) => v,
  },
  rotateY: {
    key: 'rotate-y',
    prop: 'rotateY',
    convertor: (v: string) => v,
  },
  skewX: {
    prop: 'skewX',
    key: 'skew-x',
    convertor: (v: string) => v,
  },
  skewY: {
    prop: 'skewY',
    key: 'skew-y',
    convertor: (v: string) => v,
  },
  skew: {
    key: 'skew',
    prop: 'skew',
    convertor(val) {
      const tokens = splitByCommas(removeSpace(val));

      return tokens.join(' ');
    },
  },
};

export function transform([key, value]: [string, string]) {
  if (key !== 'transform') {
    return false;
  }

  const tokens = splitBySpaces(value);

  const res: string[] = [];

  tokens.forEach((token) => {
    const [k, v] = functionParser(token);

    if (!k || !v) {
      return;
    }

    if (ruleKeys.includes(k)) {
      const result = ruleMap[k]?.(v);

      if (result) {
        res.push(result);
      }

      return;
    }

    const config = map[k];

    if (!config) {
      return;
    }
    const xy = splitBySpaces(config.convertor?.(v) ?? v);

    if (xy.length === 1) {
      const realValue = xy[0];
      const { tailwind, useful } = getTailwindBy({
        [key]: `${config.prop}(${realValue})`,
      });

      if (!useful) {
        res.push(tailwind.join(' '));
      } else {
        res.push(toTailwindClass(config.key, realValue, { mode: 'number' }));
      }

      return;
    }

    res.push(
      ...xy
        .map((v, i) =>
          getTailwindBy({
            [key]: `${config.prop}${i === 0 ? 'X' : 'Y'}(${v})`,
          }),
        )
        .map(({ tailwind, useful }, i) => {
          if (!useful) {
            return tailwind;
          }

          const _k = `${config.key}-${i === 0 ? 'x' : 'y'}`;

          return toTailwindClass(_k, xy[i], { mode: 'number' });
        })
        .flat(),
    );
  });

  return twMerge(...res);
}
