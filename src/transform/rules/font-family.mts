import { designTokenVars } from '../../tokens.mjs';
import { getTailwindBy } from '../../utils/index.mjs';
import { mergeMultiAttr, toTailwindClass } from '../functions.mjs';

export function fontFamily([key, value]: [string, string]) {
  if (key !== 'font-family') {
    return false;
  }

  const { tailwind, useful } = getTailwindBy({
    [key]: designTokenVars[value] ?? value,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  return toTailwindClass('font', mergeMultiAttr(value));
}
