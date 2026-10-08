import { compile } from 'tailwindcss';
import { transform as convert } from '../../../src/transform/rules/transform.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['transform', 'scale(1)'],
  ['transform', 'scale(0.7)'],
  ['transform', 'scale(1.3, 0.4)'],
  ['transform', 'rotate(1deg)'],
  ['transform', 'rotate(11deg)'],
  ['transform', 'translateY(50%)'],
  ['transform', 'translateY(11px)'],
];

describe('transform: whole declaration', () => {
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
