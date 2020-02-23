//we can use variable name property in object
let ln = "last name";

// in ts we can have space in object properties
let person = {
        "first name" : "Neha",
        [ln] : "Singh"
};
console.log(person["first name"]);
console.log(person);    // prints full object

