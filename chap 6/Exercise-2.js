//Do what is asked on the previous exercise and then slice the buffer with bytes ranging 40 to 60. And
//then print it


var buff =Buffer(100);

for(var i=0;i<buff.length;i++)
{    
    buff[i]=i;
    
}

var slice = buff.slice(40, 60);
console.log(slice);

// output:
//Buffer(20) [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]