import { mappings } from '../generated/mappings.mjs';

interface Candidate {
  declarations: [string, string][];
  classes: string;
}

// Index each candidate by its first property/value. Matching only visits candidates
// that could match the input, rather than enumerating all input subsets.
const index = new Map<string, Candidate[]>();
export const mappedProperties = new Set<string>();
for (const mapping of mappings) {
  const declarations = Object.entries(mapping.declarations).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  for (const [property] of declarations) mappedProperties.add(property);
  const anchor = JSON.stringify(declarations[0]);
  const candidates = index.get(anchor) ?? [];
  candidates.push({ declarations, classes: mapping.classes });
  index.set(anchor, candidates);
}
for (const candidates of index.values()) {
  candidates.sort((a, b) => b.declarations.length - a.declarations.length);
}

export function getTailwindBy(rule: Record<string, string>) {
  const tailwind: string[] = [];
  const consumed = new Set<string>();
  for (const property of Object.keys(rule).sort()) {
    if (consumed.has(property)) continue;
    const candidates =
      index.get(JSON.stringify([property, rule[property]])) ?? [];
    for (const candidate of candidates) {
      if (
        !candidate.declarations.every(
          ([key, value]) => !consumed.has(key) && rule[key] === value,
        )
      )
        continue;
      tailwind.push(candidate.classes);
      for (const [key] of candidate.declarations) consumed.add(key);
      break;
    }
  }
  const useful = Object.fromEntries(
    Object.entries(rule).filter(([property]) => !consumed.has(property)),
  );
  return { tailwind, useful: Object.keys(useful).length ? useful : null };
}
