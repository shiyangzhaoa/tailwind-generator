import { twMerge } from 'tailwind-merge';

import { getTailwindBy } from '../../utils/index.mjs';
import { error } from '../../utils/logger.mjs';
import { try2REM, toTailwindClass } from '../functions.mjs';
import { splitBySpaces } from '../parsers/split.mjs';

const map: Record<string, string> = Object.fromEntries(
  ['', 'scroll-']
    .map((prefix) => {
      return [
        [[`${prefix}padding`], `${prefix}p`],
        [[`${prefix}padding-left`], `${prefix}pl`],
        [[`${prefix}padding-right`], `${prefix}pr`],
        [[`${prefix}padding-top`], `${prefix}pt`],
        [[`${prefix}padding-bottom`], `${prefix}pb`],
        [[`${prefix}padding-inline-start`], `${prefix}ps`],
        [[`${prefix}padding-inline-end`], `${prefix}pe`],
      ];
    })
    .flat(1),
);

const attrs = Object.keys(map);

export function padding([key, value]: [string, string]) {
  if (!attrs.includes(key)) {
    return false;
  }

  const first = key.split('-')[0];
  const prefix = first === 'padding' ? '' : `${first}-`;

  const list = splitBySpaces(value).filter((v) => v !== ' ');

  if (key !== `${prefix}padding`) {
    if (list.length !== 1) {
      error(`${key}: ${value} is invalid.`);

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
      [`${prefix}padding`]: list[0],
    };
  } else if (list.length === 2) {
    valMap = {
      [`${prefix}padding-top`]: list[0],
      [`${prefix}padding-right`]: list[1],
      [`${prefix}padding-bottom`]: list[0],
      [`${prefix}padding-left`]: list[1],
    };
  } else if (list.length === 3) {
    valMap = {
      [`${prefix}padding-top`]: list[0],
      [`${prefix}padding-right`]: list[1],
      [`${prefix}padding-bottom`]: list[2],
      [`${prefix}padding-left`]: list[1],
    };
  } else if (list.length === 4) {
    valMap = {
      [`${prefix}padding-top`]: list[0],
      [`${prefix}padding-right`]: list[1],
      [`${prefix}padding-bottom`]: list[2],
      [`${prefix}padding-left`]: list[3],
    };
  } else {
    error(`${key}: ${value} is invalid.`);

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
