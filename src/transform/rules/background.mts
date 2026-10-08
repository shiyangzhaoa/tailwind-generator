import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = ['background'];
export const rule = atomicRule('background', properties);
export function background(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
