import { compile } from 'tailwindcss';
import { convertDeclaration as convert } from '../../convert-declaration.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['transition-property', 'none'],
  ['transition-property', 'all'],
  ['transition-property', 'width, height'],
];

describe('transition-property: whole declaration', () => {
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
