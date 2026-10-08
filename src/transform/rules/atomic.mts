import type { Rule } from '../../core/types.mjs';
import { arbitraryProperty } from '../../core/serialize.mjs';
import { parseValue } from '../../core/value.mjs';

export function atomicRule(name: string, properties: readonly string[]): Rule {
  return {
    name,
    properties,
    convert({ property, value }) {
      return {
        status: 'converted',
        classes: [arbitraryProperty(property, value)],
      };
    },
  };
}

// Compatibility for internal rule helpers; the public engine uses Rule directly.
export function convertAtomic(
  [property, value]: [string, string],
  properties: readonly string[],
) {
  if (!properties.includes(property) || !parseValue(value).valid) return false;
  return arbitraryProperty(property, value.trim());
}
