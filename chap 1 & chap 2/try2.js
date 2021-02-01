function myFunction () {
    console.log('hello');
}
   
(function xyz() {
    myFunction();
    console.log('world');
})();
