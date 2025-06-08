import { getTailwindBy } from '../../utils/index.mjs';
import { mergeMultiAttr, toTailwindClass } from '../functions.mjs';

export function listStyleImage([key, value]: [string, string]) {
  if (key !== 'list-style-image') {
    return false;
  }

  const { tailwind, useful } = getTailwindBy({
    [key]: value,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  return toTailwindClass('list-image', mergeMultiAttr(value));
}
