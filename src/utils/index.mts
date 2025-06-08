import { combination } from '../constant.mjs';

export function assertNever(value: never) {
  console.error('Unknown value', value);

  throw Error('Not possible');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function str(val: Record<string, any>) {
  return JSON.stringify(val);
}

/**
 * try getTailwindBy({ 'overflow': 'hidden','max-width': '100%', 'height': '1px', 'text-overflow':'ellipsis', 'white-space': 'nowrap' ,'border-width': '0', display: 'flex', 'clip': 'rect(0, 0, 0, 0)',  margin: '-1px', padding: '0', position: 'absolute', 'white-space': 'nowrap', width: '1px', 'margin-left': '1.25rem', 'margin-right': '1.25rem' })
 * get ['sr-only', 'flex', 'mx-5', 'max-w-full', 'truncate']
 * @param rule
 */
export const getTailwindBy = (rule: Record<string, string>) => {
  const props = Object.keys(rule).sort();
  const tailwind: string[] = [];
  const uselessProps: string[] = [];
  void (function dfs(keys, acc = combination, uselessKeys: string[] = []) {
    keys.forEach((key, index) => {
      const curKeys = keys.filter((_, j) => j > index);
      const validKey = JSON.stringify({ [key]: rule[key] });
      const cur = acc[validKey];
      if (cur?.value) {
        const count = Object.keys(cur).length;
        if (curKeys.length === 0 || count === 1) {
          if (
            ![...uselessKeys, key].every((item) => uselessProps.includes(item))
          ) {
            tailwind.push(cur.value);
            uselessProps.push(...uselessKeys, key);
          }
        } else {
          dfs(curKeys, cur, [...uselessKeys, key]);
        }
      } else {
        if (cur && curKeys.length !== 0) {
          dfs(curKeys, cur, [...uselessKeys, key]);
        } else {
          if (acc.value && curKeys.length === 0) {
            if (!uselessKeys.every((item) => uselessProps.includes(item))) {
              tailwind.push(acc.value);
              uselessProps.push(...uselessKeys);
            }
          }
        }
      }
    });
  })(props);

  const validUselessProps = [...new Set(uselessProps)];
  const useful = Object.fromEntries(
    Object.entries(rule).filter(([key]) => !validUselessProps.includes(key)),
  );

  return {
    tailwind,
    useful: Object.keys(useful).length ? useful : null,
  };
};

export function removeSpace(val: string) {
  return val.replaceAll(/\s/g, '');
}

export function removeExtraSpace(val: string) {
  return val
    .split(' ')
    .filter((v) => v !== ' ')
    .join(' ');
}

export function toFixedWithoutTrailingZeros(
  num: number,
  digits: number,
): string {
  return parseFloat(num.toFixed(digits)).toString();
}
