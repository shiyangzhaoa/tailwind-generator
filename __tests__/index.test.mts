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
      ).converted,
    ).toBe(
      'items-start flex flex-col font-medium [background:#FFF] gap-[16px] p-6 w-6xl h-3',
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
      }).converted,
    ).toBe('items-start flex flex-col [background:#FFF] gap-[16px] p-6 w-6xl');
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
      }).converted,
    ).toBe(
      'items-start self-stretch flex flex-col [background:#FFF] [box-shadow:0px_-1px_0px_0px_rgba(0,_0,_0,_0.06)_inset] gap-[16px] p-4',
    );
  });
});

describe('conversion result', () => {
  test('returns an empty result for empty input', () => {
    expect(gen({})).toEqual({ converted: '', failed: [] });
  });

  test('preserves unsupported declarations alongside converted classes', () => {
    expect(gen({ padding: '24px', fontKerning: 'normal' })).toEqual({
      converted: 'p-6',
      failed: [
        {
          property: 'font-kerning',
          value: 'normal',
          reason: 'unsupported-property',
        },
      ],
    });
  });

  test('recognizes properties supported only by exact mappings', () => {
    expect(gen({ display: '  inline flow-root\n' })).toEqual({
      converted: '',
      failed: [
        {
          property: 'display',
          value: '  inline flow-root\n',
          reason: 'unsupported-value',
        },
      ],
    });
  });

  test('preserves an entire transform rather than reporting partial success', () => {
    expect(gen({ transform: 'matrix(1, 0, 0, 1, 10, 20)' })).toEqual({
      converted: '[transform:matrix(1,_0,_0,_1,_10,_20)]',
      failed: [],
    });
  });

  test('rejects empty values without emitting empty arbitrary utilities', () => {
    expect(gen({ width: ' \n ', color: '' })).toEqual({
      converted: '',
      failed: [
        { property: 'width', value: ' \n ', reason: 'invalid-value' },
        { property: 'color', value: '', reason: 'invalid-value' },
      ],
    });
  });

  test('normalizes failed property names consistently', () => {
    expect(gen({ 'font-kerning': 'normal' })).toEqual(
      gen({ fontKerning: 'normal' }),
    );
  });

  test('accepts numeric CSS values and omits undefined optional declarations', () => {
    expect(gen({ fontWeight: 450, color: undefined })).toEqual({
      converted: 'font-[450]',
      failed: [],
    });
  });
});
