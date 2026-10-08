import { convertDeclaration as flexBasis } from '../../convert-declaration.mjs';

describe('flex basis', () => {
  test('base', () => {
    expect(flexBasis(['flex-basis', '256px'])).toBe('basis-3xs');
  });

  test('custom', () => {
    expect(flexBasis(['flex-basis', '13px'])).toBe('basis-[13px]');
  });

  test('percentage', () => {
    expect(flexBasis(['flex-basis', '13%'])).toBe('basis-[13%]');
  });

  test('zero', () => {
    expect(flexBasis(['flex-basis', '0'])).toBe('basis-0');
  });

  test('auto value', () => {
    expect(flexBasis(['flex-basis', 'auto'])).toBe('basis-auto');
  });

  test('content value', () => {
    expect(flexBasis(['flex-basis', 'content'])).toBe('basis-[content]');
  });

  test('max-content value', () => {
    expect(flexBasis(['flex-basis', 'max-content'])).toBe(
      'basis-[max-content]',
    );
  });

  test('min-content value', () => {
    expect(flexBasis(['flex-basis', 'min-content'])).toBe(
      'basis-[min-content]',
    );
  });

  test('fit-content value', () => {
    expect(flexBasis(['flex-basis', 'fit-content'])).toBe(
      'basis-[fit-content]',
    );
  });

  test('negative value', () => {
    expect(flexBasis(['flex-basis', '-13px'])).toBe('basis-[-13px]');
  });

  test('decimal value', () => {
    expect(flexBasis(['flex-basis', '13.5px'])).toBe('basis-[13.5px]');
  });

  test('calc value', () => {
    expect(flexBasis(['flex-basis', 'calc(100% - 20px)'])).toBe(
      'basis-[calc(100%_-_20px)]',
    );
  });

  test('em unit', () => {
    expect(flexBasis(['flex-basis', '2em'])).toBe('basis-[2em]');
  });

  test('rem unit', () => {
    expect(flexBasis(['flex-basis', '2rem'])).toBe('basis-8');
  });

  test('vh unit', () => {
    expect(flexBasis(['flex-basis', '50vh'])).toBe('basis-[50vh]');
  });

  test('vw unit', () => {
    expect(flexBasis(['flex-basis', '50vw'])).toBe('basis-[50vw]');
  });

  test('invalid value', () => {
    expect(flexBasis(['flex-basis', 'invalid'])).toBe('basis-[invalid]');
  });
});
