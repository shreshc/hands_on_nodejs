// Exercise 2 - read a chunk from a file
// Having a file named a.txt, print bytes 10 to 14.

var fs = require('fs');
    fs.open('./a.txt', 'r', function(err, fd) {
        if (err) { throw err }
        var readBuffer = new Buffer(5),
        bufferOffset = 0,
        bufferLength = readBuffer.length,
        filePosition = 9;
        fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes) {
            if (err) { throw err; }
            console.log('\njust read ' + readBytes + ' bytes\n');
            if (readBytes > 0) {
                console.log(readBuffer.slice(0, readBytes).toString());
            }
        });
    });