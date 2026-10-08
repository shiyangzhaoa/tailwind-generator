import { splitBySpaces } from '../parsers/split.mjs';
import { lookup, spacing, utilityRule, type Utility } from './utility.mjs';

// Physical sides stay physical: `px`/`py` set logical properties, which differ
// from left/right and top/bottom in vertical writing modes.
const sides: Record<string, string> = {
  '': '',
  top: 't',
  right: 'r',
  bottom: 'b',
  left: 'l',
  inline: 'x',
  block: 'y',
  'inline-start': 's',
  'inline-end': 'e',
};

/** Padding or margin, including scroll variants and every side. */
function boxSpacing(name: 'padding' | 'margin') {
  const utilities: Record<string, Utility> = {};
  for (const scroll of ['', 'scroll-'])
    for (const [side, suffix] of Object.entries(sides)) {
      const shorthand = !side;
      utilities[`${scroll}${name}${side ? `-${side}` : ''}`] = {
        prefix: `${scroll}${name[0]}${suffix}`,
        fallback(prefix, value, property) {
          const values = splitBySpaces(value).filter((part) => part.trim());
          if (values.length === 1) return spacing(prefix, value);
          if (!shorthand || values.length > 4) return false;
          const [top, right = top, bottom = top, left = right] = values;
          return Object.entries({ top, right, bottom, left })
            .map(
              ([edge, part]) =>
                lookup(`${property}-${edge}`, part) ??
                spacing(`${prefix}${sides[edge]}`, part),
            )
            .join(' ');
        },
      };
    }
  return utilityRule(name, utilities);
}

export const paddingRule = boxSpacing('padding');
export const marginRule = boxSpacing('margin');
