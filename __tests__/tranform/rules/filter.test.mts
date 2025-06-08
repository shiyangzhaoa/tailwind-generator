import { filter } from '../../../src/transform/rules/filter.mjs';

describe('filter', () => {
  test('not match', () => {
    expect(filter(['margin', '1'])).toBe(false);
  });

  test('blur', () => {
    expect(filter(['filter', 'blur(4px)'])).toBe('blur-xs');
  });

  test('blur arbitrary', () => {
    expect(filter(['filter', 'blur(17px)'])).toBe('blur-[17px]');
  });

  test('brightness', () => {
    expect(filter(['filter', 'brightness(0.4)'])).toBe('brightness-[0.4]');
  });

  test('contrast', () => {
    expect(filter(['filter', 'contrast(200%)'])).toBe('contrast-[200%]');
  });

  test('drop-shadow', () => {
    expect(filter(['filter', 'drop-shadow(16px 16px 20px blue)'])).toBe(
      'drop-shadow-[16px_16px_20px_blue]',
    );
  });

  test('multiple', () => {
    expect(
      filter([
        'filter',
        'drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)',
      ]),
    ).toBe('sepia drop-shadow-[-3px_-3px_blue]');
  });
});
