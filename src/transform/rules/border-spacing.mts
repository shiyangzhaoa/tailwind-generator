import { try2REM } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';
import { spacing, utilityRule } from './utility.mjs';

function axes(value: string) {
  const [x, y = x, ...rest] = splitBySpaces(value);
  return rest.length ? undefined : [x, y];
}

export const rule = utilityRule('border-spacing', {
  'border-spacing': {
    prefix: 'border-spacing',
    normalize: (value) => axes(value)?.map(try2REM).join(' ') ?? value,
    fallback(prefix, value) {
      const [x, y] = axes(value) ?? [];
      if (x === undefined || y === undefined) return false;
      if (try2REM(x) === try2REM(y)) return spacing(prefix, x);
      return `${spacing(`${prefix}-x`, x)} ${spacing(`${prefix}-y`, y)}`;
    },
  },
});
