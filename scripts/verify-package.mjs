import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
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
        execFileSync(process.execPath, [filename], {
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
      require.resolve('typescript/bin/tsc'),
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
  console.log('Packed ESM/CommonJS entry points and consumer types passed');
} finally {
  rmSync(directory, { recursive: true, force: true });
}
