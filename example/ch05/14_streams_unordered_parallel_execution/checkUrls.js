"use strict";

// #@@range_begin(list1)
const fs = require('fs');
const split = require('split');
const request = require('request');
const ParallelStream = require('./parallelStream');

fs.createReadStream(process.argv[2])                      // ❶
  .pipe(split())                                          // ❷
  .pipe(new ParallelStream((url, enc, done, push) => {    // ❸
    if(!url) return done();
    request.head(url, (err, response) => {
      push(url + ' is ' + (err ? 'down' : 'up') + '\n');
      done();
    });
  }))
  .pipe(fs.createWriteStream('results.txt'))             // ❹
  .on('finish', () => console.log('All urls were checked'))
;
// #@@range_end(list1)
