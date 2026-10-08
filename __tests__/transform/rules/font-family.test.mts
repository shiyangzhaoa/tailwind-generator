import { convertDeclaration as fontFamily } from '../../convert-declaration.mjs';

describe('font-family', () => {
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
