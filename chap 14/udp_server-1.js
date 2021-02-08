var dgram = require('dgram');

var server = dgram.createSocket('udp4');
server.on('message', function (message, rinfo) {
    console.log('server got message: ' + message + ' from ' + rinfo.address +
        ':' + rinfo.port);
});

server.on('listening', function () {
    var address = server.address();
    console.log('server listening on ' + address.address + ':' + address.port
    );
});

server.bind(4000);

// HOW to run..
//node udp_server-1.js (in 1st terminal)

//echo 'hello' | netcat -u -w 1 localhost 4000 (in 2nd terminal)
//it will print hello at  server-1