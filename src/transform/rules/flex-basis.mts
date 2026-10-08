import { try2REM } from '../functions.mjs';
import { spacing, utilityRule } from './utility.mjs';

export const rule = utilityRule('flex-basis', {
  'flex-basis': { prefix: 'basis', normalize: try2REM, fallback: spacing },
});
