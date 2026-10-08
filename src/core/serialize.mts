import valueParser, { type Node } from 'postcss-value-parser';

/** Encode CSS whitespace without losing literal underscores or quoted contents. */
export function encodeArbitraryValue(value: string): string {
  function encode(nodes: Node[], inUrl = false): string {
    return nodes
      .map((node) => {
        if (node.type === 'comment') return '_';
        if (node.type === 'function') {
          const url = node.value.toLowerCase() === 'url';
          return `${node.value}(${(node.before ?? '').replace(/\s/g, '_')}${encode(node.nodes, url)}${(node.after ?? '').replace(/\s/g, '_')})`;
        }
        const raw = valueParser.stringify(node);
        // Tailwind preserves URL underscores; other literal underscores need escaping.
        return (inUrl ? raw : raw.replace(/(?<!\\)_/g, '\\_')).replace(
          /\s/g,
          '_',
        );
      })
      .join('');
  }
  return encode(valueParser(value).nodes);
}

export function arbitraryProperty(property: string, value: string): string {
  return `[${property}:${encodeArbitraryValue(value)}]`;
}
