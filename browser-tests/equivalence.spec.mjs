import { test, expect } from '@playwright/test';
import { compile } from 'tailwindcss';
import { gen, createGenerator } from '../esm/index.mjs';

const fixtures = [
  {
    name: 'grid trailing tracks',
    input: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr)) 20px',
    },
    properties: ['grid-template-columns'],
  },
  {
    name: 'transform order and all matrix arguments',
    input: {
      transform: 'rotate(30deg) translateX(20px) matrix(1, 0, 0, 1, 2, 3)',
    },
    properties: ['transform'],
  },
  {
    name: 'repeated filter functions',
    input: {
      filter: 'drop-shadow(1px 1px red) sepia(1) drop-shadow(2px 2px blue)',
    },
    properties: ['filter'],
  },
  {
    name: 'background shorthand resets prior image',
    input: { background: 'red' },
    properties: ['background-image', 'background-color', 'background-repeat'],
  },
  {
    name: 'transition shorthand keeps property and timings',
    input: { transition: 'opacity 1s ease, transform 2s linear' },
    properties: [
      'transition-property',
      'transition-duration',
      'transition-timing-function',
    ],
  },
  {
    name: 'literal underscores and spaces in content',
    input: { content: '"hello_world again"' },
    properties: ['content'],
  },
  {
    name: 'theme independent literal spacing',
    input: { padding: '24px', width: '12px' },
    properties: ['padding-top', 'width'],
    preserve: true,
  },
  {
    name: 'alpha channel',
    input: { color: 'rgba(0,0,0,0.5)' },
    properties: ['color'],
  },
];

for (const fixture of fixtures) {
  test(fixture.name, async ({ page }) => {
    const result = fixture.preserve
      ? createGenerator({ mode: 'preserve' })(fixture.input)
      : gen(fixture.input);
    expect(result.failed).toEqual([]);
    const compiler = await compile(
      '@theme { --spacing: 2rem; } @tailwind utilities;',
    );
    const css = compiler.build(result.converted.split(' '));
    await page.setContent(
      '<div id="reference"></div><div id="converted"></div>',
    );
    await page.addStyleTag({
      content:
        'html { font-size: 20px; } div { background-image: linear-gradient(blue, green); width: 100px; height: 100px; }',
    });
    await page.addStyleTag({ content: css });
    const computed = await page.evaluate(
      ({ input, classes, properties }) => {
        const reference = document.getElementById('reference');
        const converted = document.getElementById('converted');
        Object.assign(reference.style, input);
        converted.className = classes;
        return properties.map((property) => [
          property,
          getComputedStyle(reference).getPropertyValue(property),
          getComputedStyle(converted).getPropertyValue(property),
        ]);
      },
      {
        input: fixture.input,
        classes: result.converted,
        properties: fixture.properties,
      },
    );
    for (const [property, reference, converted] of computed)
      expect(converted, property).toBe(reference);
  });
}
