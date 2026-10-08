import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = [
  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
];
export const rule = atomicRule('border', properties);
export function border(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
