function Display(x) { 
    console.log(" x = ",x);
}

Display(100);(function() {
    console.log('hello');
    })();(function() {
        console.log('hello');
        })();

