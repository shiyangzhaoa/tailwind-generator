import { translate } from '../../../src/transform/rules/translate.mjs';

describe('translate', () => {
  test('not match', () => {
    expect(translate(['margin-left', '12px'])).toBe(false);
  });

  test('single value - translate(12px)', () => {
    expect(translate(['translate', '12px'])).toBe('translate-x-3');
  });

  test('single value - translate(50%)', () => {
    expect(translate(['translate', '50%'])).toBe('translate-x-[50%]');
  });

  test('single value - translate(100%)', () => {
    expect(translate(['translate', '100%'])).toBe('translate-x-full');
  });

  test('single value - translate(-12px)', () => {
    expect(translate(['translate', '-12px'])).toBe('-translate-x-3');
  });

  test('two values - translate(12px, 24px)', () => {
    expect(translate(['translate', '12px 24px'])).toBe(
      'translate-x-3 translate-y-6',
    );
  });

  test('two values - translate(50%, 25%)', () => {
    expect(translate(['translate', '50% 25%'])).toBe(
      'translate-x-[50%] translate-y-[25%]',
    );
  });

  test('two values - translate(0, 12px)', () => {
    expect(translate(['translate', '0 12px'])).toBe('translate-y-3');
  });

  test('two values - translate(12px, 0)', () => {
    expect(translate(['translate', '12px 0'])).toBe('translate-x-3');
  });

  test('three values - translateZ zero', () => {
    expect(translate(['translate', '12px 24px 0'])).toBe(
      'translate-x-3 translate-y-6',
    );
  });

  test('three values - translateZ non-zero', () => {
    expect(translate(['translate', '12px 24px 8px'])).toBe(
      'translate-[12px_24px_8px]',
    );
  });

  test('zero value', () => {
    expect(translate(['translate', '0'])).toBe('translate-x-0');
  });

  test('with extra spaces', () => {
    expect(translate(['translate', '  12px   24px  '])).toBe(
      'translate-x-3 translate-y-6',
    );
  });

  test('arbitrary values', () => {
    expect(translate(['translate', '13px'])).toBe('translate-x-[13px]');
  });

  test('negative values', () => {
    expect(translate(['translate', '-12px -24px'])).toBe(
      '-translate-x-3 -translate-y-6',
    );
  });
});
