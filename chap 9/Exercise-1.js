// get the size of a file
// Having a file named a.txt, print the size of that files in bytes.

//module.exports = function(){
    
    var fs = require('fs');

    fs.stat('./a.txt', function(err, stats) {
    if (err) {console.log("ERROR..",err.message); return; }
        console.log('"a.txt" file is ' + stats.size + ' bytes long.');
    });
//};