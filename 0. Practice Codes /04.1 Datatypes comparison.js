// Comparison of datatypes:

// This code block demonstrates the comparison of different datatypes in JavaScript.

console.log(2 > 1); // Output: true  
console.log(2 >= 1); // Output: true  
console.log(2 < 1); // Output: false 
console.log(2 == 1); // Output: false 
console.log(2 != 1); // Output: true  

console.log("2" > 1); // Output: true  
console.log("02" > 1); // Output: true  

console.log(null > 0); // Output: false  
console.log(null == 0); // Output: false  // Checks if null is equal to 0. They are not equal.
console.log(null >= 0); // Output: true   // Checks if null is greater than or equal to 0. It is.

console.log(undefined == 0); // Output: false  // Checks if undefined is equal to 0. They are not.
console.log(undefined > 0); // Output: false  // Checks if undefined is greater than 0. It is not.
console.log(undefined < 0); // Output: false  // Checks if undefined is less than 0. It is not.

// ===

console.log("2" === 2); // Output: false  
// Checks if the string "2" is identical to the number 2. They are not identical.
