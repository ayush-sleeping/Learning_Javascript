// Problem 1 : Print "Hello World".
console.log("Hellow JavaScript!");


console.log("------------------------------------ ::");
// Problem 2 : Swap two numbers.
// Approach : You are given two numbers a and b. Swap their values (so that a becomes b and b becomes a).

let a = 7;
let b = 19;

let c = a;
a = b;
b = c;
console.log(a, b);


console.log("------------------------------------ ::");
// Problem 3: Check if a number is even or odd
// "If number divided by 2 has no remainder, it's even"

let num = 6;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

console.log("------------------------------------ ::");
// Problem 4: Check if someone can vote (age >= 18)
// "If age is 18 or more, can vote"

let age = 16;
if (age >= 18) {
    console.log("can vote");
} else {
    console.log("can't");
}

console.log("------------------------------------ ::");
// Problem 5: Simple grade checker
// "If score is 90 or above = A, 80-89 = B, below 80 = C"

let score = 75;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

console.log("------------------------------------ ::");
// Problem 6: Temperature advice
// "Hot = shorts, warm = t-shirt, cold = jacket"

let temp = 27;
if (temp > 30) {
    console.log("wear shorts");
} else if (temp > 20) {
    console.log("t-shirt");
} else {
    console.log("You need a jacket!");
}

console.log("------------------------------------ ::");
// Problem 7: Simple calculator
// "Ask what operation, then do it"

let num1 = 11;
let num2 = 13;
let operation = "+";

if (operation === "+") {
    console.log((num1 + num2));
} else if (operation === "-") {
    console.log((num1 - num2));
} else if (operation === "*") {
    console.log((num1 * num2));
} else if (operation === "/") {
    console.log((num1 / num2));
} else {
    console.log("Unknown Operation")
}


console.log("------------------------------------ ::");
// Problem 8: Find the largest of two numbers.
// Approach : Compare the two numbers using if-else

let num1st = 27;
let num2nd = 19;

if (num1st > num2nd) {
    console.log("num1st is the largest");
} else if (num2nd > num1st) {
    console.log("num2nd is largest");
} else {
    console.log("num1st = num2nd");
}


console.log("------------------------------------ ::");
// Problem 9: Convert Celsius → Fahrenheit.
// Approach : Use the formula F = C * 9/5 + 32

let C = 17;
let F = C * 9 / 5 + 32;
console.log(F);


console.log("------------------------------------ ::");
// Problem 10: Print numbers from 1 to 10 using a loop.
// Approach : Loop to iterate from 1 to 10;
for (let i = 1; i <= 10; i++) {
    console.log(i);
};


console.log("------------------------------------ ::");
// Problem 11: Find the sum of two numbers.
// Approach : Take two numbers and return their sum.
let numX = 17;
let numY = 23;
let sum = numX + numY;
console.log("Sum:", sum);


console.log("------------------------------------ ::");
// Problem 12: Check if a number is positive or negative.
// Approach : If the number is greater than 0, it's positive; otherwise, it's negative.
let numZ = -7;
if (numZ > 0) {
    console.log("Positive");
} else if (numZ < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



console.log("------------------------------------ ::");
// Problem 13: Print all even numbers from 1 to 20.
// Approach : Use a loop to iterate through numbers 1 to 20 and check if each is even.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


console.log("------------------------------------ ::");
// Problem 14: Find the absolute value of a number.
// Approach :
// - What is absolute value of any number ?
// - It's the distance of that number from 0 on the number line.
// - If the number is negative, we multiply by -1 to make it positive.

let numO = -5;
let absoluteValues = numO < 0 ? -numO : numO;
console.log(absoluteValues);
