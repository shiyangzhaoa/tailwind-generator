import { varParser } from './var.mjs';
import { context } from '../context.mjs';
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

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = `--${keys[i]}`;

      const val = context.varMap[key];

      if (val) {
        return val;
      }

      context.unresolved_vars.push(key);
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
