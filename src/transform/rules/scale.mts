import { atomicRule, convertAtomic } from './atomic.mjs';
export const properties = ['scale'];
export const rule = atomicRule('scale', properties);
export function scale(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
