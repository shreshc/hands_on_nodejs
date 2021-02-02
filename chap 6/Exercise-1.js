//Create an uninitialized buffer with 100 bytes length and fill it with bytes with values starting from
//0 to 99. And then print its contents.

var buff =Buffer(100);

for(var i=0;i<buff.length;i++)
{    
    buff[i]=i;
    console.log(buff[i]);
}

// output: 1 2 .... 99