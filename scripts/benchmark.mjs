import { performance } from 'node:perf_hooks';
import { getTailwindBy } from '../esm/core/mappings.mjs';
import { gen } from '../esm/index.mjs';
const iterations = 2000;
for (const size of [10, 50, 100]) {
  const input = Object.fromEntries(
    Array.from({ length: size }, (_, i) => [`unknown-${i}`, 'unmatched']),
  );
  Object.assign(input, { display: 'flex', padding: '24px', color: '#fff' });
  for (const [name, run] of [
    ['match', getTailwindBy],
    ['convert', gen],
  ]) {
    for (let i = 0; i < 100; i++) run(input);
    const start = performance.now();
    for (let i = 0; i < iterations; i++) run(input);
    console.log(
      `${name}: ${Object.keys(input).length} declarations, ${((performance.now() - start) / iterations).toFixed(3)} ms/call`,
    );
  }
}
