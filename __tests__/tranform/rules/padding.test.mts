import { padding } from '../../../src/transform/rules/padding.mjs';

describe('padding rule', () => {
  test('not match', () => {
    expect(padding(['margin-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(padding(['padding', '13px 12px 1px'])).toBe(
      'pb-px pt-[13px] pr-3 pl-3',
    );
  });

  test('1px', () => {
    expect(padding(['padding', '1px'])).toBe('p-px');
  });

  test('base item', () => {
    expect(padding(['padding-left', '13px'])).toBe('pl-[13px]');
  });

  test('variable init', () => {
    expect(padding(['padding', 'var(--test, 15px)'])).toBe('p-[15px]');
  });

  test('variable init int', () => {
    expect(padding(['padding', 'var(--test, 16px)'])).toBe('p-4');
  });

  test('variable', () => {
    expect(padding(['padding', 'var(--test)'])).toBe('p-(--test)');
  });

  test('variable deep', () => {
    expect(padding(['padding', 'var(--test, var(--test, 15px))'])).toBe(
      'p-[15px]',
    );
  });

  test('scroll padding', () => {
    expect(padding(['scroll-padding', '1px'])).toBe('scroll-p-[1px]');
  });

  test('scroll padding arbitrary', () => {
    expect(padding(['scroll-padding-left', '3px'])).toBe('scroll-pl-[3px]');
  });
});
