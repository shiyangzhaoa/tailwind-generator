import { getTailwindBy } from '../../utils/index.mjs';
import { mergeMultiAttr, toTailwindClass } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';

const defaultVals = [
  'var(--tw-translate-x)',
  'var(--tw-translate-y)',
  'var(--tw-translate-z)',
];

export function translate([key, value]: [string, string]) {
  if (key !== 'translate') {
    return false;
  }

  const tokens = splitBySpaces(value);

  const { tailwind, useful } = getTailwindBy({
    translate: Array.from({ length: tokens.length === 3 ? 3 : 2 })
      .map((_, i) => tokens[i] ?? defaultVals[i])
      .filter(Boolean)
      .join(' '),
  });

  if (!useful) {
    return tailwind.join(' ');
  }

  if (tokens.length === 1) {
    const realValue = tokens[0];

    return toTailwindClass('translate-x', realValue, { mode: 'spacing' });
  }

  if (tokens.length === 2) {
    const translateX = tokens[0];
    const translateY = tokens[1];

    const xClass =
      parseFloat(translateX) !== 0
        ? toTailwindClass('translate-x', translateX, {
            mode: 'spacing',
          })
        : undefined;
    const yClass =
      parseFloat(translateY) !== 0
        ? toTailwindClass('translate-y', translateY, {
            mode: 'spacing',
          })
        : undefined;

    return [xClass, yClass].filter(Boolean).join(' ');
  }

  if (tokens.length === 3) {
    const translateX = tokens[0];
    const translateY = tokens[1];
    const translateZ = tokens[2];

    if (translateZ === '0') {
      const xClass = toTailwindClass('translate-x', translateX, {
        mode: 'spacing',
      });
      const yClass = toTailwindClass('translate-y', translateY, {
        mode: 'spacing',
      });

      return [xClass, yClass].join(' ');
    }
  }

  return toTailwindClass('translate', mergeMultiAttr(value));
}
