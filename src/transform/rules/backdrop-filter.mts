import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = ['backdrop-filter'];
export const rule = atomicRule('backdrop-filter', properties);
export function backdropFilter(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
