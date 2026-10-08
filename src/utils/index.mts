export { getTailwindBy, mappedProperties } from '../core/mappings.mjs';

export function assertNever(value: never) {
  console.error('Unknown value', value);

  throw Error('Not possible');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function str(val: Record<string, any>) {
  return JSON.stringify(val);
}

export function removeSpace(val: string) {
  return val.replaceAll(/\s/g, '');
}

export function removeExtraSpace(val: string) {
  return val
    .split(' ')
    .filter((v) => v !== ' ')
    .join(' ');
}

export function toFixedWithoutTrailingZeros(
  num: number,
  digits: number,
): string {
  return parseFloat(num.toFixed(digits)).toString();
}
