//async This will schedules an event only one time. 
//That means only 1 time Hello prints after a delay of 1 second*/

var interval = 1000; // 1 second
setInterval(function() {
    async(function() {
        console.log('async is done!');
    });
}, interval);



//async function
var interval = 1000; 
(function schedule() {
    setTimeout(function() {
    async(function() {
        console.log('async is done!');
        schedule();
    });
    }, interval)
})();