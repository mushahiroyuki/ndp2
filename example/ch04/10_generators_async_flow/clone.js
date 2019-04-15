"use strict";

// #@@range_begin(list2)
const fs = require('fs');
const path = require('path');
// #@@range_end(list2)

// #@@range_begin(list1)
function asyncFlow(generatorFunction) {
  function callback(err) {
    if (err) { 
      return generator.throw(err); 
    }
    const results = [].slice.call(arguments, 1);
    generator.next(results.length > 1 ? results : results[0]); 
  }
  const generator = generatorFunction(callback);
  generator.next(); 
}
// #@@range_end(list1)

// #@@range_begin(list3)
asyncFlow(function* (callback) {
  const fileName = path.basename(__filename);
  const myself = yield fs.readFile(fileName, 'utf8', callback);
  yield fs.writeFile(`clone_of_${fileName}`, myself, callback);
  console.log('Clone created');
});
// #@@range_end(list3)
