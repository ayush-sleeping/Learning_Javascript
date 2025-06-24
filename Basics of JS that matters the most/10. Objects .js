// Objects in JS :
// Basically objects used for storing data in key-value pairs.
// 1. Objects are a collection of key-value pairs.
// 2. They can contain properties and methods.
// 3. Objects are mutable, meaning you can change their properties and methods after creation.
// 4. You can access object properties using dot notation or bracket notation.


// -------------------------------------------------------------------------------

// Example of an object in JavaScript:
let person = {
    name: "Ayush",
    age: 21,
    isWorking: true,
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old." + " Working as an SDE! ");
    }
}
person.greet(); // Output: Hello, my name is Ayush and I am 21 years old. Working as an SDE


// -------------------------------------------------------------------------------
// Accessing properties of an object:
console.log(person.name); // Output: "Ayush"


// -------------------------------------------------------------------------------

let student = {
    name: "Sanket",
    age: 25,
    subjects: ["Math", "Science", "History"],
    getDetails: function() {
        return `${this.name} is ${this.age} years old and studies ${this.subjects.join(", ")}.`;
    }
};
console.log(student.getDetails()); // Output: John is 20 years old and studies Math,
