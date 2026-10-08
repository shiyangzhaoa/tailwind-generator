import { designTokenVars } from '../../tokens.mjs';
import { getTailwindBy } from '../../core/mappings.mjs';
import { try2REM, toTailwindClass } from '../functions.mjs';

export function flexBasis([key, value]: [string, string]) {
  if (key !== 'flex-basis') {
    return false;
  }

  const convertedVal = try2REM(value);
  const { tailwind, useful } = getTailwindBy({
    [key]: designTokenVars[convertedVal] ?? convertedVal,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  return toTailwindClass('basis', value, { mode: 'spacing' });
}
