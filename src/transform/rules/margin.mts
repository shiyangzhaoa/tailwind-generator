import { twMerge } from 'tailwind-merge';

import { getTailwindBy } from '../../utils/index.mjs';
import { try2REM, toTailwindClass } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';

const map: Record<string, string> = Object.fromEntries(
  ['', 'scroll-']
    .map((prefix) => {
      return [
        [[`${prefix}margin`], `${prefix}m`],
        [[`${prefix}margin-left`], `${prefix}ml`],
        [[`${prefix}margin-right`], `${prefix}mr`],
        [[`${prefix}margin-top`], `${prefix}mt`],
        [[`${prefix}margin-bottom`], `${prefix}mb`],
        [[`${prefix}margin-inline-start`], `${prefix}ms`],
        [[`${prefix}margin-inline-end`], `${prefix}me`],
      ];
    })
    .flat(1),
);

export const properties = Object.keys(map);

export function margin([key, value]: [string, string]) {
  if (!properties.includes(key)) {
    return false;
  }

  const first = key.split('-')[0];
  const prefix = first === 'margin' ? '' : `${first}-`;

  const list = splitBySpaces(value).filter((v) => v !== ' ');

  if (key !== `${prefix}margin`) {
    if (list.length !== 1) {
      return false;
    }

    const { tailwind } = getTailwindBy({
      [key]: try2REM(value),
    });

    return tailwind.length ? tailwind.join(' ') : `${map[key]}-[${value}]`;
  }

  let valMap: Record<string, string> = {};

  if (list.length === 1) {
    valMap = {
      [`${prefix}margin`]: list[0],
    };
  } else if (list.length === 2) {
    valMap = {
      [`${prefix}margin-top`]: list[0],
      [`${prefix}margin-right`]: list[1],
      [`${prefix}margin-bottom`]: list[0],
      [`${prefix}margin-left`]: list[1],
    };
  } else if (list.length === 3) {
    valMap = {
      [`${prefix}margin-top`]: list[0],
      [`${prefix}margin-right`]: list[1],
      [`${prefix}margin-bottom`]: list[2],
      [`${prefix}margin-left`]: list[1],
    };
  } else if (list.length === 4) {
    valMap = {
      [`${prefix}margin-top`]: list[0],
      [`${prefix}margin-right`]: list[1],
      [`${prefix}margin-bottom`]: list[2],
      [`${prefix}margin-left`]: list[3],
    };
  } else {
    return false;
  }

  const { tailwind, useful } = getTailwindBy(valMap);

  return twMerge(
    ...tailwind,
    ...Object.entries(useful || {}).map(([k]) => {
      return toTailwindClass(map[k], valMap[k], { mode: 'spacing' });
    }),
  );
}
