import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = ['filter'];
export const rule = atomicRule('filter', properties);
export function filter(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
