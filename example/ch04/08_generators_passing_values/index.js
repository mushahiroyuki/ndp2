"use strict";

// #@@range_begin(list1)
function* twoWayGenerator() {
  const what = yield null;
  console.log('Hello ' + what);
}

const twoWay = twoWayGenerator();
twoWay.next();
twoWay.next('world');
// #@@range_end(list1)
