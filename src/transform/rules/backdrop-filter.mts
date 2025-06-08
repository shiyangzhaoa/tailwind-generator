/**
 * base on ./filter.mts
 */

import { twMerge } from 'tailwind-merge';
import { getTailwindBy, removeSpace } from '../../utils/index.mjs';
import { try2PX } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';
import { designTokenVars } from '../../tokens.mjs';
import { functionParser } from '../../index.mjs';

const map: Record<string, { key: string; convertor: (val: string) => string }> =
  {
    blur: {
      key: 'blur',
      convertor: try2PX,
    },
    brightness: {
      key: 'brightness',
      convertor: removeSpace,
    },
    contrast: {
      key: 'contrast',
      convertor: removeSpace,
    },
    grayscale: {
      key: 'grayscale',
      convertor: removeSpace,
    },
    'hue-rotate': {
      key: 'hue-rotate',
      convertor: removeSpace, // Keep the unit (deg)
    },
    invert: {
      key: 'invert',
      convertor: removeSpace,
    },
    opacity: {
      key: 'opacity',
      convertor: removeSpace,
    },
    saturate: {
      key: 'saturate',
      convertor: removeSpace,
    },
    sepia: {
      key: 'sepia',
      convertor: removeSpace,
    },
    url: {
      key: 'url',
      convertor: removeSpace,
    },
  };

export function backdropFilter([key, value]: [string, string]) {
  if (key !== 'backdrop-filter') {
    return false;
  }

  const tokens = splitBySpaces(value);

  const res: string[] = [];

  const unresolved: string[] = [];

  tokens.forEach((token) => {
    const [k, v] = functionParser(token);

    if (!k || !v) return;

    if (k === 'drop-shadow') {
      unresolved.push(token);

      return;
    }

    const { convertor } = map[k];

    const convertedVal = convertor(v);
    const { tailwind, useful } = getTailwindBy({
      [key]: `${k}(${designTokenVars[convertedVal] ?? convertedVal})`,
    });

    if (!useful) {
      res.push(...tailwind);

      return;
    }

    unresolved.push(token);
  });

  if (unresolved.length === 0) {
    return twMerge(...res);
  }

  return twMerge(
    ...res,
    ...unresolved.map((token) => {
      const [k, v] = functionParser(token);
      if (!k || !v) return;
      const { convertor } = map[k];

      return `backdrop-${k}-[${convertor(v)}]`;
    }),
  );
}
