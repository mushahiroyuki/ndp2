"use strict";

// #@@range_begin(list1)
class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }

  start() {
    this.lastTime = process.hrtime();
  }

  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(
			//       `タイマー "${this.label}": ${diff[0]}秒+${diff[1]}ナノ秒`
      `Timer "${this.label}" took ${diff[0]} seconds and ${diff[1]} nanoseconds.`
    );
  }
}
// #@@range_end(list1)

// #@@range_begin(list2)
module.exports = function(label) {
  if(process.env.NODE_ENV === 'development') {
    return new Profiler(label);        // ❶
  } else if(process.env.NODE_ENV === 'production') {
    return {             // ❷
      start: function() {},
      end: function() {}
    }
  } else {
    throw new Error('Must set NODE_ENV'); // NODE_ENVの設定が必要
  }
};
// #@@range_end(list2)
