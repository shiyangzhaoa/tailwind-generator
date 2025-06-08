import Color from 'color';
import ColorJS from 'colorjs.io';

import { unitProcess } from './parsers/unit.mjs';
import {
  isCSSFunc,
  isHex,
  isPX,
  isREM,
  isRGB,
  isVAR,
  isVARValue,
} from '../utils/validator.mjs';
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

  if (isVAR(val)) {
    return try2PX(unitProcess(val, { model: 'length' }));
  }

  return removeSpace(val);
}

export function try2REM(val: string) {
  if (isPX(val)) {
    return px2rem(val);
  }

  if (isVAR(val)) {
    return try2REM(unitProcess(val, { model: 'length' }));
  }

  return val;
}

export function try2RGB(val: string) {
  if (isHex(val) || isRGB(val)) {
    return Color(val).rgb().string();
  }

  if (isVAR(val)) {
    return try2RGB(unitProcess(val, { model: 'var' }));
  }

  return val;
}

export function try2oklch(val: string) {
  const realVal = tryGetValueDeep(val, 'var');

  if (['inherit', 'transparent', 'currentColor'].includes(realVal)) {
    return realVal;
  }

  try {
    const colorjs = new ColorJS(realVal);
    const srgb = colorjs.to('srgb');

    const rgbArr = srgb.coords.map((coord) => Math.round(coord * 255));
    const color = Color({ r: rgbArr[0], g: rgbArr[1], b: rgbArr[2] });
    const hex = color.hex();

    if (hex === '#000000') return '#000';
    if (hex === '#FFFFFF') return '#fff';

    const [l, c, h] = colorjs.to('oklch').coords;

    const hValue = Number.isNaN(h) ? 0 : h;
    const cValue = c < 1e-10 ? 0 : c;

    return `oklch(${toFixedWithoutTrailingZeros(l, 3)} ${toFixedWithoutTrailingZeros(cValue, 3)} ${toFixedWithoutTrailingZeros(hValue, 3)})`;
  } catch (err) {
    console.error(`try2oklch: ${err}`);
    return realVal;
  }
}

export function tryGetNumber(value: string) {
  let realVal: number;

  if (value.endsWith('%')) {
    realVal = parseFloat(value) / 100;
  } else {
    realVal = parseFloat(value);
  }

  if (Number.isNaN(realVal)) {
    return value;
  }

  return realVal.toString();
}

export function number2Percent(value: string) {
  if (value.endsWith('%')) {
    const num = parseFloat(value);
    if (Number.isNaN(num)) return value;

    return num.toString();
  }

  const num = parseFloat(value);

  if (Number.isNaN(num)) {
    return value;
  }

  return (num * 100).toString();
}

const VAR_WITH_LENGTH = [
  'border-width',
  'outline-width',
  'stroke-width',
  'border-spacing',
  'text-decoration-thickness',
  'font-size',
];

export function toTailwindClass(
  prefix: string,
  value: string,
  opt?: { mode: 'px' | 'spacing' | 'number' | undefined },
) {
  const varVal = removeSpace(tryGetValueDeep(value, 'var'));

  if (VAR_WITH_LENGTH.includes(prefix) && isVARValue(varVal)) {
    return `${prefix}-(length:${varVal})`;
  }

  if (isVARValue(varVal)) {
    return `${prefix}-(${varVal})`;
  }

  if (!opt?.mode) {
    return `${prefix}-[${varVal}]`;
  }

  if (varVal === '0') {
    return `${prefix}-0`;
  }

  if (opt?.mode === 'number') {
    const number = +tryGetNumber(varVal);
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

export function tryGetValueDeep(val: string, model: 'var' | 'length') {
  if (isVAR(val)) {
    return tryGetValueDeep(unitProcess(val, { model }), model);
  }

  return val;
}

function tryGetPX(val: string) {
  if (isVARValue(val)) {
    return undefined;
  }

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
