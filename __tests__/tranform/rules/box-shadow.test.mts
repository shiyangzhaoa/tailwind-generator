import { boxShadow } from '../../../src/transform/rules/box-shadow.mjs';

describe('margin rule', () => {
  test('not match', () => {
    expect(boxShadow(['margin-left', '12px'])).toBe(false);
  });

  test('base', () => {
    expect(boxShadow(['box-shadow', '0 1px 2px 0 rgb(0, 0, 0, 0.05)'])).toBe(
      'shadow-[0_1px_2px_0_rgb(0,0,0,0.05)]',
    );
  });

  test('unset', () => {
    expect(boxShadow(['box-shadow', 'unset'])).toBe('shadow-none');
  });

  test('error', () => {
    // const mockExit = jest.spyOn(process, 'exit')
    //   .mockImplementation((number) => { throw new Error('process.exit: ' + number); });

    // expect(() => {
    //   boxShadow(['box-shadow', 'xxx']);
    // }).toThrow();
    // expect(mockExit).toHaveBeenCalledWith(1);
    // mockExit.mockRestore();

    expect(boxShadow(['box-shadow', 'xxx'])).toBe(false);
  });

  test('variable', () => {
    expect(boxShadow(['box-shadow', '0 1px 2px 0 var(--color, #ccc)'])).toBe(
      'shadow-[0_1px_2px_0_#ccc]',
    );
  });

  test('variables', () => {
    expect(
      boxShadow([
        'box-shadow',
        '0 1px var(--length, 10px) 0 var(--color, #ccc)',
      ]),
    ).toBe('shadow-[0_1px_10px_0_#ccc]');
  });
});
