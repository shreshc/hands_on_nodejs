var tls = require('tls'),
    fs = require('fs'),
    port = 3000,
    host = 'myhost.com',
    options = {
        key: fs.readFileSync('./my.pem'),
        cert: fs.readFileSync('./my_cert.pem')
    };

var client = tls.connect(port, host, options, function () {
    console.log('connected');
    console.log('authorized: ' + client.authorized);
    client.on('data', function (data) {
        client.write(data); // just send data back to server
    });
}); 