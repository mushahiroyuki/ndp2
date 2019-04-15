"use strict";

const co = require('co');

// #@@range_begin(list1)
class TaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;  // ★この行不要？
    this.running = 0;
    this.taskQueue = [];
    this.consumerQueue = [];
    this.spawnWorkers(concurrency);
  }

  pushTask(task) {
    if (this.consumerQueue.length !== 0) {
      this.consumerQueue.shift()(null, task);
    } else {
      this.taskQueue.push(task);
    }
  }

  spawnWorkers(concurrency) {
    const self = this;
    for(let i = 0; i < concurrency; i++) {
      co(function* () {
        while(true) {
          const task = yield self.nextTask();
          yield task;
        }
      });
    }
  }

// #@@range_begin(list2)
  nextTask() {
    return callback => {
      if(this.taskQueue.length !== 0) {
        return callback(null, this.taskQueue.shift());
      }

      this.consumerQueue.push(callback);
    }
  }
// #@@range_end(list2)
}

// #@@range_end(list1)
module.exports = TaskQueue;
