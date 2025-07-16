// Get the last element of array :
// --------------------------------------------------------------------------------------------------------------::

// Way 1: Simple Direct Code (No Function) :
let fruits = ["apple", "banana", "orange", "mango"];  // Our array of fruits
let lastElement = fruits[fruits.length - 1];          // Get last element using length-1 index
console.log("Last element is:", lastElement);         // Output: "mango"

// Why fruits.length - 1?
// Array length = 4, but indexes are 0,1,2,3
// So last index = length - 1 = 4 - 1 = 3

let numbers = [10, 20, 30, 40, 50];
let lastNumber = numbers[numbers.length - 1];
console.log("Last number is:", lastNumber);           // Output: 50


// --------------------------------------------------------------------------------------------------------------::


// Way 2: Function with Traditional Approach :
function getLastElement(array) {                      // Create function that takes an array as parameter
    return array[array.length - 1];                  // Return element at last index (length-1)
}

console.log(getLastElement(["red", "blue", "green"]));        // Expected output: "green"

/*
Step-by-step execution for ["red", "blue", "green"]:
- array = ["red", "blue", "green"]
- array.length = 3
- array.length - 1 = 3 - 1 = 2
- array[2] = "green"
- Return "green"
*/


// --------------------------------------------------------------------------------------------------------------::

// Way 3: Function with Modern Methods (ES6+ Syntax) :
function getLastElement2(array) {                     // Create function using modern array methods
    return array.at(-1);                             // .at(-1) gets the last element (negative indexing)
}

console.log(getLastElement2(["dog", "cat", "bird"]));        // Expected output: "bird"

/*
How array.at(-1) works:
- Negative indexing starts from the end
- at(-1) = last element
- at(-2) = second last element
- at(-3) = third last element, etc.
*/

// Alternative Way 3: Using slice() method
function getLastElement3(array) {                     // Another modern approach
    return array.slice(-1)[0];                       // slice(-1) gets last element as array, [0] extracts it
}

console.log(getLastElement3(["x", "y", "z"]));               // Expected output: "z"

/*
How array.slice(-1)[0] works:
- slice(-1) creates new array with just the last element: ["z"]
- [0] gets the first (and only) element from that array: "z"
*/
