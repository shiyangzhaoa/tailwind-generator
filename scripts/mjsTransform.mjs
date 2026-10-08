/** Prepare CommonJS sources, including type-only imports and re-exports. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { sync } from 'glob';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(root, 'copy');
fs.rmSync(destination, { recursive: true, force: true });
fs.cpSync(path.join(root, 'src'), destination, { recursive: true });
for (const file of sync(path.join(destination, '**/*.mts'))) {
  const source = fs.readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const edits = [];
  function visit(node) {
    const specifier =
      ts.isImportDeclaration(node) || ts.isExportDeclaration(node)
        ? node.moduleSpecifier
        : ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)
          ? node.argument.literal
          : ts.isCallExpression(node) &&
              node.expression.kind === ts.SyntaxKind.ImportKeyword
            ? node.arguments[0]
            : undefined;
    if (
      specifier &&
      ts.isStringLiteral(specifier) &&
      /^\.\.?\//.test(specifier.text)
    ) {
      edits.push({
        start: specifier.getStart(ast) + 1,
        end: specifier.end - 1,
        text: specifier.text.replace(/\.mjs$/, '.cjs'),
      });
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  let output = source;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    output = output.slice(0, edit.start) + edit.text + output.slice(edit.end);
  fs.writeFileSync(file.replace(/\.mts$/, '.cts'), output);
  fs.unlinkSync(file);
}
console.log('Prepared CommonJS sources');
