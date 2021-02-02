//Do what is asked on exercise 1 and then copy bytes ranging 40 to 60 into a new buffer. And then
//print it.

var buff =Buffer(100);

for(var i=0;i<buff.length;i++)
{    
    buff[i]=i;
    
}

var slice = buff.slice(40, 60);
//buffer.copy(slice, targetStart, sourceStart, sourceEnd);  
var coppyslice= buff.copy(slice, 0, 40, 60);;
console.log("This is coppied slice",coppyslice);


