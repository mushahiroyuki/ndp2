"use strict";

// #@@range_begin(list1)
const ticker = require('./ticker');

ticker.on('tick', (tickCount) => console.log(tickCount, 'TICK'));
// ticker.emit('something', {}); <-- これは失敗する
// require('events').prototype.emit.call(ticker, 'someEvent', {}); <-- これが成功する
// #@@range_end(list1)
