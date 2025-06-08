import { getTailwindBy, removeSpace } from '../../utils/index.mjs';

export function transitionProperty([key, value]: [string, string]) {
  if (key !== 'transition-property') {
    return false;
  }

  if (value === 'none') {
    return 'transition-none';
  }

  const { tailwind, useful } = getTailwindBy({
    'transition-duration': 'var(--default-transition-duration)',
    'transition-timing-function': 'var(--default-transition-timing-function)',
    'transition-property': value,
  });

  if (useful) {
    return `transition-[${removeSpace(value)}]`;
  }

  return tailwind.join(' ');
}
