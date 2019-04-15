"use strict";
// 原著Errata修正済み

module.exports = function(callbackBasedApi) {
  return function promisified() {
    const args = [].slice.call(arguments);
    return new Promise((resolve, reject) => {    // ❶
      args.push(function(err, result) {                // ❷
        if(err) {
          return reject(err);          // ❸
        }
        if(arguments.length <= 2) {        // ❹
          resolve(result);
        } else {
          resolve([].slice.call(arguments, 1));
        }
      });
      callbackBasedApi.apply(null, args); // ❺
    });
  }
};
