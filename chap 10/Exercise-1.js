// Exercise 1
// Make an HTTP server that serves files. The file path is provided in the URL like this: http://localhost:4000/path/to/my



var fs = require('fs'),
    http = require('http');

    http.createServer(function (req, res) {
        fs.readFile(__dirname + req.url, function (err,data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }).listen(4001);

//http://localhost:4001/my/