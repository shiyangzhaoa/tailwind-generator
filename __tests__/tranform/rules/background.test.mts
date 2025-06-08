import { background } from '../../../src/transform/rules/background.mjs';

describe('background', () => {
  test('not match', () => {
    expect(background(['margin-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(background(['background', 'green'])).toBe('bg-[green]');
  });

  test('color arbitrary', () => {
    expect(background(['background', 'var(--color, #ccc)'])).toBe('bg-[#ccc]');
  });

  test('hex color', () => {
    expect(background(['background', '#ff0000'])).toBe('bg-[#ff0000]');
  });

  test('rgb color', () => {
    expect(background(['background', 'rgb(255, 0, 0)'])).toBe(
      'bg-[rgb(255,_0,_0)]',
    );
  });

  test('transparent', () => {
    expect(background(['background', 'transparent'])).toBe('bg-transparent');
  });

  test('inherit', () => {
    expect(background(['background', 'inherit'])).toBe('bg-inherit');
  });

  test('repeat values', () => {
    expect(background(['background', 'repeat'])).toBe('bg-repeat');
    expect(background(['background', 'repeat-x'])).toBe('bg-repeat-x');
    expect(background(['background', 'repeat-y'])).toBe('bg-repeat-y');
    expect(background(['background', 'no-repeat'])).toBe('bg-no-repeat');
  });

  test('attachment values', () => {
    expect(background(['background', 'fixed'])).toBe('bg-fixed');
    expect(background(['background', 'local'])).toBe('bg-local');
    expect(background(['background', 'scroll'])).toBe('bg-scroll');
  });

  test('position values', () => {
    expect(background(['background', 'center'])).toBe('bg-center');
    expect(background(['background', 'top'])).toBe('bg-top');
    expect(background(['background', 'bottom'])).toBe('bg-bottom');
    expect(background(['background', 'left'])).toBe('bg-left');
    expect(background(['background', 'right'])).toBe('bg-right');
  });

  test('clip values', () => {
    expect(background(['background', 'border-box'])).toBe('bg-clip-border');
    expect(background(['background', 'padding-box'])).toBe('bg-clip-padding');
    expect(background(['background', 'content-box'])).toBe('bg-clip-content');
  });

  test('origin values', () => {
    expect(background(['background', 'border-box'])).toBe('bg-clip-border');
    expect(background(['background', 'padding-box'])).toBe('bg-clip-padding');
    expect(background(['background', 'content-box'])).toBe('bg-clip-content');
  });

  test('gradient', () => {
    expect(
      background(['background', 'linear-gradient(to right, red, blue)']),
    ).toBe('bg-[linear-gradient(to_right,_red,_blue)]');
  });

  test('multiple backgrounds', () => {
    expect(background(['background', 'url(image1.png), url(image2.png)'])).toBe(
      'bg-[url(image1.png)_url(image2.png)]',
    );
  });

  test('case1', () => {
    expect(
      background([
        'background',
        'content-box radial-gradient(crimson, skyblue)',
      ]),
    ).toBe('bg-clip-content bg-[radial-gradient(crimson,_skyblue)]');
  });

  test('case2', () => {
    expect(
      background([
        'background',
        'no-repeat url("../../media/examples/lizard.png")',
      ]),
    ).toBe('bg-no-repeat bg-[url("../../media/examples/lizard.png")]');
  });

  test('case3', () => {
    expect(
      background([
        'background',
        'left 5% / 15% 60% repeat-x url("../../media/examples/star.png")',
      ]),
    ).toBe(
      'bg-[left_top_5%] bg-repeat-x bg-size-[15%_60%] bg-[url("../../media/examples/star.png")]',
    );
  });

  test('case4', () => {
    expect(
      background([
        'background',
        `center / contain no-repeat url("../../media/examples/firefox-logo.svg"), #eee 35% url("../../media/examples/lizard.png")`,
      ]),
    ).toBe(
      'bg-[#eee] bg-center bg-no-repeat bg-size-[contain_35%] bg-[url("../../media/examples/firefox-logo.svg")_url("../../media/examples/lizard.png")]',
    );
  });

  test('complex background with position and size', () => {
    expect(
      background(['background', 'top left / 50% 25% no-repeat #fff']),
    ).toBe('bg-white bg-top-left bg-no-repeat bg-size-[50%_25%]');
  });

  test('background with oklch color', () => {
    expect(background(['background', 'oklch(0.5 0.2 180)'])).toBe(
      'bg-[oklch(0.5_0.2_180)]',
    );
  });

  test('background with var function', () => {
    expect(background(['background', 'var(--bg-color)'])).toBe(
      'bg-(--bg-color)',
    );
  });
});
