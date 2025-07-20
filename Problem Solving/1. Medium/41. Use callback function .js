// use callback function  :
// --------------------------------------------------------------------------------------------------------------::

function greetUser(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}
function displayMessage(msg) {
    console.log(msg);
}
greetUser("Ayush", displayMessage);
greetUser("Ayush", (msg) => console.log(`Arrow: ${msg}`));

/*
EXPLANATION - BASIC CALLBACK:
- A callback is a function passed as an argument to another function
- The receiving function can then "call back" (invoke) the passed function
- Basic pattern: function(data, callback) { callback(processedData) }
- greetUser() takes a name and a callback function
- It creates a message and passes it to the callback
- We can pass different callbacks: named function or arrow function
- This shows how one function can have different behaviors based on the callback

*/


// ------------------------------------------------------------------------------------
function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i));
    }
    return result;
}

function double(num) {
    return num * 2;
}
const numbers = [1, 2, 3, 4, 5];
console.log("Doubled:", processArray(numbers, double));

function square(num) {
    return num * num;
}
const numbers2 = [1, 2, 3, 4, 5];
console.log("Squared:", processArray(numbers2, square));

/*
EXPLANATION - ARRAY PROCESSING WITH CALLBACKS:
- processArray() is a generic function that works with any transformation
- It loops through array and applies callback to each element
- Callback receives both value and index for maximum flexibility
- One function, multiple behaviors based on the callback passed
- This mimics how built-in methods like map(), filter(), forEach() work
- Shows how callbacks promote code reusability and modularity

*/


// ------------------------------------------------------------------------------------
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

function applyOperation(arr, operationCreator, factor) {
    const operation = operationCreator(factor);
    return arr.map(operation);
}

const nums = [1, 2, 3, 4, 5];
console.log("Multiply by 3:", applyOperation(nums, createMultiplier, 3));

/*
HIGHER-ORDER FUNCTIONS:
- createMultiplier() is a function that returns another function
- It creates specialized callback functions on demand
- applyOperation() uses the callback creator to generate specific operations
- This shows advanced functional programming concepts
- Demonstrates closure - inner function remembers the 'factor' variable
- Pattern used in libraries like Lodash, Ramda for function composition


OVERALL CALLBACK imp using AI ::
🎯 "Callbacks are the foundation of JavaScript's async nature"
🎯 "They enable event-driven programming and functional programming"
🎯 "Common in: event listeners, array methods, API calls, timers"
🎯 "Evolution: Callbacks → Promises → Async/Await"
🎯 "Key to understanding how JavaScript engines work under the hood"
*/
