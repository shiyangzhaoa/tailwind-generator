import Color from 'color';

export function isPX(val: string) {
  return val.trim().endsWith('px');
}

export function isREM(val: string) {
  return val.trim().endsWith('rem');
}

export function isHex(val: string) {
  return val.trim().startsWith('#');
}

export function isRGB(val: string) {
  return val.trim().startsWith('rgb(');
}

export function isRGBA(val: string) {
  return val.trim().startsWith('rgba(');
}

export function isVAR(val: string) {
  return val.trim().startsWith('var');
}

export function isVARValue(val: string) {
  return val.trim().startsWith('--');
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

export function isColor(val: string) {
  try {
    Color(val);

    return true;
  } catch {
    return false;
  }
}

export function isOKLCH(val: string) {
  return val.startsWith('oklch(');
}

export function isPercentage(val: string) {
  return !Number.isNaN(parseFloat(val));
}
