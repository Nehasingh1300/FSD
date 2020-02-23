let firstname = "Neha"
let lastname = "Singh"

let person = {   // object
	firstname,  // here typescript save the value firstname in method firstname and same for lastname
	lastname   //  method
};

console.log(person.firstname);
console.log(person.lastname);

function createPerson(firstname,lastname,age) = {   //function
	let fullname = firstname + "" + lastname;
	return {firstname,
		lastname,
		fullname
		isSenior(){          // That's cool how in return statement you have function
			return age>60;
		}}
}

let p = createPerson("Nidhi","Singh",60);          // function object
console.log(p.firstname);                       
console.log(p.lastname);
console.log(p.pfullname);

