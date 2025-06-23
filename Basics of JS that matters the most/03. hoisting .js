// Hoisting :
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code, but there are some nuances to be aware of.

// Difference between undefined and not defined in JavaScript:
// - `undefined`: This means that a variable has been declared but has not been assigned a value. It is a type in JavaScript and can be explicitly assigned to a variable.
// - `not defined`: This means that a variable has not been declared at all. If you try to access a variable that has not been declared, JavaScript will throw a ReferenceError indicating that the variable is not defined.

// Three examples of Hoisting (Basic, Medium, Advanced):


// Basic :
console.log(myVar); // Outputs: undefined (due to hoisting)
var myVar = 5; // Variable declaration is hoisted, but assignment is not
console.log(myVar); // Outputs: 5


// Medium :
function myFunction() {
    console.log(myVar); // Outputs: undefined (due to hoisting)
    var myVar = 10; // Variable declaration is hoisted, but assignment is not
    console.log(myVar); // Outputs: 10
}
myFunction();


// Advanced (Real world used example) :
function calculateArea(radius) {
    console.log(area); // Outputs: undefined (due to hoisting)
    var area = Math.PI * radius * radius; // Variable declaration is hoisted, but assignment is not
    console.log(area); // Outputs the calculated area
}
calculateArea(5); // Outputs: 78.53981633974483 (the area of a circle with radius 5)


// Now exactly where we should use Hoisting in real world projects ?
// In real-world projects, hoisting is often used in function declarations, where you can call a function before it is defined in the code. This is particularly useful for organizing code and improving readability. For example:


// Basic :
function greet() {
    console.log("Hello, World!");
}
greet(); // Outputs: Hello, World! (function can be called before its declaration)


// Medium :
function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(5, 10)); // Outputs: 15 (function can be called before its declaration)


// Advanced (Real world used example) :
function fetchData() {
    console.log(data); // Outputs: undefined (due to hoisting)
    var data = "User Data"; // Variable declaration is hoisted, but assignment is not
    console.log(data); // Outputs: Fetched Data
}
fetchData(); // Outputs: Fetched Data (function can be called before its declaration)
