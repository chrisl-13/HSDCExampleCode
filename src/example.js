const fs = require('fs');
const { getTree } = require('./parser.js');

const content = fs.readFileSync(__dirname + '/src/index.jsx', 'utf8');
const result = getTree(content);
console.log(JSON.stringify(result));