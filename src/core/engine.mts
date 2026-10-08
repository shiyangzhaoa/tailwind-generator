import kebabcase from 'lodash.kebabcase';
import { twMerge } from 'tailwind-merge';
import { createContext } from '../transform/context.mjs';
import { atomicProperties, ruleRegistry } from '../transform/rules/index.mjs';
import { getTailwindBy, mappedProperties } from './mappings.mjs';
import { parseValue, resolveVariables } from './value.mjs';
import { arbitraryProperty } from './serialize.mjs';
import type {
  CSSInput,
  ConversionResult,
  Declaration,
  GeneratorOptions,
} from './types.mjs';

export function convert(
  css: CSSInput,
  options: GeneratorOptions = {},
  variables: Record<string, string> = {},
): ConversionResult {
  const context = createContext(options, variables);
  const failed: ConversionResult['failed'] = [];
  const declarations = new Map<string, Declaration>();
  for (const [key, originalValue] of Object.entries(css)) {
    if (originalValue === undefined) continue;
    const property = key.startsWith('--') ? key : kebabcase(key);
    const raw = String(originalValue).trim();
    if (!parseValue(raw).valid) {
      failed.push({ property, value: originalValue, reason: 'invalid-value' });
      continue;
    }
    const value = resolveVariables(raw, context);
    const parsed = parseValue(value);
    if (!parsed.valid) {
      failed.push({ property, value: originalValue, reason: 'invalid-value' });
      continue;
    }
    declarations.set(property, {
      property,
      originalValue,
      value,
      nodes: parsed.nodes,
    });
  }

  const classes: string[] = [];
  // Literal mode bypasses every theme-dependent optimization.
  if (context.mode === 'utilities') {
    const candidates = Object.fromEntries(
      [...declarations.values()]
        .filter(({ property }) => !atomicProperties.has(property))
        .map(({ property, value }) => [property, value]),
    );
    const match = getTailwindBy(candidates);
    classes.push(...match.tailwind);
    for (const property of Object.keys(candidates)) {
      if (!match.useful || !Object.hasOwn(match.useful, property))
        declarations.delete(property);
    }
  }
  for (const declaration of declarations.values()) {
    const { property, originalValue, value } = declaration;
    const rule = ruleRegistry.get(property);
    if (!rule && !mappedProperties.has(property)) {
      failed.push({
        property,
        value: originalValue,
        reason: 'unsupported-property',
      });
      continue;
    }
    if (context.mode === 'preserve') {
      classes.push(arbitraryProperty(property, value));
      continue;
    }
    const result =
      rule?.convert(declaration, context) ??
      ({ status: 'failed', reason: 'unsupported-value' } as const);
    if (result.status === 'converted') classes.push(...result.classes);
    else failed.push({ property, value: originalValue, reason: result.reason });
  }
  return { converted: twMerge(classes), failed };
}
