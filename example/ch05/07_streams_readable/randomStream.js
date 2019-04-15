"use strict";

// #@@range_begin(list1)
const stream = require('stream');
const Chance = require('chance');

const chance = new Chance();

class RandomStream extends stream.Readable {
  constructor(options) {
    super(options);
  }

  _read(size) {
    const chunk = chance.string();        // ❶
    console.log(`Pushing chunk of size: ${chunk.length}`);
    this.push(chunk, 'utf8');             // ❷
    if(chance.bool({likelihood: 5})) {    // ❸
      this.push(null);
    }
  }
}

module.exports = RandomStream;
// #@@range_end(list1)

