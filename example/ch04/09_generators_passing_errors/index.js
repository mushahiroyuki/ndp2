"use strict";

function* twoWayGenerator() {
  let what = yield null;
  console.log('Hello ' + what);
}

// #@@range_begin(list1)
let twoWay = twoWayGenerator();
twoWay.next();
twoWay.throw(new Error());
// #@@range_end(list1)
