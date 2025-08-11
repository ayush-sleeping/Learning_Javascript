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
