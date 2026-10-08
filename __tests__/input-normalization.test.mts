import { compile } from 'tailwindcss';
import { createGenerator, gen } from '../src/index.mjs';
import type { CSSInput } from '../src/index.mjs';

async function build(classes: string) {
  const compiler = await compile(
    '@theme { --spacing: 0.25rem; } @tailwind utilities;',
  );
  return compiler.build(classes.split(' '));
}

describe('!important declarations', () => {
  test.each<[CSSInput, string, string]>([
    [{ color: 'red !important' }, 'text-[red]!', 'color: red !important;'],
    [{ display: 'flex!important' }, 'flex!', 'display: flex !important;'],
    [
      { padding: '16px ! IMPORTANT' },
      'p-4!',
      'padding: calc(var(--spacing) * 4) !important;',
    ],
    [
      { transform: 'rotate(1deg) !important' },
      '[transform:rotate(1deg)]!',
      'transform: rotate(1deg) !important;',
    ],
  ])('%j', async (input, expected, declaration) => {
    expect(gen(input)).toEqual({ converted: expected, failed: [] });
    expect(await build(expected)).toContain(declaration);
  });

  test('importance is matched separately from normal declarations', () => {
    expect(
      gen({ display: 'flex !important', alignItems: 'center' })
        .converted.split(' ')
        .sort(),
    ).toEqual(['flex!', 'items-center']);
  });

  test('preserve mode keeps the important flag', () => {
    expect(
      createGenerator({ mode: 'preserve' })({ color: 'red !important' }),
    ).toEqual({ converted: '[color:red]!', failed: [] });
  });

  test('a bare important flag is invalid', () => {
    expect(gen({ color: '!important' }).failed).toEqual([
      { property: 'color', value: '!important', reason: 'invalid-value' },
    ]);
  });
});

describe('numeric values follow the React style convention', () => {
  test.each<[CSSInput, string]>([
    [{ width: 100 }, 'width: calc(var(--spacing) * 25);'],
    [{ marginTop: -8 }, 'margin-top: calc(var(--spacing) * -2);'],
    [{ width: 0 }, 'width: calc(var(--spacing) * 0);'],
    [{ opacity: 0.5 }, 'opacity: 0.5;'],
    [{ zIndex: 10 }, 'z-index: 10;'],
    [{ lineHeight: 1.5 }, 'line-height: 1.5;'],
    [{ flexGrow: 1 }, 'flex-grow: 1;'],
  ])('%j', async (input, declaration) => {
    const result = gen(input);
    expect(result.failed).toEqual([]);
    expect(await build(result.converted)).toContain(declaration);
  });

  test.each<CSSInput>([
    { opacity: 0.5 },
    { fontWeight: 700 },
    { zIndex: 10 },
    { flexGrow: 1 },
    { lineHeight: 1.5 },
  ])('unitless %j matches its string form', (input) => {
    const [[property, value]] = Object.entries(input);
    expect(gen(input)).toEqual(gen({ [property]: String(value) } as CSSInput));
  });
});

describe('vendor-prefixed property names', () => {
  test.each<[CSSInput, string]>([
    [{ WebkitLineClamp: 2 }, '-webkit-line-clamp'],
    [{ '-webkit-line-clamp': 2 } as CSSInput, '-webkit-line-clamp'],
    [{ msTransform: 'none' } as CSSInput, '-ms-transform'],
  ])('%j keeps its prefix', (input, property) => {
    expect(gen(input).failed.map((failure) => failure.property)).toEqual([
      property,
    ]);
  });

  test('prefixed declarations take part in exact mappings', () => {
    expect(
      gen({
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }),
    ).toEqual({ converted: 'antialiased', failed: [] });
  });
});

describe('keyword case', () => {
  test.each<[CSSInput, string]>([
    [{ display: 'FLEX' }, 'flex'],
    [{ color: 'currentColor' }, 'text-current'],
    [{ color: 'CURRENTCOLOR' }, 'text-current'],
  ])('%j', (input, expected) => {
    expect(gen(input)).toEqual({ converted: expected, failed: [] });
  });

  test('identifiers outside keyword lookup keep their case', () => {
    expect(gen({ fontFamily: '"Helvetica Neue"' }).converted).toContain(
      'Helvetica',
    );
  });
});
