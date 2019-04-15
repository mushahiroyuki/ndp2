"use strict";

// #@@range_begin(list1)
module.exports = function asyncDivision (dividend, divisor, cb) {
  return new Promise((resolve, reject) => {  // ❶

    process.nextTick(() => {
      const result = dividend / divisor;
      if (isNaN(result) || !Number.isFinite(result)) {
        const error = new Error('Invalid operands');
        if (cb) { cb(error); }  // ❷
        return reject(error);
      }

      if (cb) { cb(null, result); }  // ❸
      resolve(result);
    });

  });
};
// #@@range_end(list1)
