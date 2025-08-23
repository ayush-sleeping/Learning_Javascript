/*
Functions and Hoisting ::
--------------------------------------------------------------------- ::

What are Functions?
- Functions are reusable blocks of code that perform a specific task.
- They help organize code, avoid repetition, and make programs modular.
- You can define a function, pass arguments to it, and return a value.

*/

// Example:
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Ayush")); // Output: Hello, Ayush!

/*
What is Hoisting?
- Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (before code execution).
- Function and variable declarations are "hoisted" (moved up), but only the declarations, not initializations.
- This means you can use some functions and variables before they are declared in the code.
*/

// Example:
console.log(x); // Output: undefined
var x = 5;

foo(); // Output: "Hoisted!"
function foo() {
    console.log("Hoisted!");
}

/*
What is Function Hoisting?
- Function declarations are fully hoisted: you can call them before their definition.
- Function expressions and arrow functions are NOT hoisted: you must define them before use.
*/

// Example:
bar(); // Error: bar is not a function
var bar = function () { console.log("Not hoisted!"); };

/*
Summary:
- Functions = reusable code blocks.
- Hoisting = moving declarations to the top.
- Function hoisting = only function declarations are hoisted, not expressions.



Subtopics
- Functions
- Function Arguments
- Scope and Environment
- Variable Hoisting
- Function Hoisting
- Function Declaration vs Function Expression
- Arrow Functions
- Anonymous Functions
- Callback Functions
- Higher-Order Functions
- Default Parameters
- Rest Parameters (...args)
- Arguments Object
- Closures
- Lexical Scope
- IIFE (Immediately Invoked Function Expression)
- Hoisting: What gets hoisted, and how (var, let, const, functions)
- Temporal Dead Zone (TDZ)
- Function Scope vs Block Scope
- Named vs Anonymous Functions
- Pure vs Impure Functions
- Recursion
*/
