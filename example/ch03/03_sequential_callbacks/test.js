"use strict";

function asyncOperation(callback) {
  process.nextTick(callback);
}

// #@@range_begin(list1)
function task1(callback) {
  asyncOperation(() => {
    task2(callback);
  });
}

function task2(callback) {
  asyncOperation(() => {
    task3(callback);
  });
}

function task3(callback) {
  asyncOperation(() => {
    callback(); // 最後にコールバックを実行する
  });
}

task1(() => {
  console.log('tasks 1, 2 and 3 executed'); // task1〜3が完了すると実行される
});
// #@@range_end(list1)
