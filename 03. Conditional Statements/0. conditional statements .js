/*
CONDITIONAL STATEMENTS IN JAVASCRIPT
Conditional statements allow you to make decisions in your code.
Think of them like "IF this happens, THEN do that" in real life.

Types of Conditional Statements:
1. if statement
2. if...else statement
3. if...else if...else statement
4. switch statement
5. Ternary operator (? :)
*/


// if :
let age = 18;
console.log("Age:", age);
if (age >= 18) {
    console.log("You can vote!");
}
if (age < 18) {
    console.log("Too young to vote");
}

console.log("----------------------------------------------- ::");
// if else :

let temperature = 25;
console.log("Temperature:", temperature + "°C");
if (temperature > 30) {
    console.log("It's hot! Wear shorts.");
} else {
    console.log("It's cool! Wear a jacket.");
}

console.log("----------------------------------------------- ::");
// if else ... if else :

let score = 85;
console.log("Test Score:", score);
if (score >= 90) {
    console.log("Grade A - Excellent!");
} else if (score >= 80) {
    console.log("Grade B - Good job!");
} else if (score >= 70) {
    console.log("Grade C - Not bad!");
} else if (score >= 60) {
    console.log("Grade D - Need improvement");
} else {
    console.log("Grade F - Failed");
}

console.log("----------------------------------------------- ::");
// switch statement :


let dayOfWeek = 3;
let dayName;
switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("Day " + dayOfWeek + " is " + dayName);


console.log("----------------------------------------------- ::");
// Ternary operator :


let userAge = 20;
let accessMessage = userAge >= 18 ? "Access granted" : "Access denied";
console.log("Age:", userAge, "→", accessMessage);
