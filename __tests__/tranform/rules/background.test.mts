import { compile } from 'tailwindcss';
import { background as convert } from '../../../src/transform/rules/background.mjs';
import { parseValue } from '../../../src/core/value.mjs';

const fixtures: [string, string][] = [
  ['background', 'green'],
  ['background', 'var(--color, #ccc)'],
  ['background', '#ff0000'],
  ['background', 'rgb(255, 0, 0)'],
  ['background', 'transparent'],
  ['background', 'inherit'],
  ['background', 'repeat'],
  ['background', 'repeat-x'],
  ['background', 'repeat-y'],
  ['background', 'no-repeat'],
  ['background', 'fixed'],
  ['background', 'local'],
  ['background', 'scroll'],
  ['background', 'center'],
  ['background', 'top'],
  ['background', 'bottom'],
  ['background', 'left'],
  ['background', 'right'],
  ['background', 'border-box'],
  ['background', 'padding-box'],
  ['background', 'content-box'],
  ['background', 'border-box'],
  ['background', 'padding-box'],
  ['background', 'content-box'],
  ['background', 'linear-gradient(to right, red, blue)'],
  ['background', 'url(image1.png), url(image2.png)'],
  ['background', 'content-box radial-gradient(crimson, skyblue)'],
  ['background', 'no-repeat url("../../media/examples/lizard.png")'],
  [
    'background',
    'left 5% / 15% 60% repeat-x url("../../media/examples/star.png")',
  ],
  ['background', 'top left / 50% 25% no-repeat #fff'],
  ['background', 'oklch(0.5 0.2 180)'],
  ['background', 'var(--bg-color)'],
];

describe('background: whole declaration', () => {
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
