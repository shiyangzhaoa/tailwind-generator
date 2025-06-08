import { transform } from '../../../src/transform/rules/transform.mjs';

describe('transform', () => {
  test('not match', () => {
    expect(transform(['margin-left', '12px'])).toBe(false);
  });

  test('scale(1)', () => {
    expect(transform(['transform', 'scale(1)'])).toBe('scale-100');
  });

  test('scale(0.7)', () => {
    expect(transform(['transform', 'scale(0.7)'])).toBe('scale-70');
  });

  test('scale(1.3, 0.4)', () => {
    expect(transform(['transform', 'scale(1.3, 0.4)'])).toBe(
      'scale-[1.3,_0.4]',
    );
  });

  test('rotate', () => {
    expect(transform(['transform', 'rotate(1deg)'])).toBe('rotate-1');
  });

  test('rotate arbitrary', () => {
    expect(transform(['transform', 'rotate(11deg)'])).toBe('rotate-11');
  });

  test('translate', () => {
    expect(transform(['transform', 'translateY(50%)'])).toContain(
      'translate-y-[50%]',
    );
  });

  test('translateY arbitrary', () => {
    expect(transform(['transform', 'translateY(11px)'])).toContain(
      'translate-y-[11px]',
    );
  });
});
