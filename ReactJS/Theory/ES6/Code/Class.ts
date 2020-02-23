class Person{
	constructor(name){               // constructor method called during object creation
		this.name = name;
		console.log(this.name +" constructor");
	}

	static StaticMethod(){          // static method which can be called directly with class not object
		console.log("StaticMethod");
	}

	greetPerson(){                  // called with each object
		console.log("Hello " + this.name);
	}
}

let p = new Person("Neha");
Person.StaticMethod();
p.greetPerson();
