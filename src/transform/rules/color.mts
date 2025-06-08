import { designTokenVars } from '../../tokens.mjs';
import { getTailwindBy } from '../../utils/index.mjs';
import { isString, isVAR } from '../../utils/validator.mjs';
import { try2oklch, toTailwindClass } from '../functions.mjs';

const map: Record<string, string | { key: string }> = {
  color: {
    key: 'text',
  },
  'text-decoration-color': {
    key: 'decoration',
  },
  'background-color': {
    key: 'bg',
  },
  'border-color': {
    key: 'border',
  },
  'outline-color': {
    key: 'outline',
  },
  'accent-color': {
    key: 'accent',
  },
  'caret-color': {
    key: 'caret',
  },
  // #region SVG
  fill: {
    key: 'fill',
  },
  stroke: {
    key: 'stroke',
  },
  // #endregion
};

const attrs = Object.keys(map);

export function color([key, value]: [string, string]) {
  if (!attrs.includes(key)) {
    return false;
  }

  const config = map[key];
  const oklch = try2oklch(value);

  const { tailwind, useful } = getTailwindBy({
    [key]: designTokenVars[oklch] ?? oklch,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  const prefix = isString(config) ? config : config.key;

  return toTailwindClass(
    prefix,
    isVAR(value) ? value.replaceAll(/\s/g, '') : value.replaceAll(/\s/g, '_'),
  );
}
