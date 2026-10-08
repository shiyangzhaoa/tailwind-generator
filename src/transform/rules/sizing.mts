import { designTokenVars } from '../../tokens.mjs';
import { getTailwindBy } from '../../core/mappings.mjs';
import { isString } from '../../utils/validator.mjs';
import { try2PX, try2REM, toTailwindClass } from '../functions.mjs';

const map: Record<
  string,
  string | { key: string; model: 'px' | 'rem'; spacing?: boolean }
> = {
  'width': {
    key: 'w',
    model: 'rem',
    spacing: true,
  },
  'min-width': {
    key: 'min-w',
    model: 'rem',
    spacing: true,
  },
  'max-width': {
    key: 'max-w',
    model: 'rem',
    spacing: true,
  },
  'height': {
    key: 'h',
    model: 'rem',
    spacing: true,
  },
  'min-height': {
    key: 'min-h',
    model: 'rem',
    spacing: true,
  },
  'max-height': {
    key: 'max-h',
    model: 'rem',
    spacing: true,
  },
  'font-size': {
    key: 'text',
    model: 'rem',
  },
  'font-weight': 'font',
  'letter-spacing': 'tracking',
  'line-height': {
    key: 'leading',
    model: 'rem',
  },
  'text-underline-offset': {
    key: 'underline-offset',
    model: 'px',
  },
  'vertical-align': 'align',
  'top': {
    key: 'top',
    model: 'rem',
    spacing: true,
  },
  'right': {
    key: 'right',
    model: 'rem',
    spacing: true,
  },
  'bottom': {
    key: 'bottom',
    model: 'rem',
    spacing: true,
  },
  'left': {
    key: 'left',
    model: 'rem',
    spacing: true,
  },
  'inset-inline-start': {
    key: 'start',
    model: 'rem',
    spacing: true,
  },
  'inset-inline-end': {
    key: 'end',
    model: 'rem',
    spacing: true,
  },
  'border-width': {
    key: 'border',
    model: 'px',
  },
  'border-inline-start-width': {
    key: 'border-s',
    model: 'px',
  },
  'border-inline-end-width': {
    key: 'border-e',
    model: 'px',
  },
  'border-top-width': {
    key: 'border-t',
    model: 'px',
  },
  'border-right-width': {
    key: 'border-r',
    model: 'px',
  },
  'border-bottom-width': {
    key: 'border-b',
    model: 'px',
  },
  'border-left-width': {
    key: 'border-l',
    model: 'px',
  },
  'outline-width': {
    key: 'outline',
    model: 'px',
  },
  'outline-offset': {
    key: 'outline-offset',
    model: 'px',
  },
  'stroke-width': {
    key: 'stroke',
    model: 'px',
  },
  'perspective': {
    key: 'perspective',
    model: 'px',
    spacing: false,
  },
};
const convertorMap = {
  'px': try2PX,
  'rem': try2REM,
};

export const properties = Object.keys(map);

export function sizing(
  [key, value]: [string, string],
  mode?: 'spacing' | 'px',
) {
  if (!properties.includes(key)) {
    return false;
  }

  const config = map[key];
  const convertor = isString(config)
    ? convertorMap.rem
    : convertorMap[config.model];
  const convertorValue = convertor(value);

  const { tailwind, useful } = getTailwindBy({
    [key]: designTokenVars[convertorValue] ?? convertorValue,
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  const prefix = isString(config) ? config : config.key;
  const spacingModel =
    isString(config) || !config.spacing ? undefined : 'spacing';

  return toTailwindClass(prefix, value, { mode: mode ?? spacingModel });
}
