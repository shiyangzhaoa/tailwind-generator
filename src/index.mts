import { convert } from './core/engine.mjs';
import type { CSSInput, GeneratorOptions } from './core/types.mjs';

export type {
  CSSInput,
  GeneratorOptions,
  ConversionFailure,
  ConversionFailureReason,
  ConversionResult,
} from './core/types.mjs';
export { functionParser } from './core/value.mjs';

/** Convert using the default Tailwind 4.1 theme. Each call has isolated variables. */
export function gen(css: CSSInput, variations?: Record<string, string>) {
  return convert(css, {}, variations);
}

/** Reuse immutable configuration without sharing per-call state. */
export function createGenerator(options: GeneratorOptions = {}) {
  const configured = Object.freeze({
    ...options,
    variables: Object.freeze({ ...options.variables }),
  });
  return (css: CSSInput, variations?: Record<string, string>) =>
    convert(css, configured, variations);
}
