export function isPX(val: string) {
  return val.trim().endsWith('px');
}

export function isREM(val: string) {
  return val.trim().endsWith('rem');
}

// remove "var"
const funcKeys = [
  'abs',
  'acos',
  'asin',
  'atan',
  'atan2',
  'attr',
  'calc',
  'clamp',
  'cos',
  'counter',
  'counters',
  'cross-fade',
  'element',
  'env',
  'exp',
  'fit-content',
  'hypot',
  'log',
  'max',
  'min',
  'minmax',
  'mod',
  'path',
  'pow',
  'ray',
  'rem',
  'repeat',
  'round',
  'sign',
  'sin',
  'sqrt',
  'symbols',
  'tan',
  'url',
];

export function isCSSFunc(val: string) {
  return !!funcKeys.find((key) => val.startsWith(key));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isString(val: any): val is string {
  return typeof val === 'string';
}
