require('http').createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.write(req.url);
res.end();
}).listen(4000);