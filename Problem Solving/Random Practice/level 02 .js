// Problem 1: Check if a number is positive, negative, or zero.
// Take a number.
// If greater than 0 → positive.
// Else if less than 0 → negative.
// Else → zero.

let num1 = 0;
if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

console.log("------------------------------------ ::");
// Problem 2: Check if a person is a teenager (age 13-19)
// "If age is between 13 and 19..."

let age = 4;
if (age >= 13 & age <= 19) {
    console.log("Teenager");
} else {
    console.log("Not Teenager");
}

console.log("------------------------------------ ::");
// Problem 3: Traffic light system
// "Red = Stop, Yellow = Slow down, Green = Go"

let light = "Green";
if (light === "Red") {
    console.log("Stop");
} else if (light === "Yellow") {
    console.log("Slow Down");
} else if (light === "Green") {
    console.log("Go");
} else {
    console.log("drive by your own risk!")
}

console.log("------------------------------------ ::");
// Problem 4: Password strength checker
// "If password length is more than 8 characters = strong, else weak"

let password = "ayush@1234";
if (password.length > 8) {
    console.log("Strong " + password.length);
} else {
    console.log("Weak " + password.length);
}

console.log("------------------------------------ ::");
// Problem 5: Shopping discount
// "If amount > 100, give 10% discount"

let amount = 180;
if (amount > 100) {
    let discountAmount = amount * 0.9;
    console.log("Original: $" + amount, "With 10% discount: $" + discountAmount, "You saved: $" + (amount - discountAmount));
} else {
    console.log("Amount: $" + amount);
}

console.log("------------------------------------ ::");
// Problem 6: Find largest of three numbers.
// Approach : Compare numbers using conditional statements (if-else).

let m = 8;
let n = 19;
let o = 10;
let largest;

if (m >= n && m >= o) {
    largest = m;
} else if (n >= m && n >= o) {
    largest = n;
} else {
    largest = o;
}
console.log(largest);


console.log("------------------------------------ ::");
// Problem 7: Check if a year is leap year.A year is a leap year if it is "divisible by 4 and not divisible by 100" or "divisible by 400".

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}


console.log("------------------------------------ ::");
// Problem 8 : Reverse a number using loops.
// Approach :
// Initialize a variable reversed = 0.
// Use a loop to extract the last digit of the number (num % 10).
// Add it to reversed after multiplying reversed by 10 (reversed = reversed * 10 + lastDigit).
// Remove the last digit from the number num = (num - lastdigit) / 10 and repeat until num becomes 0.
// (reverse a number using only basic arithmetic and loops)

let num = 12345;
let reversed = 0;

while (num > 0) {
    let lastdigit = num % 10; // get last digit
    reversed = reversed * 10 + lastdigit; // build reversed number
    num = (num - lastdigit) / 10; // remove last digit
}
console.log("Reversed Number : ", reversed);
