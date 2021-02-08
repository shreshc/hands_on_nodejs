//Idle sockets
socket.setTimeout(60000, function() {
    socket.end('idle timeout, disconnecting, bye!');
});



//Keep-alive
socket.keepAlive(true, 10000);


//Delay or no delay
socket.setNoDelay(true);


//Listening
server.listen(port, host, function() {
    console.log('server listening on port ' + port);
});


// Then you can listen for data:
conn.on('data', function(data) {
console.log('some data has arrived')
});


//send some data:
conn.write('some string over to you!');

// close it:
conn.close();

// also listen to the “close” event:
conn.on('close', function() {
console.log('connection closed');
});
