# tailwind-generator

## 0.1.0

### Minor Changes

- e8b655a: The package is now ESM only. `require('tailwind-generator')` still works on Node.js 20.19+ and 22.12+, which load ES modules from CommonJS; older Node.js versions are no longer supported. Type-checking CommonJS files against the package needs TypeScript 5.8+.
- 1c64e09: Support Tailwind CSS 4.1 (mappings pinned to 4.1.18); Tailwind CSS 3 is no longer supported.

  - `gen()` returns `{ converted, failed }`, where `failed` lists each unconverted declaration with a reason (`unsupported-property`, `unsupported-value`, `invalid-value`).
  - `createGenerator({ variables, mode })` reuses configuration; `mode: 'preserve'` emits theme-independent arbitrary properties.
  - Shorthands such as `transform`, `filter`, `background`, and `transition` are kept as whole declarations, preserving function order and reset behavior.
  - Input follows React style conventions: vendor prefixes (`WebkitLineClamp`), numbers as pixels except unitless properties, and `!important` as Tailwind's `!` modifier.
  - Arbitrary values keep their spaces (`calc(1px + 2px) auto`), padding and margin longhands use the spacing scale, and ambiguous keywords such as `fontWeight: 'bolder'` get a type hint.
