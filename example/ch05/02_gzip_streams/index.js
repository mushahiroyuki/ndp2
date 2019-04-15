"use strict";

// #@@range_begin(list1)
const fs = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('File successfully compressed')); // 圧縮に成功
// #@@range_end(list1)
