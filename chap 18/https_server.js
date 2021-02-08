var https = require('https'),
    fs
        = require('fs');

var options = {
    key: fs.readFileSync('/home/shresh/Shresh/Examples/chap\ 17/my.pem'),
    cert: fs.readFileSync('/home/shresh/Shresh/Examples/chap\ 17/my_cert.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});