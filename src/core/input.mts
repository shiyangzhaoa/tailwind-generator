// Properties whose numeric values are not lengths, following React's style
// convention. Every other non-zero number is treated as pixels.
const unitlessProperties = new Set([
  'animation-iteration-count',
  'aspect-ratio',
  'border-image-outset',
  'border-image-slice',
  'border-image-width',
  'box-flex',
  'box-flex-group',
  'box-ordinal-group',
  'column-count',
  'columns',
  'fill-opacity',
  'flex',
  'flex-grow',
  'flex-negative',
  'flex-order',
  'flex-positive',
  'flex-shrink',
  'flood-opacity',
  'font-weight',
  'grid-area',
  'grid-column',
  'grid-column-end',
  'grid-column-span',
  'grid-column-start',
  'grid-row',
  'grid-row-end',
  'grid-row-span',
  'grid-row-start',
  'line-clamp',
  'line-height',
  'opacity',
  'order',
  'orphans',
  'scale',
  'stop-opacity',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'tab-size',
  'widows',
  'z-index',
  'zoom',
]);

/** Convert a camelCase key to its CSS property name, keeping vendor prefixes. */
export function toPropertyName(key: string): string {
  if (key.startsWith('-') || key.includes('-')) return key;
  const kebab = key.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
  // React spells the Microsoft prefix in lowercase: msTransform.
  return kebab.startsWith('ms-') ? `-${kebab}` : kebab;
}

/**
 * Normalize an input value to CSS text. Returns null for numbers that have no
 * CSS representation. The important flag is split off so that optimizers only
 * see the value itself.
 */
export function toDeclarationValue(
  property: string,
  value: string | number,
): { value: string; important: boolean } | null {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return null;
    const unitless =
      value === 0 ||
      property.startsWith('--') ||
      unitlessProperties.has(property.replace(/^-(webkit|moz|ms|o)-/, ''));
    return { value: unitless ? String(value) : `${value}px`, important: false };
  }
  const match = /^(.*?)\s*!\s*important\s*$/is.exec(value);
  return match
    ? { value: match[1].trim(), important: true }
    : { value: value.trim(), important: false };
}
