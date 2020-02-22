//opposite of REST

let DisplayColor = function(message, ...colors){
  console.log(message);
  for (let i in colors){
    consoloe.log(colors[i]);
  }
}

let message = "List of colors";
let colorArray = ['Orange' , 'Red'];
displayColors(message, ...colorArray);
