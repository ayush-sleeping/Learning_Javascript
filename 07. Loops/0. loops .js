/*
LOOPS IN JAVASCRIPT
Loops repeat code multiple times automatically.
Think: "Do this 10 times" or "Do this for each item"

Types of Loops:
1. for loop - When you know how many times
2. while loop - While condition is true
3. do...while loop - At least once, then while true
4. for...in loop - For object properties
5. for...of loop - For array elements
*/



// example 1. FOR LOOP - Most Common
// Best when you know exact number of repetitions

// Basic counting
console.log("Count 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// Multiplication table
console.log("\nMultiplication table of 3:");
for (let i = 1; i <= 5; i++) {
    console.log("3 x " + i + " = " + (3 * i));
}

// Array processing
let fruits = ["apple", "banana", "orange"];
console.log("\nFruits list:");
for (let i = 0; i < fruits.length; i++) {
    console.log((i + 1) + ". " + fruits[i]);
}




console.log("------------------------------------------- ::");
// example  2. WHILE LOOP - Condition Based
// Runs while condition is true

// Count down
let countdown = 5;
console.log("Countdown:");
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Blast off!");

// User input simulation
let attempts = 0;
let maxAttempts = 3;
let correctPassword = "123";
let userInput = "wrong";

console.log("\nPassword attempts:");
while (userInput !== correctPassword && attempts < maxAttempts) {
    attempts++;
    console.log("Attempt " + attempts + ": Wrong password");
    if (attempts === 2) userInput = "123"; // Simulate correct on 2nd try
}

if (userInput === correctPassword) {
    console.log("Access granted!");
} else {
    console.log("Account locked");
}





console.log("------------------------------------------- ::");
// example  3. FOR...OF LOOP - Array Elements
// Easy way to loop through arrays

let colors = ["red", "green", "blue"];
console.log("Colors:");
for (let color of colors) {
    console.log("Color:", color);
}

// Sum array elements
let numbers = [10, 20, 30, 40];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Numbers:", numbers);
console.log("Sum:", sum);





console.log("------------------------------------------- ::");
// example  4. FOR...IN LOOP - Object Properties
// Loop through object keys

let student = {
    name: "John",
    age: 20,
    grade: "A",
    city: "NYC"
};

console.log("Student info:");
for (let key in student) {
    console.log(key + ":", student[key]);
}





console.log("------------------------------------------- ::");
// example  5. PRACTICAL EXAMPLES

// Ex1: Find largest number
let scores = [85, 92, 78, 96, 88];
let highest = 0;

for (let score of scores) {
    if (score > highest) {
        highest = score;
    }
}
console.log("Scores:", scores);
console.log("Highest score:", highest);

// Ex2: Shopping cart total
let cart = [
    { item: "Laptop", price: 999 },
    { item: "Mouse", price: 25 },
    { item: "Keyboard", price: 75 }
];

let total = 0;
console.log("\nShopping Cart:");
for (let product of cart) {
    console.log(product.item + ": $" + product.price);
    total += product.price;
}
console.log("Total: $" + total);

// Ex3: Even numbers
console.log("\nEven numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Ex4: Search in array
let names = ["Alice", "Bob", "Charlie", "David"];
let searchName = "Charlie";
let found = false;

for (let i = 0; i < names.length; i++) {
    if (names[i] === searchName) {
        console.log("Found " + searchName + " at position " + i);
        found = true;
        break; // Stop searching
    }
}

if (!found) {
    console.log(searchName + " not found");
}


console.log("------------------------------------------- ::");
// example  6. LOOP CONTROL

// Break - Stop loop
console.log("Break example (stop at 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking at", i);
        break;
    }
    console.log("Number:", i);
}

// Continue - Skip current iteration
console.log("\nContinue example (skip 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping", i);
        continue;
    }
    console.log("Number:", i);
}


console.log("------------------------------------------- ::");
// example  7. NESTED LOOPS

// Multiplication table
console.log("2x3 grid:");
for (let row = 1; row <= 2; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += "[" + row + "," + col + "] ";
    }
    console.log(line);
}

// Pattern printing
console.log("\nStar pattern:");
for (let i = 1; i <= 3; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}
