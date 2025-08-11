/*
TYPE COERCION IN JAVASCRIPT
Type coercion is JavaScript's automatic conversion of values from one data type to another.
This happens when you use operators or functions that expect a certain type.

Types of Coercion:
1. Implicit Coercion (Automatic) - JavaScript does it for you
2. Explicit Coercion (Manual) - You force the conversion

Why it matters:
- Can cause unexpected bugs if you don't understand it
- Helps explain weird JavaScript behavior
- Essential for writing reliable code
*/

// example 1. IMPLICIT COERCION (AUTOMATIC)

// String + Number = String (concatenation)
console.log("\n String + Number:");
let result1 = "5" + 3;
console.log("'5' + 3 =", result1, "→ Type:", typeof result1);

let result2 = "Hello" + 123;
console.log("'Hello' + 123 =", result2, "→ Type:", typeof result2);

let result3 = "Score: " + 100;
console.log("'Score: ' + 100 =", result3, "→ Type:", typeof result3);

// Number - String = Number (subtraction)
console.log("\n Number - String:");
let result4 = 10 - "3";
console.log("10 - '3' =", result4, "→ Type:", typeof result4);

let result5 = "15" - 5;
console.log("'15' - 5 =", result5, "→ Type:", typeof result5);

// Multiplication and Division
console.log("\n Multiplication & Division:");
let result6 = "4" * 3;
console.log("'4' * 3 =", result6, "→ Type:", typeof result6);

let result7 = "20" / 4;
console.log("'20' / 4 =", result7, "→ Type:", typeof result7);

// Boolean in math operations
console.log("\n Boolean in Math:");
let result8 = true + 5;    // true becomes 1
console.log("true + 5 =", result8, "→ Type:", typeof result8);

let result9 = false * 10;  // false becomes 0
console.log("false * 10 =", result9, "→ Type:", typeof result9);



console.log("----------------------------------------------------------------- ::");
// example 2. COMPARISON

console.log("\n Loose Equality (==) - Does coercion:");
console.log("5 == '5':", 5 == "5");        // true (string converted to number)
console.log("true == 1:", true == 1);      // true (boolean converted to number)
console.log("false == 0:", false == 0);    // true (boolean converted to number)
console.log("null == undefined:", null == undefined); // true (special case)
console.log("'' == 0:", "" == 0);          // true (empty string converted to 0)

console.log("\n Strict Equality (===) - No coercion:");
console.log("5 === '5':", 5 === "5");      // false (different types)
console.log("true === 1:", true === 1);    // false (different types)
console.log("false === 0:", false === 0);  // false (different types)
console.log("null === undefined:", null === undefined); // false (different types)
console.log("'' === 0:", "" === 0);        // false (different types)




console.log("----------------------------------------------------------------- ::");
// example 3. BOOLEAN COERCION

// Falsy values (become false)
console.log("\n Falsy Values:");
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(""));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));

// Truthy values (become true)
console.log("\n Truthy Values:");
console.log("Boolean(true):", Boolean(true));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean('hello'):", Boolean("hello"));
console.log("Boolean([]):", Boolean([]));        // Empty array is truthy!
console.log("Boolean({}):", Boolean({}));        // Empty object is truthy!
console.log("Boolean('false'):", Boolean("false")); // String 'false' is truthy!
