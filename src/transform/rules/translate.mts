import { atomicRule, convertAtomic } from './atomic.mjs';
export const properties = ['translate'];
export const rule = atomicRule('translate', properties);
export function translate(declaration: [string, string]) {
  return convertAtomic(declaration, properties);
}
