import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = ['transition-property'];
export const rule = atomicRule('transition-property', properties);
export function transitionProperty(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
