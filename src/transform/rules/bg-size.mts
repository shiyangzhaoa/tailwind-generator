import { getTailwindBy } from '../../utils/index.mjs';
import { mergeMultiAttr, toTailwindClass } from '../functions.mjs';

export function bgSize([key, value]: [string, string]) {
  if (key !== 'background-size') {
    return false;
  }

  const { tailwind, useful } = getTailwindBy({
    [key]: value,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  return toTailwindClass('bg-size', mergeMultiAttr(value));
}
