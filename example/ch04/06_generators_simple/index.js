"use strict";

// #@@range_begin(list1)
function* fruitGenerator() {
  yield 'apple';
  yield 'orange';
  return 'watermelon';
}

const newFruitGenerator = fruitGenerator();
console.log(newFruitGenerator.next());    // ❶
console.log(newFruitGenerator.next());    // ❷
console.log(newFruitGenerator.next());    // ❸
// #@@range_end(list1)
