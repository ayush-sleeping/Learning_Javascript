// Operations :: 

// Declare variables
let value = 3
let negValue = -value
console.log(value, negValue)

// Perform arithmetic operations and log the results to the console
console.log(2+2, 2-2, 2*2, 2**2, 2/3, 2%3);

// Declare variables for strings
let str1 = "hello"
let str2 = " world"

// Concatenate the strings and store the result in a variable
let str3 = str1 + str2
console.log(str3)

// Perform arithmetic operations with strings and log the results to the console
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

// Perform arithmetic operations with mixed data types and log the results to the console
console.log(3 + 4 * 5 % 3); // 2

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
gameCounter++; // ++gameCounter have same effect as gameCounter = gameCounter + 1;
console.log(gameCounter); // 101