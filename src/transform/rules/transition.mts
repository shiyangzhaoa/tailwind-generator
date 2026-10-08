import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = ['transition'];
export const rule = atomicRule('transition', properties);
export function transition(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
