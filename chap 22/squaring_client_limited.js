var async = require('async');
var request = require('request');

var collection = [];

for (var i = 0; i
}
collection.push(i);

var maxConcurrency = 5;

function iterator(element, next) {
request({ uri: 'http://localhost:4001/',
body: element.toString() },
function(err, res, body) {
console.log('square of %d is %d', element, body);
next(err);
});
}

function callback() {
console.log('finished');
}

async.forEachLimit(collection, maxConcurrency, iterator, callback);