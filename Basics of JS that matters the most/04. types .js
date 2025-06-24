// Types in js :
// In JavaScript, types can be broadly categorized into two main groups:
// 1. Primitive types
// 2. Reference types


// ---------------------------------------------------------------------------------------------------------


//Primitive = number, string, boolean, undefined, null, symbol, bigint . In Primitive we do not use brackets like [], (), {} to define the data type.
// Basically Primitive types means that the value is stored directly in the variable, and not in a reference and it cannot be changed by other variables that reference the same value.
// Reference = [], (), {} : Most of the time, In reference we use brackets like [], (), {} to define the data type.
// Basically Reference types means that the value is stored in a reference, and not directly in the variable and it can be changed by other variables that reference the same object.
// Reference = object, array, function, date, regex, map, set, weakmap


// ---------------------------------------------------------------------------------------------------------


// Primitive types are the most basic data types in JavaScript. They include:

// 1. Number: Represents both integer and floating-point numbers.
let num = 42;
let floatNum = 3.14; // Example of a floating-point number

// 2. String: Represents a sequence of characters, enclosed in single or double quotes.
let str = "Hello, World!";
let anotherStr = 'JavaScript is fun!'; // Another example of a string

// 3. Boolean: Represents a logical value, either true or false.
let isTrue = true;
let isFalse = false; // Another example of a boolean value

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let unassignedVar; // This variable is undefined

// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null; // This variable is explicitly set to null

// 6. Symbol: Represents a unique and immutable value, often used as object property keys.
let uniqueSymbol = Symbol('description');

// 7. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
let bigIntValue = BigInt(123456789012345678901234567890);

let a = 10;
let b = a;
b = 20;
console.log(a); // 10 → `a` is not affected

var c = [12, 13];
var d = c;
d.pop();
console.log(c); // [12] → `c` is affected, as arrays are reference types

// ---------------------------------------------------------------------------------------------------------

// Reference types are more complex data types that can hold collections of values or more complex entities. They include:

// 1. Object: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
let person = {
  name: "Alice",
  age: 30,
  isStudent: false
};

// 2. Array: A special type of object that represents an ordered collection of values.
let fruits = ["apple", "banana", "cherry"];

// 3. Function: A special type of object that can be called to perform a specific task.
function greet(name) {
  return `Hello, ${name}!`;
}
let greeting = greet("Bob"); // Calling the function


// ---------------------------------------------------------------------------------------------------------

let obj1 = { name: "Ayush" };
let obj2 = obj1;
obj2.name = "ChatGPT";
console.log(obj1.name); // "ChatGPT" → `obj1` is affected

var e = [1, 2, 3];
var f = e;
f.push(4);
console.log(e); // [1, 2, 3, 4] → `e` is affected, as arrays are reference types
