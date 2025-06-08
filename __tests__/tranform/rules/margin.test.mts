import { margin } from '../../../src/transform/rules/margin.mjs';

describe('margin rule', () => {
  test('not match', () => {
    expect(margin(['padding-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(margin(['margin', '13px 12px 1px'])).toBe(
      'mb-px mt-[13px] mr-3 ml-3',
    );
  });

  test('1px', () => {
    expect(margin(['margin', '1px'])).toBe('m-px');
  });

  test('base item', () => {
    expect(margin(['margin-left', '13px'])).toBe('ml-[13px]');
  });

  test('variable init', () => {
    expect(margin(['margin', 'var(--test, 15px)'])).toBe('m-[15px]');
  });

  test('variable init int', () => {
    expect(margin(['margin', 'var(--test, 16px)'])).toBe('m-4');
  });

  test('variable', () => {
    expect(margin(['margin', 'var(--test)'])).toBe('m-(--test)');
  });

  test('variable deep', () => {
    expect(margin(['margin', 'var(--test, var(--test, 15px))'])).toBe(
      'm-[15px]',
    );
  });

  test('scroll margin', () => {
    expect(margin(['scroll-margin', '4px'])).toBe('scroll-m-1');
  });

  test('scroll margin negative', () => {
    expect(margin(['scroll-margin', '-4px'])).toBe('-scroll-m-1');
  });

  test('scroll margin arbitrary', () => {
    expect(margin(['scroll-margin', '3px'])).toBe('scroll-m-[3px]');
  });

  test('margin with rem', () => {
    expect(margin(['margin', '1rem'])).toBe('m-4');
  });

  test('margin with em', () => {
    expect(margin(['margin', '2em'])).toBe('m-[2em]');
  });

  test('margin with percentage', () => {
    expect(margin(['margin', '50%'])).toBe('m-[50%]');
  });

  test('margin with calc', () => {
    expect(margin(['margin', 'calc(100% - 20px)'])).toBe('m-[calc(100%-20px)]');
  });

  test('margin with viewport units', () => {
    expect(margin(['margin', '10vh'])).toBe('m-[10vh]');
    expect(margin(['margin', '20vw'])).toBe('m-[20vw]');
  });

  test('margin with zero', () => {
    expect(margin(['margin', '0'])).toBe('m-0');
    expect(margin(['margin', '0px'])).toBe('m-0');
  });

  test('margin with negative values', () => {
    expect(margin(['margin', '-1px'])).toBe('-m-px');
    expect(margin(['margin', '-4px'])).toBe('-m-1');
    expect(margin(['margin', '-1rem'])).toBe('-m-4');
  });

  test('margin with multiple values', () => {
    expect(margin(['margin', '1px 2px 3px 4px'])).toBe(
      'mt-px mr-[2px] mb-[3px] ml-1',
    );
    expect(margin(['margin', '1rem 2rem'])).toBe('mt-4 mr-8 mb-4 ml-8');
  });

  test('margin with auto', () => {
    expect(margin(['margin', 'auto'])).toBe('m-auto');
    expect(margin(['margin-left', 'auto'])).toBe('ml-auto');
    expect(margin(['margin-right', 'auto'])).toBe('mr-auto');
  });

  test('margin with inherit', () => {
    expect(margin(['margin', 'inherit'])).toBe('m-[inherit]');
  });

  test('margin with initial', () => {
    expect(margin(['margin', 'initial'])).toBe('m-[initial]');
  });

  test('margin with unset', () => {
    expect(margin(['margin', 'unset'])).toBe('m-[unset]');
  });

  test('margin with invalid value', () => {
    expect(margin(['margin', 'invalid'])).toBe('m-[invalid]');
  });
});
