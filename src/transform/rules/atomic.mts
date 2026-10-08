import type { Rule } from '../../core/types.mjs';
import { arbitraryProperty } from '../../core/serialize.mjs';

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
