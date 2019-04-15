"use strict";

// #@@range_begin(list1)
const fs = require('fs');
const zlib = require('zlib');

const file = process.argv[2];

fs.readFile(file, (err, buffer) => {
  zlib.gzip(buffer, (err, buffer) => {
    fs.writeFile(file + '.gz', buffer, err => {
      console.log('File successfully compressed'); // ファイルの圧縮に成功
    });
  });
});
// #@@range_end(list1)
