//  we can access the properties of array individually

let employee = ["Neha", "Singh", "Female"];
let [fname , lname, gender] = employee;
console.log(fname);
console.log(lname);
console.log(gender);

// when value are not defianed then the **undefined** is used as default
// we can use REST Opertor for destructuring of objects it will assign the not assigned value in array and then aaccess them
// we can also use default values


//destructuring objects

let employe = {
	fname: "Neha",
	lname : "Singh",
	gender : "Female"
};

let {fname : f , lname : l, gender : g} = employe; // we have created alias here so we have to use alias we can not use other variables
 
console.log(f);
console.log(l);
console.log(g);
