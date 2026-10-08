import { compile } from 'tailwindcss';
import { createGenerator, gen } from '../src/index.mjs';
import { createRegistry } from '../src/core/registry.mjs';
import { getTailwindBy } from '../src/core/mappings.mjs';
import {
  functionParser,
  parseValue,
  resolveVariables,
} from '../src/core/value.mjs';
import { createContext } from '../src/transform/context.mjs';
import { rules } from '../src/transform/rules/index.mjs';

describe('isolated conversion contexts', () => {
  test('variables never leak between calls', () => {
    expect(gen({ width: 'var(--size)' }, { '--size': '12px' }).converted).toBe(
      'w-3',
    );
    expect(gen({ width: 'var(--size)' }).converted).toBe('[width:var(--size)]');
  });
  test('configured instances snapshot options and isolate overrides', () => {
    const options = { variables: { '--size': '12px' } };
    const generate = createGenerator(options);
    options.variables['--size'] = '99px';
    expect(
      generate({ width: 'var(--size)' }, { '--size': '20px' }).converted,
    ).toBe('w-5');
    expect(generate({ width: 'var(--size)' }).converted).toBe('w-3');
    expect(
      createGenerator({ variables: { '--size': '8px' } })({
        width: 'var(--size)',
      }).converted,
    ).toBe('w-2');
  });
  test('known variables take precedence over fallbacks', () => {
    expect(
      gen({ width: 'var(--size, 20px)' }, { '--size': '12px' }).converted,
    ).toBe('w-3');
  });
  test('nested fallback commas are preserved', () => {
    expect(gen({ color: 'var(--missing, rgb(1, 2, 3))' }).failed).toEqual([]);
    const resolve = (value: string) => resolveVariables(value, createContext());
    expect(resolve('var(--a, var(--b, rgb(1, 2, 3)))')).toBe('rgb(1, 2, 3)');
    expect(resolve('var(--a, var(--a, 12px))')).toBe('12px');
  });
  test('cyclic variables terminate and honor the caller fallback', () => {
    const context = createContext({
      variables: { '--a': 'var(--b)', '--b': 'var(--a)' },
    });
    expect(resolveVariables('var(--a)', context)).toBe('var(--a)');
    expect(resolveVariables('var(--a, 12px)', context)).toBe('12px');
  });
  test('self references inside a variable fallback still form a cycle', () => {
    const context = createContext({ variables: { '--a': 'var(--a, 10px)' } });
    expect(resolveVariables('var(--a, 12px)', context)).toBe('12px');
  });
  test('variables inside functions resolve without touching quoted text', () => {
    const context = createContext({ variables: { '--x': '12px' } });
    expect(resolveVariables('calc(100% - var(--x))', context)).toBe(
      'calc(100% - 12px)',
    );
    expect(resolveVariables('"var(--x)"', context)).toBe('"var(--x)"');
  });
});

describe('parsing and registration', () => {
  test('function parsing retains nested functions and trailing arguments', () => {
    expect(
      functionParser('translate(calc(100% - 1px), var(--y, 2px))'),
    ).toEqual(['translate', 'calc(100% - 1px), var(--y, 2px)']);
    expect(functionParser('rotate(1deg) scale(2)')).toEqual([null, null]);
  });
  test.each(['calc(1px', 'rgb(1, 2, 3))', '"unterminated', '1px; color:red'])(
    'rejects malformed boundaries: %s',
    (value) => {
      expect(gen({ width: value })).toEqual({
        converted: '',
        failed: [{ property: 'width', value, reason: 'invalid-value' }],
      });
    },
  );
  test('accepts data URL punctuation and quoted delimiters', () => {
    expect(parseValue('url("data:image/svg+xml;a(b)")').valid).toBe(true);
    expect(parseValue('url(data:image/png;base64,abc)').valid).toBe(true);
    expect(parseValue('"[hello];"').valid).toBe(true);
  });
  test('rejects duplicate registrations', () => {
    expect(() => createRegistry([rules[0], rules[0]])).toThrow(
      'Duplicate rule',
    );
  });
  test('registry includes every declared property exactly once', () => {
    const registry = createRegistry(rules);
    for (const rule of rules)
      for (const property of rule.properties)
        expect(registry.get(property)).toBe(rule);
  });
  test('combination matches consume only complete candidates', () => {
    const input = {
      'align-items': 'center',
      display: 'flex',
      width: 'unmatched',
    };
    const result = getTailwindBy(input);
    expect(result.tailwind).toEqual(['items-center', 'flex']);
    expect(result.useful).toEqual({ width: 'unmatched' });
    expect(input.width).toBe('unmatched');
  });
});

const semantics: [Parameters<typeof gen>[0], string][] = [
  [
    { transform: 'rotate(10deg) matrix(1, 0, 0, 1, 10, 20)' },
    'transform: rotate(10deg) matrix(1, 0, 0, 1, 10, 20);',
  ],
  [
    { filter: 'drop-shadow(1px 1px red) sepia(1) drop-shadow(2px 2px blue)' },
    'filter: drop-shadow(1px 1px red) sepia(1) drop-shadow(2px 2px blue);',
  ],
  [
    { transition: 'opacity 1s ease, transform 2s linear' },
    'transition: opacity 1s ease, transform 2s linear;',
  ],
  [
    { background: 'url("a_b.png") left top / cover no-repeat, red' },
    'background: url("a_b.png") left top / cover no-repeat, red;',
  ],
  [{ content: '"hello_world again"' }, 'content: "hello_world again";'],
  [{ width: 'var(--panel_width)' }, 'width: var(--panel_width);'],
  [
    { gridTemplateColumns: 'repeat(2, minmax(0, 1fr)) 20px' },
    'grid-template-columns: repeat(2, minmax(0, 1fr)) 20px;',
  ],
];

describe('complete declaration serialization', () => {
  test.each(semantics)('%j', async (input, declaration) => {
    const result = createGenerator({ mode: 'preserve' })(input);
    expect(result.failed).toEqual([]);
    const compiler = await compile('@tailwind utilities;');
    expect(compiler.build(result.converted.split(' '))).toContain(declaration);
  });
  test('utility mode preserves an entire function chain', () => {
    expect(gen({ transform: 'rotate(10deg) scale(2)' })).toEqual({
      converted: '[transform:rotate(10deg)_scale(2)]',
      failed: [],
    });
  });
  test('grid optimization never drops trailing tracks', async () => {
    const result = gen({
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr)) 20px',
    });
    const compiler = await compile('@tailwind utilities;');
    expect(compiler.build(result.converted.split(' '))).toContain(
      'grid-template-columns: repeat(2, minmax(0, 1fr)) 20px;',
    );
  });
  test('literal mode bypasses theme-based spacing and color conversion', () => {
    expect(
      createGenerator({ mode: 'preserve' })({ padding: '24px', color: '#fff' }),
    ).toEqual({ converted: '[padding:24px] [color:#fff]', failed: [] });
  });
});
