// just understanding basics

var EventEmitter = require('events').EventEmitter,
util= require('util');

// Here is the MyClass constructor:
var MyClass = function(option1, option2) {
this.option1 = option1;
this.option2 = option2;
}
util.inherits(MyClass, EventEmitter);