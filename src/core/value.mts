import valueParser, { type Node } from 'postcss-value-parser';
import type { ConversionContext } from './types.mjs';

export function parseValue(value: string) {
  const parsed = valueParser(value);
  let valid = value.trim().length > 0;
  // value-parser deliberately accepts incomplete values. Reject unclosed tokens
  // and unmatched delimiters before any optimizer or fallback sees them.
  parsed.walk((node) => {
    if ('unclosed' in node && node.unclosed) valid = false;
  });
  const stack: string[] = [];
  let quote = '';
  let escaped = false;
  let comment = false;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (comment) {
      if (char === '*' && value[i + 1] === '/') {
        comment = false;
        i++;
      }
      continue;
    }
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === '\\') {
      escaped = true;
      continue;
    }
    if (quote) {
      if (char === quote) quote = '';
      continue;
    }
    if (char === '/' && value[i + 1] === '*') {
      comment = true;
      i++;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === '(' || char === '[') stack.push(char);
    else if (char === ')' || char === ']') {
      if (stack.pop() !== (char === ')' ? '(' : '[')) valid = false;
    } else if (!stack.length && (char === ';' || char === '{' || char === '}'))
      valid = false;
  }
  if (quote || escaped || comment || stack.length) valid = false;
  return { nodes: parsed.nodes, valid };
}

export function resolveVariables(
  value: string,
  context: ConversionContext,
): string {
  type Resolution = { value: string; valid: boolean };
  // A cycle anywhere in a custom property's dependency graph invalidates that
  // definition, including references occurring inside its fallback branch.
  function hasCycle(name: string, path = new Set<string>()): boolean {
    if (path.has(name)) return true;
    if (!Object.hasOwn(context.variables, name)) return false;
    const dependencies: string[] = [];
    valueParser(context.variables[name]).walk((node) => {
      if (node.type === 'function' && node.value.toLowerCase() === 'url')
        return false;
      if (node.type === 'function' && node.value === 'var') {
        const comma = node.nodes.findIndex(
          (child) => child.type === 'div' && child.value === ',',
        );
        dependencies.push(
          valueParser
            .stringify(comma < 0 ? node.nodes : node.nodes.slice(0, comma))
            .trim(),
        );
      }
    });
    return dependencies.some((dependency) =>
      hasCycle(dependency, new Set([...path, name])),
    );
  }

  function resolve(input: string, visiting: ReadonlySet<string>): Resolution {
    let valid = true;
    const output = valueParser(input)
      .nodes.map((node) => {
        if (node.type !== 'function' || node.value.toLowerCase() === 'url')
          return valueParser.stringify(node);
        if (node.value === 'var') {
          const comma = node.nodes.findIndex(
            (child) => child.type === 'div' && child.value === ',',
          );
          const name = valueParser
            .stringify(comma < 0 ? node.nodes : node.nodes.slice(0, comma))
            .trim();
          if (
            Object.hasOwn(context.variables, name) &&
            !visiting.has(name) &&
            !hasCycle(name)
          ) {
            const known = resolve(
              context.variables[name],
              new Set([...visiting, name]),
            );
            if (known.valid) return known.value;
          }
          if (comma >= 0) {
            const fallback = resolve(
              valueParser.stringify(node.nodes.slice(comma + 1)).trim(),
              visiting,
            );
            if (fallback.valid) return fallback.value;
          }
          valid = false;
          return valueParser.stringify(node);
        }
        const nested = resolve(valueParser.stringify(node.nodes), visiting);
        if (!nested.valid) valid = false;
        return `${node.value}(${node.before ?? ''}${nested.value}${node.after ?? ''})`;
      })
      .join('');
    return { value: output, valid };
  }
  return resolve(value, new Set()).value;
}

export function functionParser(value: string): [string | null, string | null] {
  const { nodes, valid } = parseValue(value);
  const meaningful = nodes.filter(
    (node) => node.type !== 'space' && node.type !== 'comment',
  );
  const node = meaningful[0];
  if (!valid || meaningful.length !== 1 || node?.type !== 'function')
    return [null, null];
  return [node.value, valueParser.stringify(node.nodes)];
}
