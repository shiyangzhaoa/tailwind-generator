import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const minimumTypeScript = '5.8.3';
// Packing needs the development Node; consumers can run on an older one.
const consumerNode = process.env.CONSUMER_NODE ?? process.execPath;
const consumerVersion = execFileSync(consumerNode, ['--version'], {
  encoding: 'utf8',
}).trim();
const directory = mkdtempSync(join(tmpdir(), 'tailwind-generator-package-'));
try {
  const pack = JSON.parse(
    execFileSync('npm', ['pack', '--json', '--pack-destination', directory], {
      encoding: 'utf8',
    }),
  );
  writeFileSync(
    join(directory, 'package.json'),
    '{"private":true,"type":"module"}',
  );
  execFileSync(
    'npm',
    [
      'install',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      join(directory, pack[0].filename),
      // The oldest TypeScript that accepts require() of ESM in .cts files.
      `typescript@${minimumTypeScript}`,
    ],
    { cwd: directory, stdio: 'pipe' },
  );
  for (const [filename, source] of [
    ['esm.mjs', "import { gen, createGenerator } from 'tailwind-generator';"],
    [
      'cjs.cjs',
      "const { gen, createGenerator } = require('tailwind-generator');",
    ],
  ]) {
    writeFileSync(
      join(directory, filename),
      source +
        "\nconsole.log(JSON.stringify(gen({padding:'24px'})));\nif(typeof createGenerator !== 'function') throw new Error('Missing factory');",
    );
    assert.deepEqual(
      JSON.parse(
        execFileSync(consumerNode, [filename], {
          cwd: directory,
          encoding: 'utf8',
        }),
      ),
      { converted: 'p-6', failed: [] },
    );
  }
  const typeFixture = `import { gen, createGenerator, type ConversionResult } from 'tailwind-generator';
const result: ConversionResult = gen({ padding: '24px' });
const literal = createGenerator({ mode: 'preserve' });
literal({ fontWeight: 450 });
result.failed.forEach(failure => { const reason: string = failure.reason; });
`;
  for (const filename of ['consumer.mts', 'consumer.cts'])
    writeFileSync(join(directory, filename), typeFixture);
  execFileSync(
    process.execPath,
    [
      join(directory, 'node_modules/typescript/bin/tsc'),
      '--noEmit',
      '--module',
      'NodeNext',
      '--target',
      'ES2022',
      'consumer.mts',
      'consumer.cts',
    ],
    { cwd: directory, stdio: 'pipe' },
  );
  console.log(
    `Packed package works from import and require() on Node ${consumerVersion}; consumer types pass with TypeScript ${minimumTypeScript}`,
  );
} finally {
  rmSync(directory, { recursive: true, force: true });
}
