import valueParser from 'postcss-value-parser';
import { splitBySpaces } from './split.mjs';
import { try2oklch } from '../functions.mjs';
import { isColor, isOKLCH, isVAR } from '../../utils/validator.mjs';

const POSITION_KEYWORD = ['top', 'bottom', 'left', 'right', 'center'];

export function backgroundParser(val: string) {
  const background: {
    attachment: ('scroll' | 'fixed' | 'local')[];
    clip?: 'border-box' | 'padding-box' | 'content-box' | 'text';
    origin: ('content-box' | 'padding-box' | 'border-box')[];
    color?: string;
    image: string[];
    position: string[];
    size: string[];
    repeat: (
      | 'repeat-x'
      | 'repeat-y'
      | 'repeat'
      | 'space'
      | 'round'
      | 'no-repeat'
    )[];
  } = {
    attachment: [],
    origin: [],
    color: '',
    image: [],
    repeat: [],
    position: [],
    size: [],
  };

  const tokens = splitBySpaces(val);

  const padding: string[] = [];

  tokens.forEach((token) => {
    const { nodes } = valueParser(token);

    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i];

      if (
        node?.type === 'function' &&
        (node.value === 'url' ||
          [
            'linear-gradient',
            'radial-gradient',
            'conic-gradient',
            'repeating-linear-gradient',
            'repeating-radial-gradient',
            'repeating-conic-gradient',
            'paint',
            'url',
            'cross-fade',
            'element',
            'image',
            'image-set',
          ].includes(node.value))
      ) {
        background.image.push(valueParser.stringify(node));

        return;
      }
    }

    if (
      isColor(try2oklch(token)) ||
      isOKLCH(try2oklch(token)) ||
      ['inherit', 'currentColor', 'transparent'].includes(token) ||
      isVAR(token)
    ) {
      background.color = token;

      return;
    }

    if (['scroll', 'fixed', 'local'].includes(token)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      background.attachment = [token] as any;

      return;
    }

    if (['border-box', 'padding-box', 'content-box', 'text'].includes(token)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      background.clip = token as any;

      return;
    }

    if (
      [
        'repeat-x',
        'repeat-y',
        'repeat',
        'space',
        'round',
        'no-repeat',
      ].includes(token)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      background.repeat.push(token as any);

      return;
    }

    if (['content-box', 'padding-box', 'border-box'].includes(token)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      background.origin.push(token as any);

      return;
    }

    padding.push(token);
  });

  if (padding.length === 0) {
    return background;
  }

  const parsed = valueParser(padding.join(' '));
  const position: string[] = [];
  const size: string[] = [];
  let isSizeNext = false;
  let isPositionNext = true;

  parsed.walk((node) => {
    if (node.type === 'div' && node.value === '/') {
      isSizeNext = true;
      isPositionNext = false;
    } else if (node.type === 'word' || node.type === 'function') {
      if (isSizeNext) {
        size.push(node.value);
      } else if (isPositionNext) {
        position.push(node.value);
      }
    }
  });

  let validPosition: string[] = [];

  if (position.length === 2) {
    validPosition = position.reduce((acc, cur, i) => {
      if (!POSITION_KEYWORD.includes(cur)) {
        return i === 0 ? ['left', cur] : [...acc, 'top', cur];
      }

      return [...acc, cur];
    }, [] as string[]);
  } else {
    validPosition = position;
  }

  background.position = validPosition;
  background.size = size;

  return background;
}
