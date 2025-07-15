// Datatype conversion  :: 

// Declare a variable and assign it a value
let score = 33 
// Log the datatype of 'score' using 'typeof' operator
console.log(typeof score); // number
console.log(typeof (score));  // number

// --- 

let score2 = "33abc"
console.log(typeof score2);  // string
console.log(typeof (score2));  // string

// Convert 'score2' to a number using 'Number()' function
let valueInNumber = Number(score2)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

// --- 

let isLoggedIn = 1
// Convert 'isLoggedIn' to a boolean using 'Boolean()' function
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true 

// 1 => true; 0 => false
// "" => false
// "Ayush" => true

// --- 

let someNumber = 33
// Convert 'someNumber' to a string using 'String()' function
let stringNumber = String(someNumber)
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

// --- 

