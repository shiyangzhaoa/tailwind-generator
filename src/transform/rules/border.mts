import { sizing } from './sizing.mjs';
import { color } from './color.mjs';
import { try2PX } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';
import { getTailwindBy } from '../../utils/index.mjs';
import { error } from 'console';
import { isPercentage, isVARValue } from '../../utils/validator.mjs';

const map: Record<string, string> = {
  border: 'rounded',
  'border-top': 'rounded-t',
  'border-right': 'rounded-r',
  'border-bottom': 'rounded-b',
  'border-left': 'rounded-l',
};

const attrs = Object.keys(map);

export function border([key, value]: [string, string]) {
  if (!attrs.includes(key)) {
    return false;
  }

  const tokens = splitBySpaces(value);

  let _width: string | boolean = '';
  let _style: string | boolean = '';
  let _color: string | boolean = '';
  let styleVal = '';

  if (tokens.length === 1) {
    styleVal = tokens[0];
    _style = getTailwindBy({ 'border-style': styleVal }).tailwind.join(' ');
  } else if (tokens.length === 2) {
    const isFirstWidth = isBorderWidth(try2PX(tokens[0]));
    _width = sizing(
      [`${[key]}-width`, try2PX(tokens[isFirstWidth ? 0 : 1])],
      'px',
    );
    styleVal = tokens[isFirstWidth ? 1 : 0];
    _style = getTailwindBy({
      [`border-style`]: styleVal,
    }).tailwind.join(' ');
  } else if (tokens.length === 3) {
    const isFirstWidth = isBorderWidth(try2PX(tokens[0]));
    _width = sizing(
      [`${[key]}-width`, try2PX(tokens[isFirstWidth ? 0 : 1])],
      'px',
    );
    styleVal = tokens[isFirstWidth ? 1 : 0];
    _style = getTailwindBy({
      [`border-style`]: styleVal,
    }).tailwind.join(' ');
    _color = color([`border-color`, tokens[2]]);
  } else {
    error(`${key}: ${value} is invalid.`);

    return false;
  }

  if (styleVal === 'unset') {
    return 'border-none';
  }

  return [_width, _style || `border-[${styleVal}]`, _color]
    .filter(Boolean)
    .join(' ');
}

function isBorderWidth(val: string) {
  if (['thin', 'medium', 'thick'].includes(val)) return true;

  if (isPercentage(val)) return true;

  if (isVARValue(val)) return true;
}
