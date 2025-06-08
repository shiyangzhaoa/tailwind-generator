import kebabcase from 'lodash.kebabcase';

import { rulers } from './transform/rules/index.mjs';

import type * as CSS from 'csstype';
import { getTailwindBy, removeExtraSpace } from './utils/index.mjs';

import type { CamelCaseToKebabCase } from './utils/type.mjs';
import { twMerge } from 'tailwind-merge';
import { context } from './transform/context.mjs';

const gather = (decl: [string, string], i = 0): string | false => {
  if (i === rulers.length) {
    return false;
  }

  const convert = rulers[i];

  const res = convert(decl);

  if (!res) {
    return gather(decl, i + 1);
  }

  return res;
};

type KebabCaseProperties<T> = {
  [K in keyof T as CamelCaseToKebabCase<K>]: T[K];
};

export function gen(
  css: CSS.Properties | KebabCaseProperties<CSS.Properties>,
  variations?: Record<string, string>,
) {
  if (variations) {
    Object.entries(variations).map(([k, v]) => {
      context.varMap[k] = v;
    });
  }

  const success: string[] = [];
  const failed: string[] = [];

  const realCss = Object.fromEntries(
    Object.entries(css).map(([k, v]) => [
      kebabcase(k),
      removeExtraSpace(v.replace('\n', '')),
    ]),
  );

  const { tailwind, useful } = getTailwindBy(realCss);

  if (tailwind.length) {
    success.push(...tailwind);
  }

  if (useful) {
    Object.entries(useful).forEach(([k, v]: [string, string]) => {
      const res = gather([k, v]);

      if (res) {
        success.push(res);
      } else {
        failed.push(k);
      }
    });
  }

  return {
    success: twMerge(success),
    failed,
  };
}

export const functionParser = (val: string) => {
  const outerMatch = val.match(/^([^(]+)\((.*)\)$/);
  if (!outerMatch) return [null, null];

  const [, func, args] = outerMatch;

  // Check if args contains nested function calls
  const nestedFuncMatch = args.match(/^([^(]+)\(/);
  if (nestedFuncMatch) {
    // Handle nested functions by finding the matching closing parenthesis
    let depth = 1;
    let funcEnd = -1;
    const startPos = nestedFuncMatch[0].length - 1; // Position after the opening parenthesis

    for (let i = startPos + 1; i < args.length; i++) {
      if (args[i] === '(') depth++;
      if (args[i] === ')') depth--;
      if (depth === 0) {
        funcEnd = i;
        break;
      }
    }

    if (funcEnd !== -1) {
      // Extract the complete nested function call
      const nestedFunc = args.slice(0, funcEnd + 1);
      return [func, nestedFunc];
    }
  }

  return [func, args];
};
