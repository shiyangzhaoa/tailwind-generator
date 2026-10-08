import { compile } from 'tailwindcss';
import { convertDeclaration as convert } from '../../convert-declaration.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['filter', 'blur(4px)'],
  ['filter', 'blur(17px)'],
  ['filter', 'brightness(0.4)'],
  ['filter', 'contrast(200%)'],
  ['filter', 'drop-shadow(16px 16px 20px blue)'],
  [
    'filter',
    'drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)',
  ],
];

describe('filter: whole declaration', () => {
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
