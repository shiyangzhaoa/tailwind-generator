import { compile } from 'tailwindcss';
import { transition as convert } from '../../../src/transform/rules/transition.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['transition', 'margin-right 4s'],
  ['transition', 'margin-right 4s 1s'],
  ['transition', 'margin-right 4s ease-in-out'],
  ['transition', 'margin-right 4s, color 1s'],
];

describe('transition: whole declaration', () => {
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
