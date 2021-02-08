var fs = require('fs');

fs.stat('./a.txt', function(err, stats) {
    if (err) {console.log("ERROR.....",err.message); return; }
    console.log(stats);
});
//console.log('this file is ' + stats.size + ' bytes long.');



//output
//Stats {dev: 2050, mode: 33204, nlink: 1, uid: 1000, gid: 1000, …}
