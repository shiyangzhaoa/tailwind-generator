export function isPX(val: string) {
  return val.trim().endsWith('px');
}

export function isREM(val: string) {
  return val.trim().endsWith('rem');
}
