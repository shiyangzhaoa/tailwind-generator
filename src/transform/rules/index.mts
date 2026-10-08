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
import { rule as arbitraryValuesRule } from './arbitrary-values.mjs';
import { rule as bgSizeRule } from './bg-size.mjs';
import { rule as borderSpacingRule } from './border-spacing.mjs';
import { marginRule, paddingRule } from './box-spacing.mjs';
import { rule as colorRule } from './color.mjs';
import { rule as flexBasisRule } from './flex-basis.mjs';
import { rule as flexRule } from './flex.mjs';
import { rule as fontFamilyRule } from './font-family.mjs';
import { rule as gridTemplateColumnsRule } from './grid-template-columns.mjs';
import { rule as listStyleImageRule } from './list-style-image.mjs';
import { rule as sizingRule } from './sizing.mjs';

import type { Rule } from '../../core/types.mjs';
import { createRegistry } from '../../core/registry.mjs';

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
  arbitraryValuesRule,
  bgSizeRule,
  borderSpacingRule,
  colorRule,
  flexBasisRule,
  flexRule,
  fontFamilyRule,
  gridTemplateColumnsRule,
  listStyleImageRule,
  marginRule,
  paddingRule,
  sizingRule,
];

export const ruleRegistry = createRegistry(rules);
