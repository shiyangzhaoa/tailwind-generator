import type * as CSS from 'csstype';
import type { CamelCaseToKebabCase } from '../utils/type.mjs';
import type { Node } from 'postcss-value-parser';

type KebabCaseProperties<T> = {
  [K in keyof T as CamelCaseToKebabCase<K>]: T[K];
};
export type CSSInput = CSS.Properties | KebabCaseProperties<CSS.Properties>;
export type ConversionFailureReason =
  | 'unsupported-property'
  | 'unsupported-value'
  | 'invalid-value';
export interface ConversionFailure {
  property: string;
  value: string | number;
  reason: ConversionFailureReason;
}
export interface ConversionResult {
  converted: string;
  failed: ConversionFailure[];
}
export interface GeneratorOptions {
  /** Variables supplied by the caller, never read from the DOM. */
  variables?: Readonly<Record<string, string>>;
  /** Utilities assumes the default Tailwind 4.1 theme; preserve emits literal properties. */
  mode?: 'utilities' | 'preserve';
}
export interface ConversionContext {
  readonly variables: Readonly<Record<string, string>>;
  readonly mode: 'utilities' | 'preserve';
}
export interface Declaration {
  readonly property: string;
  readonly originalValue: string | number;
  readonly value: string;
  readonly nodes: readonly Node[];
}
export type RuleResult =
  | { status: 'converted'; classes: string[] }
  | { status: 'failed'; reason: 'unsupported-value' | 'invalid-value' };
export interface Rule {
  readonly name: string;
  readonly properties: readonly string[];
  convert(declaration: Declaration, context: ConversionContext): RuleResult;
}
