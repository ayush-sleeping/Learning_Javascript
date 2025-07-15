// Stack in JavaScript
// A stack is a data structure that follows the Last In First Out (LIFO) principle.
// JavaScript does not have a built-in Stack class, but you can easily implement a stack using an Array
// The last element added to the stack is the first one to be removed.

// Basic operations of a stack include:
// 1. push: Add an element to the top of the stack.
// 2. pop: Remove the top element from the stack.
// 3. peek or top: Get the top element of the stack without removing it.
// 4. isEmpty: Check if the stack is empty.


// ----------------------------------------------------------


// Example of a simple stack implementation using an array
let stack = []; // Initialize an empty stack

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("After pushing:", stack); // Output: [10, 20, 30]

// Popping elements from the stack
let popped = stack.pop();
console.log("Popped element:", popped); // Output: 30
console.log("Stack after pop:", stack); // Output: [10, 20]

// Peek at the top element of the stack
let top = stack[stack.length - 1];
console.log("Top element:", top); // Output: 20

// Check if the stack is empty
console.log("Is stack empty?", stack.length === 0); // Output: false

/*
Visual Representation :
Stack (Top ↓)

| 30 |  ← Pushed last, removed first
| 20 |
| 10 |  ← First pushed

Stack = last added is first removed (LIFO).
push() adds to top.
pop() removes from top.
*/


// Stack is used wherever you need to remember the history of operations, and reverse or replay actions.


// ----------------------------------------------------------


let undoStack = []; // Stack for undo operations
let redoStack = []; // Stack for redo operations
let content = ""; // Current content

function type(newText) {
    undoStack.push(content); // Save current content to undo stack
    content += newText; // Update content
    redoStack = []; // Clear redo stack after new action
}

function undo() {
    if (undoStack.length > 0) {
        redoStack.push(content);
        content = undoStack.pop(); // Restore last content from undo stack
    } else {
        console.log("Nothing to undo");
    }
}

function redo() {
    if (redoStack.length > 0) {
        undoStack.push(content);
        content = redoStack.pop(); // Restore last content from redo stack
    } else {
        console.log("Nothing to redo");
    }
}

// Usage :
type("Hello");
type(" World");
console.log("Typed", content); // Output: "Hello World"

undo();
console.log("After undo:", content); // Output: "Hello"

redo();
console.log("After redo:", content); // Output: "Hello World"
