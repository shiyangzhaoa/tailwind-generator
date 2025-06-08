import { fontFamily } from '../../../src/transform/rules/font-family.mjs';

describe('font-family', () => {
  test('not match', () => {
    expect(fontFamily(['margin-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(
      fontFamily([
        'font-family',
        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ]),
    ).toBe('font-sans');
  });

  test('var', () => {
    expect(fontFamily(['font-family', 'Open Sans'])).toBe('font-[Open_Sans]');
  });
});
