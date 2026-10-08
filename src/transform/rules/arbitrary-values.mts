import { try2REM } from '../functions.mjs';
import { utilityRule } from './utility.mjs';

const radius = (prefix: string) => ({ prefix, normalize: try2REM });

export const rule = utilityRule('arbitrary-values', {
  'aspect-ratio': { prefix: 'aspect' },
  'grid-column': { prefix: 'col' },
  'grid-template-rows': { prefix: 'grid-rows' },
  'grid-row': { prefix: 'row' },
  'grid-auto-columns': { prefix: 'auto-cols' },
  'grid-auto-rows': { prefix: 'auto-rows' },
  gap: { prefix: 'gap' },
  'list-style-type': { prefix: 'list' },
  'background-position': { prefix: 'bg' },
  'background-image': { prefix: 'bg' },
  opacity: { prefix: 'opacity' },
  'border-radius': radius('rounded'),
  'border-start-start-radius': radius('rounded-ss'),
  'border-start-end-radius': radius('rounded-se'),
  'border-end-end-radius': radius('rounded-ee'),
  'border-end-start-radius': radius('rounded-es'),
  'border-top-left-radius': radius('rounded-tl'),
  'border-top-right-radius': radius('rounded-tr'),
  'border-bottom-right-radius': radius('rounded-br'),
  'border-bottom-left-radius': radius('rounded-bl'),
  'transform-origin': { prefix: 'origin' },
  'perspective-origin': { prefix: 'perspective-origin' },
  rotate: { prefix: 'rotate' },
  cursor: { prefix: 'cursor' },
  'will-change': { prefix: 'will-change' },
  'transition-duration': { prefix: 'duration' },
  'transition-timing-function': { prefix: 'ease' },
  'transition-delay': { prefix: 'delay' },
  'z-index': { prefix: 'z' },
  content: { prefix: 'content' },
});
