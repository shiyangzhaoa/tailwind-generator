import { compile } from 'tailwindcss';
import { convertDeclaration as convert } from '../../convert-declaration.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['border', '0.5rem dashed pink'],
  ['border', 'solid'],
  ['border', 'dashed red'],
  ['border', '0.5rem outset pink'],
  ['border-left', '0.5rem outset pink'],
  ['border', 'dashed red dashed red'],
  ['border-right', '2px solid #ff0000'],
  ['border-top', 'thin dotted oklch(80.8% 0.114 19.571)'],
  ['border-top', 'thin dotted rgb(0, 255, 0)'],
  ['border-bottom', 'medium double hsl(240, 100%, 50%)'],
  ['border', '0 none black'],
  ['border', '1px solid transparent'],
  ['border', '1px solid currentColor'],
  ['border', '1vw solid black'],
];

describe('border: whole declaration', () => {
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
