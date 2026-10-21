import {readFile,writeFile,mkdir,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist/server',{recursive:true}); await mkdir('dist/.openai',{recursive:true});
let source=await readFile('src/server.mjs','utf8');
for(const [name,file] of [['HTML','src/index.html'],['CSS','src/style.css'],['CLIENT','src/client.js'],['QR','src/qr.js']]) source=`const ${name} = ${JSON.stringify(await readFile(file,'utf8'))};\n`+source;
source=source.replace("import { seed } from './seed.mjs';",await readFile('src/seed.mjs','utf8').then(x=>x.replace('export function seed','function seed')));
await writeFile('dist/server/index.js',source); await cp('.openai/hosting.json','dist/.openai/hosting.json'); await cp('drizzle','dist/.openai/drizzle',{recursive:true});
console.log('Built dependency-free Worker + D1 migrations');
