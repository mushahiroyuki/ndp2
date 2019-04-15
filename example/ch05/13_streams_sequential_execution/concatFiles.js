"use strict";

// #@@range_begin(list1)
const fromArray = require('from2-array');
const through = require('through2');
const fs = require('fs');
// #@@range_end(list1)

// #@@range_begin(list2)
function concatFiles(destination, files, callback) {
  const destStream = fs.createWriteStream(destination);
  fromArray.obj(files)                       // ❶
    .pipe(through.obj((file, enc, done) => { // ❷
      const src = fs.createReadStream(file);
      src.pipe(destStream, {end: false});
      src.on('end', done);                   // ❸
    }))
    .on('finish', () => {                    // ❹
      destStream.end();
      callback();
    });
}

module.exports = concatFiles;
// #@@range_end(list2)
