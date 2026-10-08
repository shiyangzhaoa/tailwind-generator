import { try2oklch } from '../functions.mjs';
import { utilityRule } from './utility.mjs';

const color = (prefix: string) => ({ prefix, normalize: try2oklch });

export const rule = utilityRule('color', {
  color: color('text'),
  'text-decoration-color': color('decoration'),
  'background-color': color('bg'),
  'border-color': color('border'),
  'outline-color': color('outline'),
  'accent-color': color('accent'),
  'caret-color': color('caret'),
  fill: color('fill'),
  stroke: color('stroke'),
});
