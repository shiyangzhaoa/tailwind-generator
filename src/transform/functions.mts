import ColorJS from 'colorjs.io';

import { isPX, isREM } from '../utils/validator.mjs';
import { removeSpace, toFixedWithoutTrailingZeros } from '../utils/index.mjs';

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
