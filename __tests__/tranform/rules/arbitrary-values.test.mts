import { arbitraryValues } from '../../../src/transform/rules/arbitrary-values.mjs';

describe('arbitrary values', () => {
  test('not match', () => {
    expect(arbitraryValues(['margin-left', '12px'])).toBe(false);
  });

  test('aspect-ratio', () => {
    expect(arbitraryValues(['aspect-ratio', '1 / 1'])).toBe('aspect-square');
  });

  test('aspect-ratio var', () => {
    expect(arbitraryValues(['aspect-ratio', '4 / 3'])).toBe('aspect-[4_/_3]');
  });

  test('aspect-ratio with calc', () => {
    expect(arbitraryValues(['aspect-ratio', 'calc(16 / 9)'])).toBe(
      'aspect-[calc(16/9)]',
    );
  });

  test('list-style-type', () => {
    expect(arbitraryValues(['list-style-type', 'upper-roman'])).toBe(
      'list-[upper-roman]',
    );
  });

  test('background-position', () => {
    expect(arbitraryValues(['background-position', 'center'])).toBe(
      'bg-center',
    );
  });

  test('background-position arbitrary', () => {
    expect(arbitraryValues(['background-position', 'center top 1rem'])).toBe(
      'bg-[center_top_1rem]',
    );
  });

  test('background-position with calc', () => {
    expect(
      arbitraryValues(['background-position', 'calc(100% - 20px) center']),
    ).toBe('bg-[calc(100%-20px)_center]');
  });

  test('background-image', () => {
    expect(
      arbitraryValues([
        'background-image',
        'linear-gradient(to top, var(--tw-gradient-stops))',
      ]),
    ).toBe('bg-linear-to-t');
  });

  test('background-image arbitrary', () => {
    expect(
      arbitraryValues(['background-image', 'url("/img/hero-pattern.svg")']),
    ).toBe('bg-[url("/img/hero-pattern.svg")]');
  });

  test('background-image with multiple gradients', () => {
    expect(
      arbitraryValues([
        'background-image',
        'linear-gradient(45deg, blue, red), linear-gradient(to right, yellow, green)',
      ]),
    ).toBe(
      'bg-[linear-gradient(45deg,_blue,_red),_linear-gradient(to_right,_yellow,_green)]',
    );
  });

  test('border-radius', () => {
    expect(arbitraryValues(['border-radius', '4px'])).toBe('rounded-sm');
  });

  test('border-radius arbitrary', () => {
    expect(arbitraryValues(['border-radius', '25% 10%'])).toBe(
      'rounded-[25%_10%]',
    );
  });

  test('border-radius with calc', () => {
    expect(arbitraryValues(['border-radius', 'calc(100% - 20px)'])).toBe(
      'rounded-[calc(100%-20px)]',
    );
  });

  test('transform-origin', () => {
    expect(arbitraryValues(['transform-origin', 'top right'])).toBe(
      'origin-top-right',
    );
  });

  test('transform-origin with calc', () => {
    expect(arbitraryValues(['transform-origin', 'calc(100% - 20px) 50%'])).toBe(
      'origin-[calc(100%-20px)_50%]',
    );
  });

  test('cursor', () => {
    expect(arbitraryValues(['cursor', 'se-resize'])).toBe('cursor-se-resize');
  });

  test('cursor arbitrary', () => {
    expect(arbitraryValues(['cursor', 'url(hand.cur), pointer'])).toBe(
      'cursor-[url(hand.cur),_pointer]',
    );
  });

  test('cursor with multiple urls', () => {
    expect(
      arbitraryValues([
        'cursor',
        'url(cursor.png) 2 2, url(cursor2.png) 5 5, auto',
      ]),
    ).toBe('cursor-[url(cursor.png)_2_2,_url(cursor2.png)_5_5,_auto]');
  });

  test('will-change', () => {
    expect(arbitraryValues(['will-change', 'auto'])).toBe('will-change-auto');
  });

  test('will-change arbitrary', () => {
    expect(arbitraryValues(['will-change', 'left, top'])).toBe(
      'will-change-[left,top]',
    );
  });

  test('will-change with transform', () => {
    expect(arbitraryValues(['will-change', 'transform, opacity'])).toBe(
      'will-change-[transform,opacity]',
    );
  });

  test('z-index', () => {
    expect(arbitraryValues(['z-index', '11'])).toBe('z-[11]');
  });

  test('z-index with calc', () => {
    expect(arbitraryValues(['z-index', 'calc(100 + 50)'])).toBe(
      'z-[calc(100+50)]',
    );
  });

  test('handles special characters', () => {
    expect(arbitraryValues(['content', '"\\2022"'])).toBe('content-["\\2022"]');
  });

  test('perspective-origin', () => {
    expect(arbitraryValues(['perspective-origin', 'center'])).toBe(
      'perspective-origin-center',
    );
  });

  test('perspective-origin with percentage', () => {
    expect(arbitraryValues(['perspective-origin', '50% 50%'])).toBe(
      'perspective-origin-[50%_50%]',
    );
  });

  test('perspective-origin with keywords', () => {
    expect(arbitraryValues(['perspective-origin', 'left top'])).toBe(
      'perspective-origin-[left_top]',
    );
  });

  test('perspective-origin with mixed values', () => {
    expect(arbitraryValues(['perspective-origin', '25% center'])).toBe(
      'perspective-origin-[25%_center]',
    );
  });

  test('perspective-origin with calc', () => {
    expect(
      arbitraryValues(['perspective-origin', 'calc(50% - 10px) 100%']),
    ).toBe('perspective-origin-[calc(50%-10px)_100%]');
  });

  test('rotate with degrees', () => {
    expect(arbitraryValues(['rotate', '45deg'])).toBe('rotate-[45deg]');
  });

  test('rotate with negative degrees', () => {
    expect(arbitraryValues(['rotate', '-90deg'])).toBe('rotate-[-90deg]');
  });

  test('rotate with radians', () => {
    expect(arbitraryValues(['rotate', '1.57rad'])).toBe('rotate-[1.57rad]');
  });

  test('rotate with turns', () => {
    expect(arbitraryValues(['rotate', '0.25turn'])).toBe('rotate-[0.25turn]');
  });

  test('rotate with calc', () => {
    expect(arbitraryValues(['rotate', 'calc(45deg + 10deg)'])).toBe(
      'rotate-[calc(45deg+10deg)]',
    );
  });

  test('rotate with zero', () => {
    expect(arbitraryValues(['rotate', '0deg'])).toBe('rotate-[0deg]');
  });

  test('rotate with decimal degrees', () => {
    expect(arbitraryValues(['rotate', '22.5deg'])).toBe('rotate-[22.5deg]');
  });
});
