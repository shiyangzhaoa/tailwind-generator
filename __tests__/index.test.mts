import { gen } from '../src/index.mjs';

describe('convert', () => {
  test('kebab case', () => {
    expect(
      gen(
        {
          'align-items': 'flex-start',
          background: '#FFF',
          display: 'flex',
          'flex-direction': 'column',
          gap: '16px',
          padding: '24px',
          width: '1152px',
          height: 'var(--var-height)',
          'font-weight': '500',
        },
        {
          '--var-height': '12px',
        },
      ).success,
    ).toBe(
      'items-start flex flex-col font-medium bg-white gap-[16px] p-6 w-6xl h-3',
    );
  });

  test('camel case', () => {
    expect(
      gen({
        alignItems: 'flex-start',
        background: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px',
        width: '1152px',
      }).success,
    ).toBe('items-start flex flex-col bg-white gap-[16px] p-6 w-6xl');
  });

  test('var', () => {
    expect(
      gen({
        'align-items': 'flex-start',
        'align-self': 'stretch',
        background: 'var(--Gray-gray-1, #FFF)',
        'box-shadow': '0px -1px 0px 0px rgba(0, 0, 0, 0.06) inset',
        display: 'flex',
        'flex-direction': 'column',
        gap: '16px',
        padding: '16px',
      }).success,
    ).toBe(
      'items-start self-stretch flex flex-col bg-white shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.06)_inset] gap-[16px] p-4',
    );
  });
});
