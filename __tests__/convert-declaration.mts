import { gen } from '../src/index.mjs';
import type { CSSInput } from '../src/index.mjs';

/** Convert one declaration through the public entry; false when it fails. */
export function convertDeclaration([property, value]: [string, string]) {
  const result = gen({ [property]: value } as CSSInput);
  return result.failed.length ? false : result.converted;
}
