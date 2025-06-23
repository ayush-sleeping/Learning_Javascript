// var const let :


// Variable and Constant :
// In JavaScript, variables and constants are used to store data values. The way you declare them can affect their scope and mutability, ( Variable is a named storage for data that can change, while a constant is a named storage for data that cannot change after it has been assigned ).


// Example of variable and constant declarations in JavaScript
var a = 10;      // 'var' keyword
let b = 20;      // 'let' keyword
const c = 30;    // 'const' keyword

console.log(a);  // Outputs: 10
console.log(b);  // Outputs: 20
console.log(c);  // Outputs: 30


// "var", "const", and "let" are all keywords in JavaScript used for variable, declaration, but they have different scopes and behaviors:


// 1. var:
// - Function-scoped or globally scoped.
// - Can be re-declared and updated.
// - Hoisted to the top of the function or global scope, meaning it can be used before its declaration (though it will be undefined until the declaration is reached).
// - Example:
var x = 5;
function exampleVar() {
    console.log(x); // Outputs: 5 (due to hoisting)
    var x = 10; // x is hoisted, but this line is executed after the console.log
    console.log(x); // Outputs: 10
}
exampleVar();


// 2. let:
// - Block-scoped, meaning it is only accessible within the block it is defined in (e.g., within a loop or an if statement).
// - Cannot be re-declared in the same scope, but can be updated.
// - Not hoisted in the same way as var; accessing it before its declaration will result in a ReferenceError.
// - Example:
let y = 5;
function exampleLet() {
    console.log(y); // Outputs: 5
    let y = 10; // y is block-scoped, so this line creates a new y in this block
    console.log(y); // Outputs: 10
}
exampleLet();


// 3. const:
// - Block-scoped, similar to let.
// - Cannot be re-declared or updated; must be initialized at the time of declaration.
// - Used for constants, meaning the value cannot be changed after it is set.
// - Example:
const z = 5;
function exampleConst() {
    console.log(z); // Outputs: 5
    // z = 10; // This would throw an error because z is a constant
}
exampleConst();
