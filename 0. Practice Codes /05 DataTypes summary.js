// DataTypes summary ::

// PrimitiveType (call by value) ::
// 7 types: 
//   1. String   (immutable - a sequence of characters)
//     - Example:
const name = "John";
const greeting = "Hello";
console.log(greeting + " " + name);

//   2. Number  (integer or float)
//     - Example:
const intValue = 100;
const floatValue = 100.3;
console.log(intValue / floatValue);

//   3. Boolean  (true or false)
//     - Example:
const isStudent = true;
const isWorking = false;
console.log(`Student: ${isStudent}, Working: ${isWorking}`);

//   4. Null     (intentional absence of any object value)
//     - Example:
const account = null;
console.log(account);

//   5. Undefined (variable has not been assigned a value)
//     - Example:
let age;
console.log(age);

//   6. Symbol   (unique and immutable primitive values) 
//     - Example:
const id = Symbol('123');
const aotherId = Symbol('123');
console.log(id === aotherId); // false - Symbols are unique and immutable 

//   7. BigInt   (arbitrary-precision integers)
//     - Example:
const bigNumber = 2345678901234567890n;
console.log(typeof bigNumber);

// Reference (Non Primitive) ::
// 1. Array (indexed, ordered, and mutable collection of values)
//     - Example:
const heros = ["Shaktiman", "Doga"];
heros.push("Bob the Builder");
console.log(heros);

// 2. Objects (collections of key-value paired properties)
//     - Example:
let myIntro = {
  name: "Ayush",
  age: 20,
};
console.log(myIntro);

// 3. Functions (special type of object that can be invoked)
//     - Example:
const greet = function (message) {
  console.log(message);
};

greet("Hello, World!");