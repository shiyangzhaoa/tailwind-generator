import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { __unstable__loadDesignSystem } from 'tailwindcss';
const require = createRequire(import.meta.url);
const source = JSON.parse(
  readFileSync(new URL('../data/tailwind-4.1.json', import.meta.url), 'utf8'),
);
const installed = require('tailwindcss/package.json').version;
assert.equal(
  installed,
  source.tailwindVersion,
  'Update the mapping snapshot deliberately when changing Tailwind versions',
);
// This build-time audit uses an internal compiler API, pinned to the snapshot version.
// It never ships in the runtime package and checks existence, not CSS equivalence.
const theme = readFileSync(require.resolve('tailwindcss/theme.css'), 'utf8');
const system = await __unstable__loadDesignSystem(
  theme + '\n@tailwind utilities;',
);
const entries = source.entries.filter(
  (entry) => !/[<>]/.test(JSON.stringify(entry)),
);
const css = system.candidatesToCss(entries.map((entry) => entry.classes));
const missing = entries.filter((_, index) => !css[index]);
assert.deepEqual(missing, [], 'Some mapping classes no longer compile');
console.log(
  `All ${entries.length} concrete mapping classes compile with Tailwind ${installed}`,
);
