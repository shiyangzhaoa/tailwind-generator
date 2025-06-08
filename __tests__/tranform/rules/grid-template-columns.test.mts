import { gridTemplateColumns } from '../../../src/transform/rules/grid-template-columns.mjs';

describe('grid-template-columns', () => {
  // 基础用例
  test('grid-template-columns basic', () => {
    expect(gridTemplateColumns(['grid-template-columns', 'subgrid'])).toBe(
      'grid-cols-subgrid',
    );
  });

  test('grid-template-columns none', () => {
    expect(gridTemplateColumns(['grid-template-columns', 'none'])).toBe(
      'grid-cols-none',
    );
  });

  // repeat 标准用例
  test('grid-template-columns repeat standard', () => {
    expect(
      gridTemplateColumns([
        'grid-template-columns',
        'repeat(4, minmax(0, 1fr))',
      ]),
    ).toBe('grid-cols-4');
  });

  test('grid-template-columns repeat with different numbers', () => {
    expect(
      gridTemplateColumns([
        'grid-template-columns',
        'repeat(12, minmax(0, 1fr))',
      ]),
    ).toBe('grid-cols-12');
  });

  // 特殊情况
  test('grid-template-columns repeat with different minmax values', () => {
    expect(
      gridTemplateColumns([
        'grid-template-columns',
        'repeat(5, minmax(1, 1fr))',
      ]),
    ).toBe('grid-cols-[repeat(5,minmax(1,1fr))]');
  });

  test('grid-template-columns repeat with custom values', () => {
    expect(
      gridTemplateColumns([
        'grid-template-columns',
        'repeat(3, minmax(100px, 1fr))',
      ]),
    ).toBe('grid-cols-[repeat(3,minmax(100px,1fr))]');
  });

  // 变量用例
  test('grid-template-columns with CSS variable', () => {
    expect(
      gridTemplateColumns(['grid-template-columns', 'var(--grid-cols)']),
    ).toBe('grid-cols-(--grid-cols)');
  });

  // 无效输入
  test('grid-template-columns invalid input', () => {
    expect(gridTemplateColumns(['grid-template-columns', 'invalid'])).toBe(
      'grid-cols-[invalid]',
    );
  });

  test('grid-template-columns empty value', () => {
    expect(gridTemplateColumns(['grid-template-columns', ''])).toBe(
      'grid-cols-[]',
    );
  });

  // 复杂用例
  test('grid-template-columns complex pattern', () => {
    expect(
      gridTemplateColumns([
        'grid-template-columns',
        'repeat(auto-fit, minmax(200px, 1fr))',
      ]),
    ).toBe('grid-cols-[repeat(auto-fit,minmax(200px,1fr))]');
  });

  test('grid-template-columns multiple columns', () => {
    expect(
      gridTemplateColumns(['grid-template-columns', '200px 1fr 2fr']),
    ).toBe('grid-cols-[200px_1fr_2fr]');
  });
});
