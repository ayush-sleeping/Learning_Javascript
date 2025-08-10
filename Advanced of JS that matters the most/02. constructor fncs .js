// Constructor Function ::
/*
 * A constructor function is a special type of function
 * used to create and initialize objects.
 * It is defined using the 'function' keyword and is typically
 * named with a capitalized first letter.
 * When called with the 'new' keyword, it creates a new object
 * and sets the 'this' context within the function to that object.
 * Example:
 * function Person(name, age) {
 *   this.name = name;
 *   this.age = age;
 * }
 * const person1 = new Person("Alice", 30);
 * const person2 = new Person("Bob", 25);
 * So basically, constructor functions provide a way to create multiple instances of an object with the same properties and methods.
*/

// ------------------------------------------------------------------------------- ::

// example 1 :
function Person(name, age, city) {
    console.log("creating a new person....");

    // properties
    this.name = name;
    this.age = age;
    this.city = city;

    // method to object
    this.introduce = function () {
        return `Hi! I'm ${this.name}, I'm ${this.age} years old and I live in ${this.city}.`;
    };

    this.celebrateBirthday = function () {
        this.age = this.age + 1;
        return `Happy Birthday! ${this.name} is now ${this.age} years old!`;
    };

    console.log(`Person created: ${name}`);
}

// Create objects using the constructor
let person1 = new Person("Ayush", 22, "Mumbai");
let person2 = new Person("Shivam", 24, "Delhi");

// Use the objects
console.log("\n Meet our people:");
console.log("Person 1:", person1.introduce());
console.log("Person 2:", person2.introduce());

// each object is independent
console.log("\n Birthday celebrations:");
console.log(person1.celebrateBirthday());
console.log(person2.celebrateBirthday());

console.log("\n Updated ages:");
console.log(`${person1.name}: ${person1.age} years old`);
console.log(`${person2.name}: ${person2.age} years old`);
