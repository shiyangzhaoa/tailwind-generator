import { atomicRule } from './atomic.mjs';

export const properties = [
  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
];
export const rule = atomicRule('border', properties);
