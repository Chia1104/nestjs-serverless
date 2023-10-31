const fs = require('fs');

// copy node_modules into function output directory
console.info('Copying node_modules into .zeabur/output/functions/index.func/node_modules')
fs.cpSync('node_modules', '.zeabur/output/functions/index.func/node_modules', {recursive: true, verbatimSymlinks: true})

// copy package.json into function output directory
console.info('Copying package.json into .zeabur/output/functions/index.func')
fs.cpSync('package.json', '.zeabur/output/functions/index.func/package.json')

// copy index.js (overwritten entry file) into function output directory
console.info('Copying infra/zeabur/index.js into .zeabur/output/functions/index.func')
fs.cpSync('infra/zeabur/index.js', '.zeabur/output/functions/index.func/index.js')
