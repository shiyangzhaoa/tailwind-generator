import { encodeArbitraryValue } from '../../core/serialize.mjs';
import { getTailwindBy } from '../../core/mappings.mjs';
import { toTailwindClass } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';

export function gridTemplateColumns([key, value]: [string, string]) {
  if (key !== 'grid-template-columns') {
    return false;
  }

  const { tailwind, useful } = getTailwindBy({
    [key]: value,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  const number = extractGridRepeatNumber(value);

  if (number) {
    return `grid-cols-${number}`;
  }

  const tokens = splitBySpaces(value);

  if (tokens.length > 1) {
    return `grid-cols-[${tokens.map(encodeArbitraryValue).join('_')}]`;
  }

  return toTailwindClass('grid-cols', value);
}

function extractGridRepeatNumber(value: string): number | null {
  const match = value.match(/^repeat\((\d+),\s*minmax\(0,\s*1fr\)\)$/);
  return match ? parseInt(match[1], 10) : null;
}
