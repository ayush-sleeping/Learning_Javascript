// First class functions :
/*
- In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This allows you to pass functions as arguments to other functions, return them from functions, and assign them to variables.
- This feature enables powerful programming paradigms such as higher-order functions, callbacks, and functional programming.
- First-class functions allow you to create more flexible and reusable code, as you can define functions that can accept other functions as parameters or return functions that can be executed later.
- This capability is a key aspect of JavaScript's functional programming style, enabling you to write concise and expressive code that can handle complex operations in a more manageable way.
- Summary : So basically, first-class functions in JavaScript allow you to treat functions as values, enabling you to pass them around, return them from other functions, and store them in variables. This flexibility is a fundamental aspect of JavaScript's design and is essential for writing effective and modular code.
*/

// -----------------------------------------------::


// var a = function(){};
function abcd(a){
    a()
}
abcd(function(){console.log("Hey")});


// -----------------------------------------------::


// Basic Example :
console.log("Basic Example :");

// Treating function like a variable :
const sayHii = function() {
    return "Hii";
};

// Assigning the function to a variable :
const greet = sayHii; // Assigning the function to a variable
console.log(sayHii()); // Output: Hii
console.log(greet()); // Output: Hii

// Passing functions as arguments :
function executeFunction(fn) {
    console.log("Executing function:", fn());
}
executeFunction(sayHii); // Output: Executing function: Hii

// storing functions in an array :
const functionArray = [sayHii, greet];
functionArray[0](); // Output: Hii


// -----------------------------------------------::
