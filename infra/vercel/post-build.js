const fs = require('fs');

// copy node_modules into function output directory
console.info('Copying node_modules into .vervel/output/functions/index.func/node_modules')
fs.cpSync('node_modules', '.vervel/output/functions/index.func/node_modules', {recursive: true, verbatimSymlinks: true})

// copy package.json into function output directory
console.info('Copying package.json into .vervel/output/functions/index.func')
fs.cpSync('package.json', '.vervel/output/functions/index.func/package.json')

// copy .vc-config.json into function output directory
console.info('Copying .vc-config.json into .vervel/output/functions/index.func')
fs.cpSync('infra/vercel/.vc-config.json', '.vervel/output/functions/index.func/.vc-config.json')
