import { atomicRule, convertAtomic } from './atomic.mjs';

export const properties = ['box-shadow'];
export const rule = atomicRule('box-shadow', properties);
export function boxShadow(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
