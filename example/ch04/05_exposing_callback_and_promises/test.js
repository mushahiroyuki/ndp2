"use strict";

var asyncDivision = require('./index.js');

// #@@range_begin(list1)
// コールバックベースのAPIとして使用
asyncDivision(10, 2, (error, result) => {
  if (error) {
    return console.error(error);
  }
  console.log(result);
});

// プロミスベースのAPIとして使用
asyncDivision(22, 11)
  .then(result => console.log(result))
  .catch(error => console.error(error))
;
// #@@range_end(list1)
