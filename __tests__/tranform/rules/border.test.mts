import { border } from '../../../src/transform/rules/border.mjs';

describe('border', () => {
  test('not match', () => {
    expect(border(['margin-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(border(['border', '0.5rem dashed pink'])).toBe(
      'border-8 border-dashed border-[pink]',
    );
  });

  test('only one', () => {
    expect(border(['border', 'solid'])).toBe('border-solid');
  });

  test('only two', () => {
    expect(border(['border', 'dashed red'])).toBe('border-[red] border-dashed');
  });

  test('border style unresolved', () => {
    expect(border(['border', '0.5rem outset pink'])).toBe(
      'border-8 border-[outset] border-[pink]',
    );
  });

  test('border left', () => {
    expect(border(['border-left', '0.5rem outset pink'])).toBe(
      'border-l-8 border-[outset] border-[pink]',
    );
  });

  test('invalid', () => {
    expect(border(['border', 'dashed red dashed red'])).toBe(false);
  });

  test('border right', () => {
    expect(border(['border-right', '2px solid #ff0000'])).toBe(
      'border-r-2 border-solid border-[#ff0000]',
    );
  });

  test('border color', () => {
    expect(
      border(['border-top', 'thin dotted oklch(80.8% 0.114 19.571)']),
    ).toBe('border-t-[thin] border-dotted border-red-300');
  });

  test('border top', () => {
    expect(border(['border-top', 'thin dotted rgb(0, 255, 0)'])).toBe(
      'border-t-[thin] border-dotted border-[rgb(0,_255,_0)]',
    );
  });

  test('border bottom', () => {
    expect(border(['border-bottom', 'medium double hsl(240, 100%, 50%)'])).toBe(
      'border-b-[medium] border-double border-[hsl(240,_100%,_50%)]',
    );
  });

  test('border with zero width', () => {
    expect(border(['border', '0 none black'])).toBe(
      'border-0 border-none border-black',
    );
  });

  test('border with named colors', () => {
    expect(border(['border', '1px solid transparent'])).toBe(
      'border border-solid border-transparent',
    );
    expect(border(['border', '1px solid currentColor'])).toBe(
      'border border-solid border-current',
    );
  });

  test('border with different units', () => {
    expect(border(['border', '1vw solid black'])).toBe(
      'border-[1vw] border-solid border-black',
    );
  });
});
