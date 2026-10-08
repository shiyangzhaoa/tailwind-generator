import type { Rule } from './types.mjs';

export function createRegistry(
  rules: readonly Rule[],
): ReadonlyMap<string, Rule> {
  const index = new Map<string, Rule>();
  for (const rule of rules) {
    for (const property of rule.properties) {
      if (index.has(property))
        throw new Error(`Duplicate rule for ${property}`);
      index.set(property, rule);
    }
  }
  return index;
}
