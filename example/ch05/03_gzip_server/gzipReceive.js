"use strict";

// #@@range_begin(list1)
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log('File request received: ' + filename);
  req
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename))
    .on('finish', () => {
      res.writeHead(201, {'Content-Type': 'text/plain'});
      res.end('That\'s it\n'); // おしまい！
      console.log(`File saved: ${filename}`);
    });
});

server.listen(3000, () => console.log('Listening'));
// #@@range_end(list1)
