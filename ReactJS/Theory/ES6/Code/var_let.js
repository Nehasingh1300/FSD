
// this prints 6 for 5 times due to var 
for(var i=1; i<+5; i++){
  setTimeout(function(){console.log(i);},1000);
}

//if you replcae var with let, It is more easy to print 1 2 3 4 5
for(let i=1; i<=5; i++){
  setTimeout(function(){console.log(i);},1000);
}
