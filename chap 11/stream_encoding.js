var readStream = readStream.on('data', function (data) {
        // data is a buffer;
    });

var readStream = readStream.setEncoding('utf8');
readStream.on('data', function (data) {
    // data is a UTF-8-encoded string;
});