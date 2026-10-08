import { bgSize } from '../../../src/transform/rules/bg-size.mjs';

describe('background size', () => {
  test('not match', () => {
    expect(bgSize(['margin-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(bgSize(['background-size', 'auto'])).toBe('bg-auto');
  });

  test('arbitrary value', () => {
    expect(bgSize(['background-size', '200px 100px'])).toBe(
      'bg-size-[200px_100px]',
    );
  });
});
