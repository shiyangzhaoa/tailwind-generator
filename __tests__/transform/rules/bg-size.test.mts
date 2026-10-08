import { convertDeclaration as bgSize } from '../../convert-declaration.mjs';

describe('background size', () => {
  test('base', () => {
    expect(bgSize(['background-size', 'auto'])).toBe('bg-auto');
  });

  test('arbitrary value', () => {
    expect(bgSize(['background-size', '200px 100px'])).toBe(
      'bg-size-[200px_100px]',
    );
  });
});
