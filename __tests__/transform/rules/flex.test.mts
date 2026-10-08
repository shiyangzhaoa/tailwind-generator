import { convertDeclaration as flex } from '../../convert-declaration.mjs';

describe('flex', () => {
  test('base', () => {
    expect(flex(['flex', '1'])).toBe('flex-[1]');
  });

  test('flex auto', () => {
    expect(flex(['flex', '1 1 auto'])).toBe('flex-auto');
  });

  test('flex initial', () => {
    expect(flex(['flex', '0 1 auto'])).toBe('flex-initial');
  });

  test('flex none', () => {
    expect(flex(['flex', 'none'])).toBe('flex-none');
  });

  test('arbitrary', () => {
    expect(flex(['flex', '2 2 0%'])).toBe('flex-[2_2_0%]');
  });

  test('single value with unit', () => {
    expect(flex(['flex', '2rem'])).toBe('flex-[2rem]');
  });

  test('single value with percentage', () => {
    expect(flex(['flex', '50%'])).toBe('flex-[50%]');
  });

  test('two values', () => {
    expect(flex(['flex', '2 3'])).toBe('flex-[2_3]');
  });

  test('three values with different units', () => {
    expect(flex(['flex', '2 3 10%'])).toBe('flex-[2_3_10%]');
  });

  test('calc value', () => {
    expect(flex(['flex', 'calc(100% - 20px)'])).toBe(
      'flex-[calc(100%_-_20px)]',
    );
  });

  test('negative value', () => {
    expect(flex(['flex', '-1'])).toBe('flex-[-1]');
  });

  test('decimal value', () => {
    expect(flex(['flex', '1.5'])).toBe('flex-[1.5]');
  });

  test('zero value', () => {
    expect(flex(['flex', '0'])).toBe('flex-[0]');
  });

  test('invalid value', () => {
    expect(flex(['flex', 'invalid'])).toBe('flex-[invalid]');
  });
});
