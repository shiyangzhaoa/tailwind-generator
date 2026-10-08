import { compile } from 'tailwindcss';
import { gen } from '../src/index.mjs';

const cases: [Parameters<typeof gen>[0], string][] = [
  [{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }, 'grid-cols-4'],
  [{ gridTemplateColumns: '200px 1fr' }, 'grid-cols-[200px_1fr]'],
  [{ color: 'rgba(0,0,0,0.5)' }, 'text-[rgba(0,0,0,0.5)]'],
  [{ backgroundColor: '#ffffff80' }, 'bg-[#ffffff80]'],
  [
    { color: 'oklch(0.637 0.237 25.331 / 0.5)' },
    'text-[oklch(0.637_0.237_25.331_/_0.5)]',
  ],
  [{ color: 'rgba(0,0,0,0)' }, 'text-[rgba(0,0,0,0)]'],
  [{ color: 'rgba(0,0,0,1)' }, 'text-black'],
  [{ transform: 'scale(1.3, 0.4)' }, '[transform:scale(1.3,_0.4)]'],
  [{ transform: 'scale(1.3,0.4)' }, '[transform:scale(1.3,0.4)]'],
  [{ transform: 'translate(12px, 20px)' }, '[transform:translate(12px,_20px)]'],
  [{ transform: 'translate(12px,20px)' }, '[transform:translate(12px,20px)]'],
  [
    { transform: 'translate(calc(100% - 12px), 20px)' },
    '[transform:translate(calc(100%_-_12px),_20px)]',
  ],
  [
    { transform: 'translate(var(--review-offset, 12px), 20px)' },
    '[transform:translate(12px,_20px)]',
  ],
  [{ transform: 'rotate(1rad)' }, '[transform:rotate(1rad)]'],
  [{ transform: 'rotate(1turn)' }, '[transform:rotate(1turn)]'],
  [{ transform: 'rotate(-100grad)' }, '[transform:rotate(-100grad)]'],
  [{ transform: 'rotate(11deg)' }, '[transform:rotate(11deg)]'],
  [{ transform: 'rotate(-11deg)' }, '[transform:rotate(-11deg)]'],
  [{ transform: 'skewX(1rad)' }, '[transform:skewX(1rad)]'],
  [{ fontWeight: '450' }, 'font-[450]'],
  [
    { fontWeight: 'var(--review-weight)' },
    '[font-weight:var(--review-weight)]',
  ],
  [{ filter: 'url(filters.svg#filter)' }, '[filter:url(filters.svg#filter)]'],
  [
    { filter: 'blur(4px) url(filters.svg#filter) brightness(0.5)' },
    '[filter:blur(4px)_url(filters.svg#filter)_brightness(0.5)]',
  ],
  [
    { backdropFilter: 'url(filters.svg#filter)' },
    '[backdrop-filter:url(filters.svg#filter)]',
  ],
  [
    { backdropFilter: 'url(filters.svg#filter) blur(4px)' },
    '[backdrop-filter:url(filters.svg#filter)_blur(4px)]',
  ],
];

describe('public conversion regressions', () => {
  test.each(cases)('%j', (input, expected) => {
    expect(gen(input)).toEqual({ converted: expected, failed: [] });
  });
});

const compiledCases: [Parameters<typeof gen>[0], string[]][] = [
  [
    { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
    ['grid-template-columns: repeat(4, minmax(0, 1fr));'],
  ],
  [{ gridTemplateColumns: '200px 1fr' }, ['grid-template-columns: 200px 1fr;']],
  [{ color: 'rgba(0,0,0,0.5)' }, ['color: rgba(0,0,0,0.5);']],
  [{ backgroundColor: '#ffffff80' }, ['background-color: #ffffff80;']],
  [{ transform: 'scale(1.3, 0.4)' }, ['transform: scale(1.3, 0.4);']],
  [
    { transform: 'translate(12px, 20px)' },
    ['transform: translate(12px, 20px);'],
  ],
  [{ transform: 'rotate(1rad)' }, ['transform: rotate(1rad);']],
  [{ transform: 'rotate(1turn)' }, ['transform: rotate(1turn);']],
  [{ fontWeight: '450' }, ['font-weight: 450;']],
  [
    { filter: 'blur(4px) url(filters.svg#filter) brightness(0.5)' },
    ['filter: blur(4px) url(filters.svg#filter) brightness(0.5);'],
  ],
  [
    { backdropFilter: 'url(filters.svg#filter) blur(4px)' },
    ['backdrop-filter: url(filters.svg#filter) blur(4px);'],
  ],
];

describe('Tailwind 4.1 compiled declarations', () => {
  test.each(compiledCases)('%j', async (input, declarations) => {
    const result = gen(input);
    expect(result.failed).toEqual([]);
    const compiler = await compile(
      '@theme { --spacing: 0.25rem; } @tailwind utilities;',
    );
    const css = compiler.build(result.converted.split(' '));
    for (const declaration of declarations) {
      expect(css).toContain(declaration);
    }
  });
});
