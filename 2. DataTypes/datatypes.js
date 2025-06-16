/*
DataTypes :
Data types are the classification of data items. They represent the kind of value that can be stored in a variable, and they determine what operations can be performed on that data. In JavaScript, there are several built-in data types, which can be categorized into two main groups: primitive types and reference types.

undefined : In short, a variable that has been declared but has not yet been assigned a value.
null : (no value) Represents the intentional absence of any object value.
string : 'a', 'Hello', "World" Represents a sequence of characters.
number : 42, 3.14 Represents both integer and floating-point numbers.
boolean : true, false Represents a logical entity and can have two values: true and false.
object : { key: 'value' } Represents a collection of key-value pairs.
symbol : Symbol('description') Represents a unique and immutable value, often used as an identifier for object properties.
bigint : BigInt(123456789012345678901234567890) Represents integers with arbitrary precision, useful for very large numbers.


 */

// Every DataTypes basic example :
let myUndefined; // undefined
let myNull = null; // null
let myString = "Hello, World!"; // string
let myNumber = 42; // number
let myBoolean = true; // boolean
let myObject = { key: 'value' }; // object
let mySymbol = Symbol('description'); // symbol
let myBigInt = BigInt(123456789012345678901234567890); // bigint
console.log("Data Types Examples:");
console.log("Undefined:", myUndefined);
console.log("Null:", myNull);
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Object:", myObject);
console.log("Symbol:", mySymbol);
console.log("BigInt:", myBigInt);

// example of using different data types in a user object:
let user = {
    id: BigInt(123456789012345678901234567890), // bigint for large user ID
    name: "John Doe", // string for user's name
    age: 30, // number for user's age
    isActive: true, // boolean for user's active status
    preferences: null, // null for no preferences set yet
    address: { // object for user's address
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    uniqueId: Symbol('user-id') // symbol for a unique identifier
};
console.log("User Object:", user);
