// Exercise 4 - Overwrite a file
// Having a file named a.txt, Overwrite it with the UTF-8-encoded string “ABCDEFGHIJLKLMNOPQRSTU-
// VXYZ0123456789abcdefghijklmnopqrstuvxyz”.


    
var fs = require('fs');
fs.open(__dirname + '/b.txt', 'w', function(err, fd) {
    if (err) { throw err; }
    var buffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz');
    var written = 0;
    (function writeIt() {
        fs.write(fd, buffer, 0 + written, buffer.length - written, 0 + written, function(err, bytesWritten) {
            if (err) { throw err; }
            written += bytesWritten;
            if (written === buffer.length) {
                console.log('File overwrited');
            } else {
                writeIt();
            }
        });
    })();
});