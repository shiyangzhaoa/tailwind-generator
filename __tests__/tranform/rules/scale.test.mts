import { scale } from '../../../src/transform/rules/scale.mjs';

describe('scale', () => {
  test('not match', () => {
    expect(scale(['margin-left', '12px'])).toBe(false);
  });

  test('single value - scale(1)', () => {
    expect(scale(['scale', '1'])).toBe('scale-100');
  });

  test('single value - scale(0.5)', () => {
    expect(scale(['scale', '0.5'])).toBe('scale-50');
  });

  test('single value - scale(0.75)', () => {
    expect(scale(['scale', '0.75'])).toBe('scale-75');
  });

  test('single value - scale(1.25)', () => {
    expect(scale(['scale', '1.25'])).toBe('scale-125');
  });

  test('single value - scale(0.7)', () => {
    expect(scale(['scale', '0.7'])).toBe('scale-70');
  });

  test('single value - scale(50%)', () => {
    expect(scale(['scale', '50%'])).toBe('scale-50');
  });

  test('single value - scale(125%)', () => {
    expect(scale(['scale', '125%'])).toBe('scale-125');
  });

  test('single value - scale(70%)', () => {
    expect(scale(['scale', '70%'])).toBe('scale-70');
  });

  test('two values - scaleX only', () => {
    expect(scale(['scale', '1.25 1'])).toBe('scale-x-125');
  });

  test('two values - scaleY only', () => {
    expect(scale(['scale', '1 0.5'])).toBe('scale-y-50');
  });

  test('two values - both non-1', () => {
    expect(scale(['scale', '1.25 0.75'])).toBe('scale-[1.25_0.75]');
  });

  test('two values - with percentages', () => {
    expect(scale(['scale', '125% 100%'])).toBe('scale-x-125');
  });

  test('three values - scaleZ only', () => {
    expect(scale(['scale', '1 1 1.5'])).toBe('scale-z-150');
  });

  test('three values - scaleZ 1', () => {
    expect(scale(['scale', '1 1 1'])).toBe('scale-3d');
  });

  test('three values - scaleX only', () => {
    expect(scale(['scale', '1.5 1 1'])).toBe('scale-x-150');
  });

  test('three values - scaleY only', () => {
    expect(scale(['scale', '1 1.5 1'])).toBe('scale-y-150');
  });

  test('three values - complex', () => {
    expect(scale(['scale', '1.25 0.75 1.5'])).toBe('scale-[1.25_0.75_1.5]');
  });

  test('zero value', () => {
    expect(scale(['scale', '0'])).toBe('scale-0');
  });

  test('with extra spaces', () => {
    expect(scale(['scale', '  1.5   1  '])).toBe('scale-x-150');
  });
});
