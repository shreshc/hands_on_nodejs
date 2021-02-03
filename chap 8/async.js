//async

var interval = 1000; // 1 second
setInterval(function() {
    async(function() {
        console.log('async is done!');
    });
}, interval);