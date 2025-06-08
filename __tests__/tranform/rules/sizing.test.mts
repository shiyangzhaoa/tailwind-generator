import { sizing } from '../../../src/transform/rules/sizing.mjs';

describe('sizing', () => {
  test('not match', () => {
    expect(sizing(['margin-left', '12px'])).toBe(false);
  });

  test('max width', () => {
    expect(sizing(['max-width', '256px'])).toBe('max-w-3xs');
  });

  test('max width var', () => {
    expect(sizing(['max-width', '1.2rem'])).toBe('max-w-[1.2rem]');
  });

  test('font size', () => {
    expect(sizing(['font-size', '16px'])).toBe('text-[16px]');
  });

  test('font size zero', () => {
    expect(sizing(['font-size', '0px'])).toBe('text-[0px]');
  });

  test('font size var', () => {
    expect(sizing(['font-size', '22px'])).toBe('text-[22px]');
  });

  test('letter-spacing', () => {
    expect(sizing(['letter-spacing', '-0.05em'])).toBe('tracking-tighter');
  });

  test('letter-spacing var', () => {
    expect(sizing(['letter-spacing', '0.25em'])).toBe('tracking-[0.25em]');
  });

  test('line-height', () => {
    expect(sizing(['line-height', '13px'])).toBe('leading-[13px]');
  });

  test('line-height var', () => {
    expect(sizing(['line-height', 'var(--var-line-height)'])).toBe(
      'leading-(--var-line-height)',
    );
  });

  test('text-underline-offset', () => {
    expect(sizing(['text-underline-offset', '1px'])).toBe(
      'underline-offset-[1px]',
    );
  });

  test('left', () => {
    expect(sizing(['left', '12px'])).toBe('left-3');
  });

  test('left cus', () => {
    expect(sizing(['left', '13px'])).toBe('left-[13px]');
  });

  test('left var', () => {
    expect(sizing(['left', 'var(--length, 13px)'])).toBe('left-[13px]');
  });

  test('left end', () => {
    expect(sizing(['inset-inline-end', '3rem'])).toBe('end-12');
  });

  test('stroke-width px', () => {
    expect(sizing(['stroke-width', '3px'])).toBe('stroke-[3px]');
  });

  // Width related tests
  test('width with spacing', () => {
    expect(sizing(['width', '1rem'])).toBe('w-4');
    expect(sizing(['width', '2rem'])).toBe('w-8');
    expect(sizing(['width', '3rem'])).toBe('w-12');
    expect(sizing(['width', '4rem'])).toBe('w-16');
    expect(sizing(['width', '5rem'])).toBe('w-20');
  });

  test('min-width with spacing', () => {
    expect(sizing(['min-width', '1rem'])).toBe('min-w-4');
    expect(sizing(['min-width', '2rem'])).toBe('min-w-8');
    expect(sizing(['min-width', '3rem'])).toBe('min-w-12');
    expect(sizing(['min-width', '4rem'])).toBe('min-w-16');
    expect(sizing(['min-width', '5rem'])).toBe('min-w-20');
  });

  test('max-width with spacing', () => {
    expect(sizing(['max-width', '1rem'])).toBe('max-w-4');
    expect(sizing(['max-width', '2rem'])).toBe('max-w-8');
    expect(sizing(['max-width', '3rem'])).toBe('max-w-12');
    expect(sizing(['max-width', '4rem'])).toBe('max-w-16');
    expect(sizing(['max-width', '5rem'])).toBe('max-w-20');
  });

  // Height related tests
  test('height with spacing', () => {
    expect(sizing(['height', '1rem'])).toBe('h-4');
    expect(sizing(['height', '2rem'])).toBe('h-8');
    expect(sizing(['height', '3rem'])).toBe('h-12');
    expect(sizing(['height', '4rem'])).toBe('h-16');
    expect(sizing(['height', '5rem'])).toBe('h-20');
  });

  test('min-height with spacing', () => {
    expect(sizing(['min-height', '1rem'])).toBe('min-h-4');
    expect(sizing(['min-height', '2rem'])).toBe('min-h-8');
    expect(sizing(['min-height', '3rem'])).toBe('min-h-12');
    expect(sizing(['min-height', '4rem'])).toBe('min-h-16');
    expect(sizing(['min-height', '5rem'])).toBe('min-h-20');
  });

  test('max-height with spacing', () => {
    expect(sizing(['max-height', '1rem'])).toBe('max-h-4');
    expect(sizing(['max-height', '2rem'])).toBe('max-h-8');
    expect(sizing(['max-height', '3rem'])).toBe('max-h-12');
    expect(sizing(['max-height', '4rem'])).toBe('max-h-16');
    expect(sizing(['max-height', '5rem'])).toBe('max-h-20');
  });

  // Position related tests
  test('top with spacing', () => {
    expect(sizing(['top', '1rem'])).toBe('top-4');
    expect(sizing(['top', '2rem'])).toBe('top-8');
    expect(sizing(['top', '3rem'])).toBe('top-12');
    expect(sizing(['top', '4rem'])).toBe('top-16');
    expect(sizing(['top', '5rem'])).toBe('top-20');
  });

  test('right with spacing', () => {
    expect(sizing(['right', '1rem'])).toBe('right-4');
    expect(sizing(['right', '2rem'])).toBe('right-8');
    expect(sizing(['right', '3rem'])).toBe('right-12');
    expect(sizing(['right', '4rem'])).toBe('right-16');
    expect(sizing(['right', '5rem'])).toBe('right-20');
  });

  test('bottom with spacing', () => {
    expect(sizing(['bottom', '1rem'])).toBe('bottom-4');
    expect(sizing(['bottom', '2rem'])).toBe('bottom-8');
    expect(sizing(['bottom', '3rem'])).toBe('bottom-12');
    expect(sizing(['bottom', '4rem'])).toBe('bottom-16');
    expect(sizing(['bottom', '5rem'])).toBe('bottom-20');
  });

  test('left with spacing', () => {
    expect(sizing(['left', '1rem'])).toBe('left-4');
    expect(sizing(['left', '2rem'])).toBe('left-8');
    expect(sizing(['left', '3rem'])).toBe('left-12');
    expect(sizing(['left', '4rem'])).toBe('left-16');
    expect(sizing(['left', '5rem'])).toBe('left-20');
  });

  test('inset-inline-start with spacing', () => {
    expect(sizing(['inset-inline-start', '1rem'])).toBe('start-4');
    expect(sizing(['inset-inline-start', '2rem'])).toBe('start-8');
    expect(sizing(['inset-inline-start', '3rem'])).toBe('start-12');
    expect(sizing(['inset-inline-start', '4rem'])).toBe('start-16');
    expect(sizing(['inset-inline-start', '5rem'])).toBe('start-20');
  });

  test('inset-inline-end with spacing', () => {
    expect(sizing(['inset-inline-end', '1rem'])).toBe('end-4');
    expect(sizing(['inset-inline-end', '2rem'])).toBe('end-8');
    expect(sizing(['inset-inline-end', '3rem'])).toBe('end-12');
    expect(sizing(['inset-inline-end', '4rem'])).toBe('end-16');
    expect(sizing(['inset-inline-end', '5rem'])).toBe('end-20');
  });

  // Edge cases
  test('negative values with spacing', () => {
    expect(sizing(['top', '-1rem'])).toBe('-top-4');
    expect(sizing(['left', '-2rem'])).toBe('-left-8');
    expect(sizing(['width', '-3rem'])).toBe('-w-12');
    expect(sizing(['height', '-4rem'])).toBe('-h-16');
  });

  test('zero values with spacing', () => {
    expect(sizing(['top', '0'])).toBe('top-0');
    expect(sizing(['left', '0'])).toBe('left-0');
    expect(sizing(['width', '0'])).toBe('w-0');
    expect(sizing(['height', '0'])).toBe('h-0');
  });

  test('arbitrary values with spacing', () => {
    expect(sizing(['width', '13.5rem'])).toBe('w-54');
    expect(sizing(['height', '7.25rem'])).toBe('h-29');
    expect(sizing(['top', '3.751rem'])).toBe('top-[3.751rem]');
    expect(sizing(['left', '9.52rem'])).toBe('left-[9.52rem]');
  });

  test('viewport units', () => {
    expect(sizing(['width', '100dvw'])).toBe('w-dvw');
    expect(sizing(['height', '100dvh'])).toBe('h-dvh');
    expect(sizing(['width', '100svw'])).toBe('w-svw');
    expect(sizing(['height', '100svh'])).toBe('h-svh');
    expect(sizing(['width', '100lvw'])).toBe('w-lvw');
    expect(sizing(['height', '100lvh'])).toBe('h-lvh');
  });

  test('perspective', () => {
    expect(sizing(['perspective', '1000px'])).toBe('perspective-[1000px]');
    expect(sizing(['perspective', '500px'])).toBe('perspective-normal');
    expect(sizing(['perspective', '0'])).toBe('perspective-[0]');
    expect(sizing(['perspective', '2000px'])).toBe('perspective-[2000px]');
  });

  test('perspective with var', () => {
    expect(sizing(['perspective', 'var(--perspective-value)'])).toBe(
      'perspective-(--perspective-value)',
    );
  });
});
