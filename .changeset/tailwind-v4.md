---
'tailwind-generator': minor
---

Support Tailwind CSS 4.1 (mappings pinned to 4.1.18); Tailwind CSS 3 is no longer supported.

- `gen()` returns `{ converted, failed }`, where `failed` lists each unconverted declaration with a reason (`unsupported-property`, `unsupported-value`, `invalid-value`).
- `createGenerator({ variables, mode })` reuses configuration; `mode: 'preserve'` emits theme-independent arbitrary properties.
- Shorthands such as `transform`, `filter`, `background`, and `transition` are kept as whole declarations, preserving function order and reset behavior.
- Input follows React style conventions: vendor prefixes (`WebkitLineClamp`), numbers as pixels except unitless properties, and `!important` as Tailwind's `!` modifier.
- Arbitrary values keep their spaces (`calc(1px + 2px) auto`), padding and margin longhands use the spacing scale, and ambiguous keywords such as `fontWeight: 'bolder'` get a type hint.
