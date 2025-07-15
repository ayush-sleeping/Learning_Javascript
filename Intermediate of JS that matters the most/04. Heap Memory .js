// Heap Memory in JavaScript
// JavaScript uses a memory model that includes both stack and heap memory.
// Stack memory is used for static memory allocation, while heap memory is used for dynamic memory allocation.

// Stack Memory:
// - Stores function calls and local variables, (used for Primitive values, function calls etc.)
// - Follows Last In First Out (LIFO) order.
// - Limited in size, and memory is automatically managed (pushed and popped).

// Heap Memory:
// - In JavaScript, heap memory is the place where the engine stores objects, functions, and reference-type data.
// - Used for dynamic memory allocation (e.g., objects, arrays, functions).
// - Larger and more flexible than stack memory.
// - Memory management is manual (e.g., garbage collection).


// ----------------------------------------------------------


// Example of heap memory usage in JavaScript

let a = 10; // Primitive value stored in stack memory
let person = { // Object stored in heap memory
    name: "Ayush",
    age: 21,
};

function greet() {
    console.log("Hello, " + person.name); // Accessing object stored in heap memory
}
greet(); // Output: Hello, Ayush


// ----------------------------------------------------------


/*
Why Use Heap Memory?
Because:
- We don’t always know how big an object or array will be.
- JavaScript engine needs flexibility to grow/shrink memory for objects/functions at runtime.
- Heap allows non-linear, complex structures to be handled.
*/


let user1 = {
    name: "Ayush"
}
let user2 = user1; // user2 references the same object in heap memory
user2.name = "Mishra"; // Modifying user2 also modifies user1
console.log(user1.name); // Output: Mishra


let obj = {
    data: 100
};
obj = null; // Dereferencing the object, allowing garbage collection
// Note: JavaScript's garbage collector will automatically free up memory when objects are no longer referenced.
