import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = ['transform'];
export const rule = atomicRule('transform', properties);
export function transform(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
