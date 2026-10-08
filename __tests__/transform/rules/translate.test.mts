import { compile } from 'tailwindcss';
import { convertDeclaration as convert } from '../../convert-declaration.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['translate', '12px'],
  ['translate', '50%'],
  ['translate', '100%'],
  ['translate', '-12px'],
  ['translate', '12px 24px'],
  ['translate', '50% 25%'],
  ['translate', '0 12px'],
  ['translate', '12px 0'],
  ['translate', '12px 24px 0'],
  ['translate', '12px 24px 8px'],
  ['translate', '0'],
  ['translate', '  12px   24px  '],
  ['translate', '13px'],
  ['translate', '-12px -24px'],
];

describe('translate: whole declaration', () => {
  test('does not handle unrelated properties', () => {
    expect(convert(['unrelated', '12px'])).toBe(false);
  });
  test.each(fixtures)('%s: %s', async (property, value) => {
    if (!parseValue(value).valid) {
      expect(convert([property, value])).toBe(false);
      return;
    }
    const result = convert([property, value]);
    expect(typeof result).toBe('string');
    const compiler = await compile('@tailwind utilities;');
    const css = compiler.build([result as string]);
    // The compiler must retain every component, including function order.
    expect(css).toContain(property + ': ' + value.trim() + ';');
  });
});
