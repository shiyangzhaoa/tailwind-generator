import { color } from '../../../src/transform/rules/color.mjs';

describe('color', () => {
  test('not match', () => {
    expect(color(['margin', '1'])).toBe(false);
  });

  test('text color', () => {
    expect(color(['color', 'oklch(97.1% 0.013 17.38)'])).toBe('text-red-50');
  });

  test('text color rgba', () => {
    expect(color(['color', 'rgba(255, 255, 255, 0.8)'])).toBe(
      'text-[rgba(255,_255,_255,_0.8)]',
    );
  });

  test('text color arbitrary', () => {
    expect(color(['color', '#7743CE'])).toBe('text-[#7743CE]');
  });

  test('text-decoration-color', () => {
    expect(color(['text-decoration-color', '#e2e8f0'])).toBe(
      'decoration-slate-200',
    );
  });

  test('text color arbitrary', () => {
    expect(color(['text-decoration-color', '#7743CE'])).toBe(
      'decoration-[#7743CE]',
    );
  });

  test('background-color', () => {
    expect(color(['background-color', 'oklch(89.2% 0.058 10.001)'])).toBe(
      'bg-rose-200',
    );
  });

  test('text color arbitrary', () => {
    expect(color(['background-color', '#7743CE'])).toBe('bg-[#7743CE]');
  });

  test('border-color', () => {
    expect(color(['border-color', 'oklch(89.2% 0.058 10.001)'])).toBe(
      'border-rose-200',
    );
  });

  test('accent-color', () => {
    expect(color(['accent-color', 'oklch(89.2% 0.058 10.001)'])).toBe(
      'accent-rose-200',
    );
  });

  test('caret-color', () => {
    expect(color(['caret-color', 'oklch(89.2% 0.058 10.001)'])).toBe(
      'caret-rose-200',
    );
  });
});
