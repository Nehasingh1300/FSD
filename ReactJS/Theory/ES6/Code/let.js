//let has block scope
//this does not work
function greetPerson(name){
  if(name == Chandler){
    let greet  = "Hello Chandler";
  }else{
    let greet = "Hi There!";
  }
  console.log(greet);       //ERROR
}
greetPerson("Chandler");


//TRY THIS
function greetPerson(name){
  let greet;
  if(name == Chandler){
    greet  = "Hello Chandler";
  }else{
    greet = "Hi There!";
  }
  console.log(greet);
}
greetPerson("Chandler");
