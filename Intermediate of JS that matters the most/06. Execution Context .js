/* Execution Context in JavaScript
   - An Execution Context is created when JavaScript starts executing code.
   - It consists of the variable object, scope chain, and the value of 'this'.
   - There are three types of execution contexts: global, function, and eval.
   - Each function call creates a new execution context.
   - Understanding execution context is crucial for managing variable scope and closures.
*/


let x = 5;
function add() {
    let y = 10; // Local variable in function's execution context
    return x + y; // Accessing global variable 'x' and local variable 'y'
}

let result = add(); // Calling the function creates a new execution context
console.log(result); // Output: 15


/*
Visual Representation of Execution Context:
Global Execution Context
|---------------------|
| x: 5               |  ← Global variable 'x'
|---------------------|
| add() function      |  ← Function declaration
|---------------------|
| this: global object |  ← 'this' refers to the global object
|---------------------|
| add() call          |  ← Function call creates a new execution context
|---------------------|
| y: 10              |  ← Local variable 'y' in function's execution context
|---------------------|
| return x + y      |  ← Accessing 'x' from global context and 'y' from local context
|---------------------|
*/
