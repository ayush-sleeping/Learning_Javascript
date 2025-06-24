// Loops in js :
// Basically loops are used to execute a block of code repeatedly until a specified condition is met.
// for, while, do while, forin, forof, for await of
// ----------------------------------------------------------

// for :
// The for loop is used when the number of iterations is known beforehand.
// for (initialization; condition; increment/decrement) {
//    code to be executed in each iteration
// }

// Example of for loop:
for (let i = 0; i < 5; i++){
    console.log("Iteration number:" + i); //Output: Iteration number:0, Iteration number:1, Iteration number:2, Iteration number:3, Iteration number:4
}

let sum = 0;
for (let a = 1; a <= 9; a++) {
    sum += a; // Add the current value of 'a'
}
console.log("Sum of numbers from 1 to 9 is: " + sum); // Output: 45


let numbers = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]; // Add each number to the total
}
console.log("Total of array elements is: " + total); // Output: 150


let students = [
    { name: "Ayush", score: 85 },
    { name: "Shivam", score: 92 },
    { name: "Dhanush", score: 78 }
];
// who scored most marks:
let highestScorer = students[0]; // Assume the first student has the highest score initially
for (let i = 1; i < students.length; i++){
    if (students[i].score > highestScorer.score){
        highestScorer = students[i]; // Update highestScorer if current student has a higher score
    }
}
console.log("Highest scorer is: " + highestScorer.name + " with score: " + highestScorer.score);
// Output: Highest scorer is: Shivam with score: 92


// ----------------------------------------------------------


// while :
// The while loop is used when the number of iterations is not known beforehand.
// while (condition) {
//    code to be executed as long as the condition is true
// }

// Example of while loop:
let count = 0;
while (count < 5){
    console.log("Count is " + count);
    count++; // Increment count by 1
}
// Output: Count is 0, Count is 1, Count is 2, Count is 3, Count is 4


let attempts = 0;
let maxAttempts = 3;
let correctPassword = "Ayush123";

const userInput = ["ayush", "ayush123", "Ayush123"];
let password;

while (attempts < maxAttempts) {
    password = userInput[attempts];
    if (password === correctPassword){
        console.log("Access granted!");
        break; // Exit the loop if the password is correct
    } else {
        console.log("Incorrect password. Try again.");
    }
    attempts++; // Increment attempts by 1
}
if (attempts === maxAttempts && password !== correctPassword) {
    console.log("Access denied. Too many attempts.");
}
// Output: Incorrect password. Try again. (for first two attempts), Access granted! (


// ----------------------------------------------------------


// Do while :
// The do while loop is similar to the while loop, but it guarantees that the code block will be executed at least once.
// do {
//    code to be executed at least once, then repeat while condition is true
// } while (condition);

// Example of do while loop:
let x = 0;
do {
    console.log("Value of x is : " + x);
    x++; // Increment x by 1
}
while (x < 3);
// Output: Value of x is : 0, Value of x is : 1, Value of x is : 2



const actions = ["View Profile", "Edit Profile", "Logout"];
let selectedAction = 0;
let userChoice;

do {
    const action = actions[selectedAction];
    console.log("Action: " + action);

    userChoice = action !== "Logout";
    selectedAction++;
} while (userChoice);
// Output: Action: View Profile, Action: Edit Profile, Action: Logout



let currentPage = 1;
let totalPages = 5;
let allResults = [];

do {
    const results = [`Item from page ${currentPage}-1`, `Item from page ${currentPage}-2`];
    console.log(`Fetched page ${currentPage} results:`, results);

    allResults = allResults.concat(results);
    currentPage++;
} while (currentPage <= totalPages);
console.log("All results fetched:", allResults);
// Output:
// Fetched page 1 results: [ 'Item from page 1-1', 'Item from page 1-2' ]
// Fetched page 2 results: [ 'Item from page 2-1', 'Item from page 2-2' ]
// Fetched page 3 results: [ 'Item from page 3-1', 'Item from page 3-2' ]
// Fetched page 4 results: [ 'Item from page 4-1', 'Item from page 4-2' ]
// Fetched page 5 results: [ 'Item from page 5-1', 'Item from page 5-2' ]
// All results fetched:
// [ 'Item from page 1-1', 'Item from page 1-2',
//   'Item from page 2-1', 'Item from page 2-2',
//   'Item from page 3-1', 'Item from page 3-2',
//   'Item from page 4-1', 'Item from page 4-2',
//   'Item from page 5-1', 'Item from page 5-2' ]



let attempt = 0;
const maxRetries = 5;
let success = false;

do {
    attempt++;
    success = Math.random() > 0.7; // Simulate a success condition with a random chance
    console.log(`Attempt ${attempt}: ${success ? "Success" : "Failure, retrying..."}`);

    if (!success){
        // Simulate a wait time before the next attempt
        const waitTime = Math.pow(2, attempt) * 100;
        const start = Date.now();
        while (Date.now() - start < waitTime){
            // Busy-waiting to simulate delay
        }
    }
} while (!success && attempt < maxRetries);
if (success){
    console.log("Operation succeeded after " + attempt + " attempts.");
}
else {
    console.log("Operation failed after " + maxRetries + " attempts.");
}
// Output: Attempt 1: Failure, retrying... (and so on until success or max retries reached)
// Operation succeeded after X attempts. (or Operation failed after 5 attempts.)


// ----------------------------------------------------------


// forin :
// The for...in loop is used to iterate over the properties of an object.
// for (variable in object) {
//    code to be executed for each property
// }

// forof :
// The for...of loop is used to iterate over iterable objects like arrays, strings, and other collections.
// for (variable of iterable) {
//    code to be executed for each element
// }

// for await of :
// The for await...of loop is used to iterate over asynchronous iterables, allowing you to work with promises in a loop.
// for await (variable of asyncIterable) {
//    code to be executed for each resolved value
// }
