"use strict";

const profiler = require('./profiler');

function getRandomArray(len) {
  const p = profiler(`Generating a ${len} items long array`);//長い配列を生成（長さ：${len}）
  p.start();
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.random());
  }
  p.end();
}

getRandomArray(1e6);
console.log('Done');

