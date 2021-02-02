// Just buffer basics

var buffer = new Buffer('this is the string in my buffer');
var slice = new Buffer(10);
var targetStart = 0,
    sourceStart = 10,
    sourceEnd = 20;
buffer.copy(slice, targetStart, sourceStart, sourceEnd);
