import { varParser } from './var.mjs';
import { assertNever, removeSpace } from '../../utils/index.mjs';
import { isCSSFunc, isVAR } from '../../utils/validator.mjs';

export function unitProcess(
  value: string,
  { model }: { model: 'length' | 'var' },
) {
  if (isCSSFunc(value)) {
    return removeSpace(value);
  }

  if (isVAR(value)) {
    const [keys, val] = varParser(value);

    if (val) {
      return val;
    }

    const key = keys[0];

    switch (model) {
      case 'var':
        return `--${key}`;
      case 'length':
        return `length:var(--${key})`;
      default:
        assertNever(model);
        return '';
    }
  }

  return value;
}
