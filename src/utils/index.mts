export function removeSpace(val: string) {
  return val.replaceAll(/\s/g, '');
}

export function toFixedWithoutTrailingZeros(
  num: number,
  digits: number,
): string {
  return parseFloat(num.toFixed(digits)).toString();
}
