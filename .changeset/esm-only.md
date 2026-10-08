---
'tailwind-generator': minor
---

The package is now ESM only. `require('tailwind-generator')` still works on Node.js 20.19+ and 22.12+, which load ES modules from CommonJS; older Node.js versions are no longer supported. Type-checking CommonJS files against the package needs TypeScript 5.8+.
