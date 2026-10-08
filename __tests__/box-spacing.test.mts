import { compile } from 'tailwindcss';
import { gen } from '../src/index.mjs';
import type { CSSInput } from '../src/index.mjs';

async function build(classes: string) {
  const compiler = await compile(
    '@theme { --spacing: 0.25rem; } @tailwind utilities;',
  );
  return compiler.build(classes.split(' '));
}

describe('padding and margin', () => {
  test.each<[CSSInput, string]>([
    [{ padding: '16px' }, 'p-4'],
    [{ padding: '1px' }, 'p-px'],
    [{ paddingTop: '16px' }, 'pt-4'],
    [{ paddingLeft: '13px' }, 'pl-[13px]'],
    [{ marginLeft: '1rem' }, 'ml-4'],
    [{ marginTop: '-8px' }, '-mt-2'],
    [{ marginTop: '-1px' }, '-mt-px'],
    [{ marginRight: 'auto' }, 'mr-auto'],
    [{ margin: '2em' }, 'm-[2em]'],
    [{ padding: '10%' }, 'p-[10%]'],
    [{ paddingInline: '8px' }, 'px-2'],
    [{ marginBlock: '-4px' }, '-my-1'],
    [{ paddingInlineStart: '4px' }, 'ps-1'],
    [{ scrollPaddingTop: '8px' }, 'scroll-pt-2'],
    [{ scrollMargin: '-4px' }, '-scroll-m-1'],
    [{ scrollPadding: '3px' }, 'scroll-p-[3px]'],
    [{ padding: '13px 12px 1px' }, 'pt-[13px] pr-3 pb-px pl-3'],
    [{ margin: '0 auto' }, 'mt-0 mr-auto mb-0 ml-auto'],
    [{ marginTop: 'calc(100% - 1px)' }, 'mt-[calc(100%_-_1px)]'],
    [
      { margin: 'calc(100% - 1px) 0' },
      'mt-[calc(100%_-_1px)] mr-0 mb-[calc(100%_-_1px)] ml-0',
    ],
  ])('%j', async (input, expected) => {
    expect(gen(input)).toEqual({ converted: expected, failed: [] });
    for (const name of expected.split(' '))
      expect(await build(name)).not.toBe('');
  });

  test.each<[CSSInput, string[]]>([
    [{ marginTop: 'calc(100% - 1px)' }, ['margin-top: calc(100% - 1px);']],
    [
      { margin: 'calc(100% - 1px) 0' },
      ['margin-top: calc(100% - 1px);', 'margin-bottom: calc(100% - 1px);'],
    ],
    [{ paddingTop: '16px' }, ['padding-top: calc(var(--spacing) * 4);']],
  ])('%j compiles to the original declaration', async (input, declarations) => {
    const css = await build(gen(input).converted);
    for (const declaration of declarations) expect(css).toContain(declaration);
  });

  test('variable fallbacks are resolved before conversion', () => {
    expect(gen({ padding: 'var(--test, 16px)' }).converted).toBe('p-4');
    expect(gen({ margin: 'var(--a, var(--b, 15px))' }).converted).toBe(
      'm-[15px]',
    );
  });

  test('more than four values are rejected', () => {
    expect(gen({ padding: '1px 2px 3px 4px 5px' }).failed).toEqual([
      {
        property: 'padding',
        value: '1px 2px 3px 4px 5px',
        reason: 'unsupported-value',
      },
    ]);
  });
});
