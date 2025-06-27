/* Lexical Environment in JavaScript
   - A Lexical Environment is a concept that explains where variables are physically written in your code, and how JavaScript looks them up, “Lexical” means based on location in the source code. Every time you write a function or a block, a new Lexical Environment is created.
   - It consists of the variable bindings (i.e., the variables and their values) and the outer lexical environment.
   - JavaScript uses function scope and block scope (with let and const) to manage variable visibility.
   - Closures are a key feature, allowing inner functions to access outer function variables even after the outer function has executed.
   - Understanding lexical environment is crucial for avoiding variable shadowing and ensuring proper variable access.
*/


function outer() {
    let a = 10; // Variable in outer function's lexical environment
    function inner() {
        console.log(a); // Accessing variable from outer function's lexical environment
    }
    inner(); // Calling inner function, which accesses 'a'
}
outer(); // Output: 10

/*
Visual Representation of Lexical Environment:
Outer Function
|---------------------|
| a: 10              |  ← Variable 'a' in outer function's lexical environment
|---------------------|
| Inner Function      |
|---------------------|
| console.log(a);    |  ← Accessing 'a' from outer function's lexical environment
|---------------------|

- inner() is lexically inside outer(), so it can access 'a'.
- Lexical Environment is created when the function is defined, not when it is called.
*/
