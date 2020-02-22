// with const you cannot assign new value to object rather you can reassign vale to property of object

let num = 1;
const num2 =2;
const obj1 ={
  name : "Neha"
};
console.log(obj1.name);
obj1.name = "NehaSingh";
console.log(obj1.name)
