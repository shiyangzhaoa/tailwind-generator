import { try2PX, try2REM } from '../functions.mjs';
import { spacing, utilityRule, type Utility } from './utility.mjs';

const length = (prefix: string): Utility => ({
  prefix,
  normalize: try2REM,
  fallback: spacing,
});
const rem = (prefix: string, hint?: string): Utility => ({
  prefix,
  normalize: try2REM,
  ...(hint && { hint }),
});
const px = (prefix: string, hint?: string): Utility => ({
  prefix,
  normalize: try2PX,
  ...(hint && { hint }),
});

export const rule = utilityRule('sizing', {
  width: length('w'),
  'min-width': length('min-w'),
  'max-width': length('max-w'),
  height: length('h'),
  'min-height': length('min-h'),
  'max-height': length('max-h'),
  top: length('top'),
  right: length('right'),
  bottom: length('bottom'),
  left: length('left'),
  'inset-inline-start': length('start'),
  'inset-inline-end': length('end'),
  'font-size': rem('text', 'length'),
  'font-weight': rem('font', 'number'),
  'letter-spacing': rem('tracking'),
  'line-height': rem('leading'),
  'vertical-align': rem('align'),
  'text-underline-offset': px('underline-offset'),
  'border-width': px('border', 'length'),
  'border-inline-start-width': px('border-s', 'length'),
  'border-inline-end-width': px('border-e', 'length'),
  'border-top-width': px('border-t', 'length'),
  'border-right-width': px('border-r', 'length'),
  'border-bottom-width': px('border-b', 'length'),
  'border-left-width': px('border-l', 'length'),
  'outline-width': px('outline', 'length'),
  'outline-offset': px('outline-offset'),
  'stroke-width': px('stroke', 'length'),
  perspective: px('perspective'),
});
