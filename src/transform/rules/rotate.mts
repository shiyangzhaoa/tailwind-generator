import { getTailwindBy } from '../../utils/index.mjs';
import { mergeMultiAttr, toTailwindClass } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';

export function rotate([key, value]: [string, string]) {
  if (key !== 'rotate') {
    return false;
  }

  const tokens = splitBySpaces(value).map((v) => {
    const number = parseFloat(v);

    return !Number.isNaN(number) ? number.toString() : v;
  });

  const { tailwind, useful } = getTailwindBy({
    rotate: tokens.join(' '),
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  if (tokens.length === 1) {
    const realValue = tokens[0];

    return toTailwindClass('rotate', realValue, { mode: 'number' });
  }

  if (tokens.length === 2) {
    const scaleX = tokens[0];
    const scaleY = tokens[1];

    if (scaleY === '0') {
      return toTailwindClass('rotate-x', scaleX, { mode: 'number' });
    }

    if (scaleX === '0') {
      return toTailwindClass('rotate-y', scaleY, { mode: 'number' });
    }
  }

  if (tokens.length === 3) {
    const rotateX = tokens[0];
    const rotateY = tokens[1];
    const rotateZ = tokens[2];

    if (rotateX === '0' && rotateY === '0') {
      return toTailwindClass('rotate', rotateZ, { mode: 'number' });
    }

    if (rotateX === '0' && rotateZ === '0') {
      return toTailwindClass('rotate-y', rotateY, { mode: 'number' });
    }

    if (rotateY === '0' && rotateZ === '0') {
      return toTailwindClass('rotate-x', rotateX, { mode: 'number' });
    }
  }

  return toTailwindClass('rotate', mergeMultiAttr(value));
}
