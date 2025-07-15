// Three ways to define variables in JavaScript ::
// 1. var
var name ="John"; // can be re-declared and updated
console.log(name);
// Not recommended for modern JavaScript due to its function scope and hoisting behavior



// 2. let
let age = 22; // can be updated but not re-declared in the same scope
console.log(age);
// Recommended for block scope variables, preventing issues with variable hoisting


// 3. const
const pi = 3.14; // cannot be updated or re-declared
console.log(pi);
// Recommended for constants, ensuring values remain unchanged throughout the code
