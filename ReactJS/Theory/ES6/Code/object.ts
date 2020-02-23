let firstname = "Neha"
let lastname = "Singh"

let person = {   // object
	firstname,  // here typescript save the value firstname in method firstname and same for lastname
	lastname   //  method
};

console.log(person.firstname);
console.log(person.lastname);

function createPerson(firstname,lastname) = {   //function
	let fullname = firstname + "" + lastname;
	return {firstname,lastname,fullname}
}

let p = createPerson("Nidhi","Singh");          // function object
console.log(p.firstname);                       
console.log(p.lastname);
console.log(p.pfullname);

