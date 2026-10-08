import { compile } from 'tailwindcss';
import { convertDeclaration as convert } from '../../convert-declaration.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['scale', '1'],
  ['scale', '0.5'],
  ['scale', '0.75'],
  ['scale', '1.25'],
  ['scale', '0.7'],
  ['scale', '50%'],
  ['scale', '125%'],
  ['scale', '70%'],
  ['scale', '1.25 1'],
  ['scale', '1 0.5'],
  ['scale', '1.25 0.75'],
  ['scale', '125% 100%'],
  ['scale', '1 1 1.5'],
  ['scale', '1 1 1'],
  ['scale', '1.5 1 1'],
  ['scale', '1 1.5 1'],
  ['scale', '1.25 0.75 1.5'],
  ['scale', '0'],
  ['scale', '  1.5   1  '],
];

describe('scale: whole declaration', () => {
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
