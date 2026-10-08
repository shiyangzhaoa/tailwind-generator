import ColorJS from 'colorjs.io';

import { isCSSFunc, isPX, isREM } from '../utils/validator.mjs';
import {
  assertNever,
  removeSpace,
  toFixedWithoutTrailingZeros,
} from '../utils/index.mjs';
import { designTokens } from '../tokens.mjs';
import { splitBySpaces } from './parsers/split.mjs';

const ignoredValue = ['0em', '0ex', '0ch', '0rem', '0vw', '0vh', '0%', '0px'];

export function px2rem(value: string, conversionFactor = 16) {
  if (ignoredValue.includes(value)) {
    return '0px';
  }

  if (value === '1px') {
    return '1px';
  }

  const numericVal = parseFloat(value.split('px')[0]);

  const realVal = numericVal / conversionFactor;

  return `${realVal}rem`;
}

export function rem2px(value: string, conversionFactor = 16) {
  if (ignoredValue.includes(value)) {
    return '0px';
  }

  const numericVal = parseFloat(value.split('rem')[0]);

  return `${numericVal * conversionFactor}px`;
}

export function try2PX(val: string) {
  if (isREM(val)) {
    return rem2px(val);
  }

  return removeSpace(val);
}

export function try2REM(val: string) {
  if (isPX(val)) {
    return px2rem(val);
  }

  return val;
}

export function try2oklch(val: string) {
  if (['inherit', 'transparent', 'currentColor'].includes(val)) {
    return val;
  }

  try {
    const colorjs = new ColorJS(val);
    // Translucent colors must not match opaque theme tokens.
    if (Number(colorjs.alpha) !== 1) return val;

    const srgb = colorjs.to('srgb');

    const channels = srgb.coords.map((coord) => Math.round(coord * 255));
    if (channels.every((channel) => channel === 0)) return '#000';
    if (channels.every((channel) => channel === 255)) return '#fff';

    const [l, c, h] = colorjs.to('oklch').coords;

    const hValue = Number.isNaN(h) ? 0 : h;
    const cValue = c < 1e-10 ? 0 : c;

    return `oklch(${toFixedWithoutTrailingZeros(l, 3)} ${toFixedWithoutTrailingZeros(cValue, 3)} ${toFixedWithoutTrailingZeros(hValue, 3)})`;
  } catch {
    return val;
  }
}

export function toTailwindClass(
  prefix: string,
  value: string,
  opt?: { mode: 'px' | 'spacing' | 'number' | undefined },
) {
  const varVal = removeSpace(value);

  if (!opt?.mode) {
    return `${prefix}-[${varVal}]`;
  }

  if (varVal === '0') {
    return `${prefix}-0`;
  }

  if (opt?.mode === 'number') {
    // Numeric utilities use degrees for angles; retain all other units.
    if (!/^[+-]?(?:\d+\.?\d*|\.\d+)(?:deg)?$/.test(varVal)) {
      return `${prefix}-[${varVal}]`;
    }
    const number = Number(varVal.replace(/deg$/, ''));
    if (!Number.isInteger(number)) return `${prefix}-[${varVal}]`;
    return number > 0
      ? `${prefix}-${number}`
      : `-${prefix}-${Math.abs(number)}`;
  }

  if (opt?.mode === 'px') {
    const px = tryGetPX(varVal);
    if (px === undefined) return `${prefix}-[${varVal}]`;
    if (px < 0) return `-${prefix}-${Math.abs(px)}`;
    return `${prefix}-${px}`;
  }

  if (opt?.mode === 'spacing') {
    const number = tryGetSpace(varVal);

    if (number === undefined) return `${prefix}-[${varVal}]`;
    if (number < 0) return `-${prefix}-${Math.abs(number)}`;
    return `${prefix}-${number}`;
  }

  assertNever(opt.mode);
  return '';
}

function tryGetPX(val: string) {
  if (isREM(val)) {
    return parseFloat(try2PX(val));
  }

  if (isPX(val)) {
    return parseFloat(val);
  }

  return undefined;
}

function tryGetSpace(val: string) {
  const num = tryGetPX(val);
  if (num === undefined) return undefined;

  const spaceUnit = designTokens['--spacing'];
  const spacePX = tryGetPX(spaceUnit);

  if (spacePX === undefined) return undefined;

  const number = num / spacePX;

  if (Number.isInteger(number)) return number;
}

export function mergeMultiAttr(val: string) {
  if (isCSSFunc(val)) {
    return removeSpace(val);
  }

  return splitBySpaces(val).join('_');
}
