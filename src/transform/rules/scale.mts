import { getTailwindBy } from '../../utils/index.mjs';
import {
  mergeMultiAttr,
  number2Percent,
  toTailwindClass,
} from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';

export function scale([key, value]: [string, string]) {
  if (key !== 'scale') {
    return false;
  }

  const tokens = splitBySpaces(value).map((token) => number2Percent(token));

  const { tailwind, useful } = getTailwindBy({
    scale: tokens.join(' '),
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  if (tokens.length === 1) {
    const realValue = tokens[0];

    return toTailwindClass('scale', realValue, { mode: 'number' });
  }

  if (tokens.length === 2) {
    const scaleX = tokens[0];
    const scaleY = tokens[1];

    // --tw-scale-y
    if (scaleY === '100') {
      return toTailwindClass('scale-x', scaleX, { mode: 'number' });
    }

    if (scaleX === '100') {
      return toTailwindClass('scale-y', scaleY, { mode: 'number' });
    }
  }

  if (tokens.length === 3) {
    const scaleX = tokens[0];
    const scaleY = tokens[1];
    const scaleZ = tokens[2];

    if (scaleX === '100' && scaleY === '100') {
      return scaleZ === '100'
        ? 'scale-3d'
        : toTailwindClass('scale-z', scaleZ, { mode: 'number' });
    }

    if (scaleY === '100') {
      return toTailwindClass('scale-x', scaleX, { mode: 'number' });
    }

    if (scaleX === '100') {
      return toTailwindClass('scale-y', scaleY, { mode: 'number' });
    }
  }

  return toTailwindClass('scale', mergeMultiAttr(value));
}
