import { compile } from 'tailwindcss';
import { backdropFilter as convert } from '../../../src/transform/rules/backdrop-filter.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['backdrop-filter', 'blur(4px)'],
  ['backdrop-filter', 'blur(calc(8px + 4px))'],
  ['backdrop-filter', 'blur(17px)'],
  ['backdrop-filter', 'brightness(0.4)'],
  ['backdrop-filter', 'brightness(calc(0.5 + 0.1))'],
  ['backdrop-filter', 'contrast(200%)'],
  ['backdrop-filter', 'contrast(calc(150% + 50%))'],
  ['backdrop-filter', 'opacity(0.25)'],
  ['backdrop-filter', 'opacity(calc(0.5 - 0.2))'],
  ['backdrop-filter', 'grayscale(0.5)'],
  ['backdrop-filter', 'grayscale(calc(0.3 + 0.2))'],
  ['backdrop-filter', 'hue-rotate(90deg)'],
  ['backdrop-filter', 'hue-rotate(calc(45deg + 45deg))'],
  ['backdrop-filter', 'invert(0.5)'],
  ['backdrop-filter', 'invert(calc(0.3 + 0.2))'],
  ['backdrop-filter', 'saturate(150%)'],
  ['backdrop-filter', 'saturate(calc(100% + 50%))'],
  ['backdrop-filter', 'sepia(0.5)'],
  ['backdrop-filter', 'sepia(calc(0.3 + 0.2))'],
  ['backdrop-filter', 'blur(4px) brightness(0.5) contrast(200%)'],
  ['backdrop-filter', 'blur(calc(4px + 2px)) brightness(calc(0.5 + 0.1))'],
  ['backdrop-filter', 'url(filters.svg#filter)'],
  ['backdrop-filter', 'url(filters.svg#filter) blur(4px) brightness(0.5)'],
];

describe('backdrop-filter: whole declaration', () => {
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
