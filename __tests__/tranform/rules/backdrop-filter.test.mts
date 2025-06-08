import { backdropFilter } from '../../../src/transform/rules/backdrop-filter.mjs';

describe('backdrop-filter', () => {
  test('not match', () => {
    expect(backdropFilter(['margin', '1'])).toBe(false);
  });

  test('blur', () => {
    expect(backdropFilter(['backdrop-filter', 'blur(4px)'])).toBe(
      'backdrop-blur-xs',
    );
  });

  test('blur with calc', () => {
    expect(backdropFilter(['backdrop-filter', 'blur(calc(8px + 4px))'])).toBe(
      'backdrop-blur-[calc(8px+4px)]',
    );
  });

  test('blur arbitrary', () => {
    expect(backdropFilter(['backdrop-filter', 'blur(17px)'])).toBe(
      'backdrop-blur-[17px]',
    );
  });

  test('brightness', () => {
    expect(backdropFilter(['backdrop-filter', 'brightness(0.4)'])).toBe(
      'backdrop-brightness-[0.4]',
    );
  });

  test('brightness with calc', () => {
    expect(
      backdropFilter(['backdrop-filter', 'brightness(calc(0.5 + 0.1))']),
    ).toBe('backdrop-brightness-[calc(0.5+0.1)]');
  });

  test('contrast', () => {
    expect(backdropFilter(['backdrop-filter', 'contrast(200%)'])).toBe(
      'backdrop-contrast-[200%]',
    );
  });

  test('contrast with calc', () => {
    expect(
      backdropFilter(['backdrop-filter', 'contrast(calc(150% + 50%))']),
    ).toBe('backdrop-contrast-[calc(150%+50%)]');
  });

  test('opacity', () => {
    expect(backdropFilter(['backdrop-filter', 'opacity(0.25)'])).toBe(
      'backdrop-opacity-[0.25]',
    );
  });

  test('opacity with calc', () => {
    expect(
      backdropFilter(['backdrop-filter', 'opacity(calc(0.5 - 0.2))']),
    ).toBe('backdrop-opacity-[calc(0.5-0.2)]');
  });

  test('grayscale', () => {
    expect(backdropFilter(['backdrop-filter', 'grayscale(0.5)'])).toBe(
      'backdrop-grayscale-[0.5]',
    );
  });

  test('grayscale with calc', () => {
    expect(
      backdropFilter(['backdrop-filter', 'grayscale(calc(0.3 + 0.2))']),
    ).toBe('backdrop-grayscale-[calc(0.3+0.2)]');
  });

  test('hue-rotate', () => {
    expect(backdropFilter(['backdrop-filter', 'hue-rotate(90deg)'])).toBe(
      'backdrop-hue-rotate-[90deg]',
    );
  });

  test('hue-rotate with calc', () => {
    expect(
      backdropFilter(['backdrop-filter', 'hue-rotate(calc(45deg + 45deg))']),
    ).toBe('backdrop-hue-rotate-[calc(45deg+45deg)]');
  });

  test('invert', () => {
    expect(backdropFilter(['backdrop-filter', 'invert(0.5)'])).toBe(
      'backdrop-invert-[0.5]',
    );
  });

  test('invert with calc', () => {
    expect(backdropFilter(['backdrop-filter', 'invert(calc(0.3 + 0.2))'])).toBe(
      'backdrop-invert-[calc(0.3+0.2)]',
    );
  });

  test('saturate', () => {
    expect(backdropFilter(['backdrop-filter', 'saturate(150%)'])).toBe(
      'backdrop-saturate-[150%]',
    );
  });

  test('saturate with calc', () => {
    expect(
      backdropFilter(['backdrop-filter', 'saturate(calc(100% + 50%))']),
    ).toBe('backdrop-saturate-[calc(100%+50%)]');
  });

  test('sepia', () => {
    expect(backdropFilter(['backdrop-filter', 'sepia(0.5)'])).toBe(
      'backdrop-sepia-[0.5]',
    );
  });

  test('sepia with calc', () => {
    expect(backdropFilter(['backdrop-filter', 'sepia(calc(0.3 + 0.2))'])).toBe(
      'backdrop-sepia-[calc(0.3+0.2)]',
    );
  });

  test('multiple filters', () => {
    expect(
      backdropFilter([
        'backdrop-filter',
        'blur(4px) brightness(0.5) contrast(200%)',
      ]),
    ).toBe(
      'backdrop-blur-xs backdrop-brightness-[0.5] backdrop-contrast-[200%]',
    );
  });

  test('multiple filters with calc', () => {
    expect(
      backdropFilter([
        'backdrop-filter',
        'blur(calc(4px + 2px)) brightness(calc(0.5 + 0.1))',
      ]),
    ).toBe('backdrop-blur-[calc(4px+2px)] backdrop-brightness-[calc(0.5+0.1)]');
  });

  test('url filter', () => {
    expect(backdropFilter(['backdrop-filter', 'url(filters.svg#filter)'])).toBe(
      'backdrop-url-[filters.svg#filter]',
    );
  });

  test('url filter with other filters', () => {
    expect(
      backdropFilter([
        'backdrop-filter',
        'url(filters.svg#filter) blur(4px) brightness(0.5)',
      ]),
    ).toBe(
      'backdrop-blur-xs backdrop-url-[filters.svg#filter] backdrop-brightness-[0.5]',
    );
  });
});
