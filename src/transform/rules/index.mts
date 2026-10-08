import { rule as scaleRule } from './scale.mjs';
import { rule as translateRule } from './translate.mjs';
import { rule as transitionPropertyRule } from './transition-property.mjs';
import { rule as transitionRule } from './transition.mjs';
import { rule as transformRule } from './transform.mjs';
import { rule as backdropFilterRule } from './backdrop-filter.mjs';
import { rule as filterRule } from './filter.mjs';
import { rule as boxShadowRule } from './box-shadow.mjs';
import { rule as borderRule } from './border.mjs';
import { rule as backgroundRule } from './background.mjs';
import {
  arbitraryValues,
  properties as arbitraryValuesProperties,
} from './arbitrary-values.mjs';
import { bgSize } from './bg-size.mjs';
import { borderSpacing } from './border-spacing.mjs';
import { color, properties as colorProperties } from './color.mjs';
import { flexBasis } from './flex-basis.mjs';
import { flex } from './flex.mjs';
import { gridTemplateColumns } from './grid-template-columns.mjs';
import { fontFamily } from './font-family.mjs';
import { listStyleImage } from './list-style-image.mjs';
import { boxSpacing } from './box-spacing.mjs';
import { sizing, properties as sizingProperties } from './sizing.mjs';

import type { Rule } from '../../core/types.mjs';
import { arbitraryProperty } from '../../core/serialize.mjs';
import { createRegistry } from '../../core/registry.mjs';

function utilityRule(
  name: string,
  properties: readonly string[],
  convert: (declaration: [string, string]) => string | false,
): Rule {
  return {
    name,
    properties,
    convert(declaration) {
      // Preserve syntax that legacy numeric/token optimizers cannot safely rewrite.
      if (
        /[\\_'"]|\/\*|\bvar\(/.test(declaration.value) ||
        /^(inherit|initial|unset|revert|revert-layer)$/.test(declaration.value)
      ) {
        return {
          status: 'converted',
          classes: [arbitraryProperty(declaration.property, declaration.value)],
        };
      }
      const classes = convert([declaration.property, declaration.value]);
      return classes
        ? { status: 'converted', classes: classes.split(' ') }
        : { status: 'failed', reason: 'unsupported-value' };
    },
  };
}

// These declarations must remain atomic: splitting can change function order,
// omit components, or lose the reset behavior of CSS shorthands.
const atomicRules = [
  backgroundRule,
  borderRule,
  boxShadowRule,
  filterRule,
  backdropFilterRule,
  transformRule,
  transitionRule,
  transitionPropertyRule,
  scaleRule,
  translateRule,
];
export const atomicProperties = new Set(
  atomicRules.flatMap((rule) => [...rule.properties]),
);

export const rules: readonly Rule[] = [
  ...atomicRules,
  utilityRule('arbitrary-values', arbitraryValuesProperties, arbitraryValues),
  utilityRule('background-size', ['background-size'], bgSize),
  utilityRule('border-spacing', ['border-spacing'], borderSpacing),
  utilityRule('color', colorProperties, color),
  utilityRule('flex-basis', ['flex-basis'], flexBasis),
  utilityRule('flex', ['flex'], flex),
  utilityRule('font-family', ['font-family'], fontFamily),
  utilityRule(
    'grid-template-columns',
    ['grid-template-columns'],
    gridTemplateColumns,
  ),
  utilityRule('list-style-image', ['list-style-image'], listStyleImage),
  ...(['margin', 'padding'] as const).map((name) => {
    const { properties, convert } = boxSpacing(name);
    return utilityRule(name, properties, convert);
  }),
  utilityRule('sizing', sizingProperties, sizing),
];

export const ruleRegistry = createRegistry(rules);
