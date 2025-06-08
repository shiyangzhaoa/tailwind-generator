import { borderSpacing } from '../../../src/transform/rules/border-spacing.mjs';

describe('border-spacing', () => {
  test('not match', () => {
    expect(borderSpacing(['margin-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(borderSpacing(['border-spacing', '80px 5rem'])).toBe(
      'border-spacing-20',
    );
  });

  test('x same as y', () => {
    expect(borderSpacing(['border-spacing', '11px 11px'])).toBe(
      'border-spacing-[11px]',
    );
  });

  test('x y is diff', () => {
    expect(borderSpacing(['border-spacing', '11px 13px'])).toBe(
      'border-spacing-x-[11px] border-spacing-y-[13px]',
    );
  });

  test('single value', () => {
    expect(borderSpacing(['border-spacing', '10px'])).toBe(
      'border-spacing-[10px]',
    );
  });

  test('different units', () => {
    expect(borderSpacing(['border-spacing', '1rem 20px'])).toBe(
      'border-spacing-x-4 border-spacing-y-5',
    );
  });

  test('zero values', () => {
    expect(borderSpacing(['border-spacing', '0 0'])).toBe('border-spacing-0');
    expect(borderSpacing(['border-spacing', '0px 0px'])).toBe(
      'border-spacing-0',
    );
  });

  test('with em unit', () => {
    expect(borderSpacing(['border-spacing', '1.5em 2em'])).toBe(
      'border-spacing-x-[1.5em] border-spacing-y-[2em]',
    );
  });

  test('with viewport units', () => {
    expect(borderSpacing(['border-spacing', '1vw 2vh'])).toBe(
      'border-spacing-x-[1vw] border-spacing-y-[2vh]',
    );
  });
});
