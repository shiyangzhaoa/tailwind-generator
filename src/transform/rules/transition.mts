import { splitByCommas, splitBySpaces } from '../parsers/split.mjs';

export function transition([key, value]: [string, string]) {
  if (key !== 'transition') {
    return false;
  }

  const list = splitByCommas(value);

  const realVal = list
    .map((item) => {
      return `${splitBySpaces(item).join(',')}`;
    })
    .join('_');

  return `transition-[${realVal}]`;
}
