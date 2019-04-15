"use strict";

// #@@range_begin(list1)
const path = require('path');
const utilities = require('./utilities');

const request = utilities.promisify(require('request'));
const fs = require('fs');
const mkdirp = utilities.promisify(require('mkdirp'));
const readFile = utilities.promisify(fs.readFile);
const writeFile = utilities.promisify(fs.writeFile);
// #@@range_end(list1)

// #@@range_begin(list4)
function spiderLinks(currentUrl, body, nesting) {
  let promise = Promise.resolve();
  if(nesting === 0) {
    return promise;
  }
  const links = utilities.getPageLinks(currentUrl, body);
  links.forEach(link => {
    promise = promise.then(() => spider(link, nesting - 1));
  });
  
  return promise;
}
// #@@range_end(list4)

// #@@range_begin(list5)
function download(url, filename) {
  console.log(`Downloading ${url}`);
  let body;
  return request(url)
    .then(response => {
      body = response.body;
      return mkdirp(path.dirname(filename));
    })
    .then(() => writeFile(filename, body))
    .then(() => {
      console.log(`Downloaded and saved: ${url}`);
      return body;
    })
  ;
}
// #@@range_end(list5)

// #@@range_begin(list2)
function spider(url, nesting) {
  let filename = utilities.urlToFilename(url);
  return readFile(filename, 'utf8')
    .then(
      (body) => (spiderLinks(url, body, nesting)),
      (err) => {
        if(err.code !== 'ENOENT') {
          throw err;
        }
        
        return download(url, filename)
          .then(body => spiderLinks(url, body, nesting))
        ;
      }
    );
}
// #@@range_end(list2)

// #@@range_begin(list3)
spider(process.argv[2], 1)
  .then(() => console.log('Download complete')) // ダウンロード完了
  .catch(err => console.log(err));
// #@@range_end(list3)
