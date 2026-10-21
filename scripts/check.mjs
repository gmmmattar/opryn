import {execFileSync} from 'node:child_process';
for(const f of ['src/server.mjs','src/client.js','src/qr.js','src/seed.mjs']) execFileSync(process.execPath,['--check',f],{stdio:'inherit'});
console.log('All JavaScript parses successfully (no TypeScript in this implementation).');
