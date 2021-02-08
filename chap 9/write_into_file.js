var fs = require('fs');

fs.open('./a.txt', 'a', function(err, fd) {
var writeBuffer = new Buffer('writing this string'),
    bufferOffset = 0,
    bufferLength = writeBuffer.length,
    filePosition = null;

fs.write(
    fd,
    writeBuffer,
    bufferOffset,
    bufferLength,
    filePosition,
    function(err, written) {
        if (err) { throw err; console.log("ERROR.....");  }
    console.log('wrote ' + written + ' bytes');
    }
);
});