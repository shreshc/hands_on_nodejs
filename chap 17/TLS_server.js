var tls = require('tls');
fs = require('fs');
options = {
    key: fs.readFileSync('./my.pem'),
    cert: fs.readFileSync('./my_cert.pem')
};

tls.createServer(options, function (s) {
    s.pipe(s);
}).listen(4000);