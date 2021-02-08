// appender
var fs = require('fs');
var startAppender = function(fd, startPos) {
    var pos = startPos;
    return {
    append: function(buffer, callback) {
        var oldPos = pos;
        pos += buffer.length;
    fs.write(fd, buffer, 0, buffer.length, oldPos, callback);
    }
};
};