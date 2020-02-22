// It takes parameter as array and and use it like that only whenever called

let DisplayColor = function(){
  console.log(message);
  for (let i in arguments){
    consoloe.log(arguments[i]);
  }
}

let message = "List of colors";
DisplayColor(message,"Red");
DisplayColor(message,"Red","Blue");
