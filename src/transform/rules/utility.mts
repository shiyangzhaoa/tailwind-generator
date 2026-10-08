import { getTailwindBy } from '../../core/mappings.mjs';
import {
  arbitraryProperty,
  encodeArbitraryValue,
} from '../../core/serialize.mjs';
import type { Rule } from '../../core/types.mjs';
import { designTokens, designTokenVars } from '../../tokens.mjs';

/** Builds classes for a value without a theme match, or false if unsupported. */
export type Fallback = (
  prefix: string,
  value: string,
  property: string,
) => string | false;

export interface Utility {
  /** Class prefix, such as `bg` or `rounded-tl`. */
  prefix: string;
  /** Canonical form used for theme lookup, such as px → rem or color → oklch. */
  normalize?: (value: string) => string;
  /** Receives the original value; defaults to an arbitrary value. */
  fallback?: Fallback;
  /**
   * Tailwind data type for arbitrary values whose type it could misread, such
   * as `font-[bolder]` (a font family) or `outline-[medium]` (a color).
   */
  hint?: string;
}

/** Plain numbers and dimensions are always inferred correctly. */
const dimension = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[a-z]+|%)?$/i;

export function arbitrary(prefix: string, value: string, hint?: string) {
  const type = hint && !dimension.test(value) ? `${hint}:` : '';
  return `${prefix}-[${type}${encodeArbitraryValue(value)}]`;
}

function toPixels(value: string) {
  const match = /^(-?(?:\d+\.?\d*|\.\d+))(px|rem)$/.exec(value);
  if (!match) return undefined;
  return Number(match[1]) * (match[2] === 'rem' ? 16 : 1);
}

const spacingPixels = toPixels(designTokens['--spacing']);

/** Whole multiples of the spacing scale become `p-4`; anything else is arbitrary. */
export function spacing(prefix: string, value: string) {
  const pixels = toPixels(value);
  const step =
    pixels === undefined || spacingPixels === undefined
      ? undefined
      : pixels / spacingPixels;
  if (value === '0' || step === 0) return `${prefix}-0`;
  if (step !== undefined && Number.isInteger(step))
    return step < 0 ? `-${prefix}-${-step}` : `${prefix}-${step}`;
  return arbitrary(prefix, value);
}

/** Exact theme classes for one declaration, preferring the token form. */
export function lookup(property: string, value: string): string | undefined {
  const token = designTokenVars[value];
  for (const candidate of token ? [token, value] : [value]) {
    const { tailwind } = getTailwindBy({ [property]: candidate });
    if (tailwind.length) return tailwind.join(' ');
  }
  return undefined;
}

/** A rule for properties that map to one utility prefix each. */
export function utilityRule(
  name: string,
  utilities: Readonly<Record<string, Utility>>,
): Rule {
  return {
    name,
    properties: Object.keys(utilities),
    convert({ property, value }) {
      const { prefix, normalize, hint, fallback } = utilities[property];
      // An exact theme match never rewrites the value, so it is always safe.
      const themed = lookup(property, normalize?.(value) ?? value);
      if (themed) return { status: 'converted', classes: themed.split(' ') };
      // Keep syntax that utility classes cannot express as a whole declaration.
      if (
        /[\\_'"]|\/\*|\bvar\(/.test(value) ||
        /^(inherit|initial|unset|revert|revert-layer)$/.test(value)
      ) {
        return {
          status: 'converted',
          classes: [arbitraryProperty(property, value)],
        };
      }
      const classes = fallback
        ? fallback(prefix, value, property)
        : arbitrary(prefix, value, hint);
      return classes
        ? { status: 'converted', classes: classes.split(' ') }
        : { status: 'failed', reason: 'unsupported-value' };
    },
  };
}
