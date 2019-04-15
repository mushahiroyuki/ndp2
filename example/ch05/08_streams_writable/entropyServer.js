"use strict";

// #@@range_begin(list1)
const Chance = require('chance');
const chance = new Chance();

require('http').createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});       // ❶
  while(chance.bool({likelihood: 95})) {                    // ❷
    res.write(chance.string() + '\n');                      // ❸
  }
  res.end('\nThe end...\n');                                // ❹
  res.on('finish', () => console.log('All data was sent')); // ❺
}).listen(8080, () => console.log('Listening on http://localhost:8080'));
// #@@range_end(list1)
