// push, pop, shift, unshift, splice in js:
// These are methods used to manipulate arrays in JavaScript.
// They allow you to add or remove elements from the beginning or end of an array.
// push: Adds one or more elements to the end of an array.
// pop: Removes the last element from an array and returns it.
// shift: Removes the first element from an array and returns it.
// unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
// splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// -------------------------------------------------------------------------------


// Example of push, pop, shift, unshift:
let numbers = [1, 2, 3];
console.log(numbers); // Output: [1, 2, 3]


// -------------------------------------------------------------------------------


numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]


// -------------------------------------------------------------------------------


let lastNumber = numbers.pop();
console.log(lastNumber); // Output: 4
console.log(numbers); // Output: [1, 2, 3]


// -------------------------------------------------------------------------------


numbers.shift();
console.log(numbers); // Output: [2, 3]


// -------------------------------------------------------------------------------


numbers.unshift(0);
console.log(numbers); // Output: [0, 2, 3]



// -------------------------------------------------------------------------------

// splice example:
numbers.splice(1, 2); // Removes the element at index 1
console.log(numbers); // Output: [0]
