import { getTailwindBy } from '../../core/mappings.mjs';
import { encodeArbitraryValue } from '../../core/serialize.mjs';
import { designTokens } from '../../tokens.mjs';
import { splitBySpaces } from '../parsers/split.mjs';

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

function toPixels(value: string) {
  const match = /^(-?(?:\d+\.?\d*|\.\d+))(px|rem)$/.exec(value);
  if (!match) return undefined;
  return Number(match[1]) * (match[2] === 'rem' ? 16 : 1);
}

const spacingPixels = toPixels(designTokens['--spacing']);

function utility(property: string, prefix: string, value: string) {
  const { tailwind } = getTailwindBy({ [property]: value });
  if (tailwind.length) return tailwind.join(' ');
  const pixels = toPixels(value);
  const step =
    pixels === undefined || spacingPixels === undefined
      ? undefined
      : pixels / spacingPixels;
  if (value === '0' || step === 0) return `${prefix}-0`;
  if (step !== undefined && Number.isInteger(step))
    return step < 0 ? `-${prefix}-${-step}` : `${prefix}-${step}`;
  return `${prefix}-[${encodeArbitraryValue(value)}]`;
}

/** Padding or margin, including scroll variants and every side. */
export function boxSpacing(name: 'padding' | 'margin') {
  const letter = name[0];
  const prefixes: Record<string, string> = {};
  for (const scroll of ['', 'scroll-'])
    for (const [side, suffix] of Object.entries(sides))
      prefixes[`${scroll}${name}${side ? `-${side}` : ''}`] =
        `${scroll}${letter}${suffix}`;

  function convert([property, value]: [string, string]) {
    const prefix = prefixes[property];
    if (!prefix) return false;
    const values = splitBySpaces(value).filter((part) => part.trim());
    if (!property.endsWith(name)) {
      return values.length === 1 && utility(property, prefix, value);
    }
    if (values.length === 1) return utility(property, prefix, value);
    if (values.length > 4) return false;
    const [top, right = top, bottom = top, left = right] = values;
    return Object.entries({ top, right, bottom, left })
      .map(([side, part]) =>
        utility(`${property}-${side}`, `${prefix}${sides[side]}`, part),
      )
      .join(' ');
  }

  return { properties: Object.keys(prefixes), convert };
}
