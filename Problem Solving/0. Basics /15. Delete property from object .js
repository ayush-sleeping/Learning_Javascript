// Delete Property from object :
// --------------------------------------------------------------------------------------------------------------::

const person = {
    name: "Ayush",
    age: 22,
    city: "Mumbai",
    profession: "Developer",
    email: "ayush@example.com"
};
console.log(person);

delete person.email;  // Removes 'email' property completely from object
console.log(person);

delete person["city"];  // Bracket notation deletion - removes 'city' property
console.log(person);

const propertyToDelete = "profession";  // Property name stored in variable
delete person[propertyToDelete];        // Dynamic deletion - evaluates variable first
console.log(person);
