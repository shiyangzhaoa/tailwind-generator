// Compact form of the generated mapping table. scripts/generate-mappings.mjs
// encodes it and verifies that decoding restores every source entry.

export interface Mapping {
  declarations: Record<string, string>;
  classes: string;
}

export interface MappingData {
  /**
   * Single declarations that share a shape: class `${prefix}${name}` maps to
   * `${property}: ${before}${name}${after}` for every name in a list.
   */
  templates: [
    property: string,
    prefix: string,
    before: string,
    after: string,
    names: number,
  ][];
  /** Name lists, shared by templates such as every color utility. */
  names: string[][];
  /** Every other mapping, in source order. */
  literals: [declarations: [string, string][], classes: string][];
}

export function decodeMappings(data: MappingData): Mapping[] {
  const mappings: Mapping[] = data.literals.map(([declarations, classes]) => ({
    declarations: Object.fromEntries(declarations),
    classes,
  }));
  for (const [property, prefix, before, after, list] of data.templates)
    for (const name of data.names[list])
      mappings.push({
        declarations: { [property]: `${before}${name}${after}` },
        classes: `${prefix}${name}`,
      });
  return mappings;
}
