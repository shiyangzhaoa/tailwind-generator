# tailwind-generator

Convert CSS declaration objects into Tailwind CSS class names.

[![codecov](https://codecov.io/gh/shiyangzhaoa/tailwind-generator/graph/badge.svg?token=8XKK9DE64P)](https://codecov.io/gh/shiyangzhaoa/tailwind-generator)
[![shields](https://img.shields.io/npm/dm/tailwind-generator?style=flat-square)](https://www.npmjs.com/package/tailwind-generator)

## Compatibility

This branch targets **Tailwind CSS 4.1**, with mappings and compiler tests pinned to **4.1.18**. Tailwind CSS 3 compatibility is not maintained by this implementation. An npm release may not yet include the changes in this branch.

Default utility conversion assumes the default theme, a `16px` root font size, and `0.25rem` spacing. Use `createGenerator({ mode: 'preserve' })` when those assumptions do not fit your application. The generator does not load your Tailwind configuration or evaluate styles in the DOM.

## Installation

```sh
npm install tailwind-generator
```

## Basic usage

```ts
import { gen } from 'tailwind-generator';

console.log(
  gen({
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    width: '1152px',
  }),
);
// { converted: 'flex flex-col p-6 w-6xl', failed: [] }
```

`gen(css, variables?)` accepts camelCase or kebab-case property names and string or number values. Properties with `undefined` values are ignored. Each call is independent.

- `converted`: generated classes, merged with `tailwind-merge`.
- `failed`: `{ property, value, reason }` objects. Property names use kebab-case; values preserve the original input, including whitespace.

```ts
import { gen } from 'tailwind-generator';

console.log(gen({ padding: '24px', fontKerning: 'normal' }));
// {
//   converted: 'p-6',
//   failed: [
//     { property: 'font-kerning', value: 'normal', reason: 'unsupported-property' },
//   ],
// }
```

| Reason                 | Meaning                                                                     |
| ---------------------- | --------------------------------------------------------------------------- |
| `unsupported-property` | No registered rule or concrete mapping supports this property.              |
| `unsupported-value`    | The property is supported but its value could not be converted.             |
| `invalid-value`        | Empty value or malformed boundaries, such as an unclosed function or quote. |

This is not a complete CSS grammar validator. Syntactically balanced but invalid CSS can still pass through arbitrary-value output. Check failures and verify generated styles in your application.

## CSS variables

Known variables use their full names, including `--`. Supplied values take precedence over fallbacks. Variable values never leak into later calls.

```ts
import { gen } from 'tailwind-generator';

console.log(
  gen(
    { height: 'var(--panel-height, 20px)' },
    {
      '--panel-height': '12px',
    },
  ),
);
// { converted: 'h-3', failed: [] }

console.log(gen({ height: 'var(--panel-height)' }));
// { converted: '[height:var(--panel-height)]', failed: [] }
```

Nested functions and fallbacks are supported. Cyclic references terminate and use a fallback where available; unresolved references remain in the output.

## Reusable configuration and literal output

`createGenerator(options)` returns a function with the same arguments as `gen()`. Options are snapshotted at creation; per-call variables override configured variables for that call only.

```ts
import { createGenerator } from 'tailwind-generator';

const generate = createGenerator({
  mode: 'preserve',
  variables: { '--panel-width': '240px' },
});

console.log(generate({ width: 'var(--panel-width)', padding: '24px' }));
// { converted: '[width:240px] [padding:24px]', failed: [] }
```

`mode` is `'utilities'` by default. `'preserve'` emits literal arbitrary properties for supported declarations instead of matching theme tokens or spacing utilities. It preserves declaration values, but does not model the full cascade or resolve all overlapping shorthand/longhand interactions.

## Complete declarations

Complex declarations remain whole so function order, repeated functions, and shorthand resets are not lost:

```ts
import { gen } from 'tailwind-generator';

console.log(gen({ transform: 'rotate(10deg) translateX(20px)' }));
// { converted: '[transform:rotate(10deg)_translateX(20px)]', failed: [] }

console.log(gen({ filter: 'url(filters.svg#filter) blur(4px)' }));
// { converted: '[filter:url(filters.svg#filter)_blur(4px)]', failed: [] }

console.log(gen({ background: '#FFF' }));
// { converted: '[background:#FFF]', failed: [] }
```

Use a longhand such as `backgroundColor` if you intend to change only the color. A `background` shorthand also resets other background properties, so it is preserved as a shorthand.

Simple declarations can still use concise utilities:

```ts
import { gen } from 'tailwind-generator';

console.log(gen({ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }));
// { converted: 'grid-cols-4', failed: [] }
console.log(gen({ color: 'rgba(0,0,0,0.5)' }));
// { converted: 'text-[rgba(0,0,0,0.5)]', failed: [] }
console.log(gen({ fontWeight: 450 }));
// { converted: 'font-[450]', failed: [] }
```

## Migration

- `success` is now `converted`.
- `failed` contains objects instead of property names. Use `failed.map(({ property }) => property)` for the previous list shape.
- Variables are scoped to a call. Use `createGenerator({ variables })` to reuse explicit configuration.
- Composite declarations and unresolved variables may produce different class strings. Their complete values are retained rather than partially decomposed.

Exported types include `CSSInput`, `GeneratorOptions`, `ConversionResult`, `ConversionFailure`, and `ConversionFailureReason`.

## Development

```sh
pnpm install --frozen-lockfile
pnpm check:mappings
pnpm verify:mappings
pnpm typecheck
pnpm test -- --runInBand
pnpm build
pnpm test:package
pnpm exec playwright install chromium
pnpm test:browser
pnpm benchmark
```

For an existing Chrome installation, set `CHROME_PATH` when running browser tests. The build produces ESM and CommonJS packages.

Mappings and default tokens come from `data/tailwind-4.1.json`. Run `pnpm generate:mappings` after changing the snapshot; do not edit generated files directly. See [the architecture guide](docs/architecture.md) for module boundaries, rule registration, mapping provenance, and verification limits.
