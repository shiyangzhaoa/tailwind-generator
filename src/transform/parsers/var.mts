import valueParser, { Node } from 'postcss-value-parser';

export function varParser(
  target: string,
  keys: string[] = [],
  val?: string,
): [string[], string | undefined] {
  const { nodes } = valueParser(target);

  function walk(nodes: Node[]): [string[], string | undefined] {
    for (const node of nodes) {
      if (node.type === 'function' && node.value === 'var') {
        const args = node.nodes;
        if (!args || args.length === 0) continue;

        // 获取并验证变量名
        const varName = args[0];
        if (varName.type !== 'word') continue;

        // 验证变量名格式
        if (!varName.value.startsWith('--')) continue;
        const key = varName.value.slice(2); // 去掉 -- 前缀

        // 处理 fallback 值
        let fallback: string | undefined;
        if (args.length > 1) {
          // 跳过逗号节点，收集所有非逗号节点
          const fallbackNodes = args
            .slice(1)
            .filter((node) => node.type !== 'div');
          if (fallbackNodes.length > 0) {
            fallback = valueParser.stringify(fallbackNodes).trim();
          }
        }

        // 如果当前 var() 有 fallback 值，返回它
        if (fallback) {
          return [[...keys, key], fallback];
        }

        // 如果没有 fallback 值，继续处理嵌套的 var()
        if (args.length > 1) {
          const nestedResult = walk(args.slice(1));
          if (nestedResult[0].length > 0) {
            return [[...keys, key, ...nestedResult[0]], nestedResult[1]];
          }
        }

        // 只有变量名，没有 fallback
        return [[...keys, key], undefined];
      }

      // 处理其他类型的节点
      if ('nodes' in node && node.nodes) {
        const result = walk(node.nodes);
        if (result[0].length > 0) {
          return [[...keys, ...result[0]], result[1]];
        }
      }
    }

    return [keys, val];
  }

  return walk(nodes);
}
