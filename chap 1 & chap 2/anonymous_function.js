//invoke an anonymous function in-place
//myfunction within inner scopes:
function myFunction () {
    console.log('hello');
}
   
(function xyz() {
    myFunction();
    console.log('world');
})();
