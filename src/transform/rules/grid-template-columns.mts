import { arbitrary, utilityRule } from './utility.mjs';

export const rule = utilityRule('grid-template-columns', {
  'grid-template-columns': {
    prefix: 'grid-cols',
    fallback(prefix, value) {
      const repeat = /^repeat\((\d+),\s*minmax\(0,\s*1fr\)\)$/.exec(value);
      return repeat ? `${prefix}-${repeat[1]}` : arbitrary(prefix, value);
    },
  },
});
