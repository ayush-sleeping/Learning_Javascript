// Add property to object :
// --------------------------------------------------------------------------------------------------------------::

const person = {
    name: "Ayush",
    age: 22
};
console.log(person);

// Method 1: Dot notation
person.city = "Mumbai";  // creates new property 'city' on person object and assigns value
console.log(person);     // person = { name: "Ayush", age: 22, city: "Mumbai" }

// Method 2: Bracket notation
person["country"] = "India";  // looks up string "country" as property name and creates it
console.log(person);          // person = { name: "Ayush", age: 22, city: "Mumbai", country: "India" }

// Method 3: Dynamic property addition - property name stored in variable
const propertyName = "profession";
person[propertyName] = "Software Developer";
console.log(person);

// Method 4: Object.assign() - adds multiple properties at once
Object.assign(person, {
    email: "ayush@example.com",
    phone: "1234567890"
});
console.log(person);

// Method 5: Computed property name - key and value both from variables
const key = "experience";
const value = "1 years";
person[key] = value;
console.log(person);
