import { twMerge } from 'tailwind-merge';
import { createContext } from '../transform/context.mjs';
import { atomicProperties, ruleRegistry } from '../transform/rules/index.mjs';
import { toDeclarationValue, toPropertyName } from './input.mjs';
import { getTailwindBy, mappedProperties } from './mappings.mjs';
import { parseValue, resolveVariables } from './value.mjs';
import { arbitraryProperty } from './serialize.mjs';
import type {
  CSSInput,
  ConversionResult,
  Declaration,
  GeneratorOptions,
} from './types.mjs';

function splitClasses(classes: string) {
  return classes.split(' ').filter(Boolean);
}

function withImportance(classes: string[], important: boolean) {
  return important ? classes.map((name) => `${name}!`) : classes;
}

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
    const property = toPropertyName(key);
    const input = toDeclarationValue(property, originalValue);
    if (!input || !parseValue(input.value).valid) {
      failed.push({ property, value: originalValue, reason: 'invalid-value' });
      continue;
    }
    const value = resolveVariables(input.value, context);
    const parsed = parseValue(value);
    if (!parsed.valid) {
      failed.push({ property, value: originalValue, reason: 'invalid-value' });
      continue;
    }
    declarations.set(property, {
      property,
      originalValue,
      value,
      important: input.important,
      nodes: parsed.nodes,
    });
  }

  const classes: string[] = [];
  // Literal mode bypasses every theme-dependent optimization.
  if (context.mode === 'utilities') {
    // A combined mapping must not mix important and normal declarations.
    for (const important of [false, true]) {
      const group = [...declarations.values()].filter(
        (declaration) =>
          declaration.important === important &&
          !atomicProperties.has(declaration.property),
      );
      const match = getTailwindBy(
        Object.fromEntries(
          group.map(({ property, value }) => [property, value]),
        ),
      );
      classes.push(
        ...withImportance(match.tailwind.flatMap(splitClasses), important),
      );
      for (const { property } of group) {
        if (!match.useful || !Object.hasOwn(match.useful, property))
          declarations.delete(property);
      }
    }
  }
  for (const declaration of declarations.values()) {
    const { property, originalValue, value, important } = declaration;
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
      classes.push(
        ...withImportance([arbitraryProperty(property, value)], important),
      );
      continue;
    }
    const result =
      rule?.convert(declaration, context) ??
      ({ status: 'failed', reason: 'unsupported-value' } as const);
    if (result.status === 'converted')
      classes.push(
        ...withImportance(result.classes.flatMap(splitClasses), important),
      );
    else failed.push({ property, value: originalValue, reason: result.reason });
  }
  return { converted: twMerge(classes), failed };
}
