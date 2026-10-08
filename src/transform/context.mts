import type { ConversionContext, GeneratorOptions } from '../core/types.mjs';

export function createContext(
  options: GeneratorOptions = {},
  variables: Readonly<Record<string, string>> = {},
): ConversionContext {
  return Object.freeze({
    mode: options.mode ?? 'utilities',
    variables: Object.freeze({ ...options.variables, ...variables }),
  });
}
