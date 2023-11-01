const fs = require('fs');

// copy node_modules into function output directory
// console.info('Copying node_modules into .vercel/output/functions/index.func/node_modules')
// fs.cpSync('node_modules', '.vercel/output/functions/index.func/node_modules', {recursive: true, verbatimSymlinks: true})

// copy package.json into function output directory
// console.info('Copying package.json into .vercel/output/functions/index.func')
// fs.cpSync('package.json', '.vercel/output/functions/index.func/package.json')

// copy .vc-config.json into function output directory
console.info('Copying .vc-config.json into .vercel/output/functions/index.func')
fs.cpSync('infra/vercel/.vc-config.json', '.vercel/output/functions/index.func/.vc-config.json')

console.info('Copying config.json into .vervel/output')
fs.cpSync('infra/vercel/config.json', '.vercel/output/config.json')
