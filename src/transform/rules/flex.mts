import { getTailwindBy } from '../../core/mappings.mjs';
import { mergeMultiAttr, toTailwindClass } from '../functions.mjs';

export function flex([key, value]: [string, string]) {
  if (key !== 'flex') {
    return false;
  }

  const { tailwind, useful } = getTailwindBy({
    [key]: value,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  return toTailwindClass('flex', mergeMultiAttr(value));
}
