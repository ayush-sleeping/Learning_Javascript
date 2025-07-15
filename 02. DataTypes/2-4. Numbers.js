// here we will create variables to sore numbers (both integers and decimal types)
// we will see how they store in memory and we will do some operation on some parts
// Also see 2 different types of numbers in JS [ Infinity and Not a Number ].
console.clear()

var num1 = 10; // Integer
var num2 = 10.2; // Decimal Number

console.log(typeof(num1))
console.log(typeof(num2))

// Addition
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);

// Subtraction
var diff = num3 - num2;
console.log(diff);

// Multiplication
var mul = num3 * num1;
console.log(mul);

// Division
var div = num3 / num1;
console.log(div);

var divByZero = num3 / 0;
console.log(divByZero);
console.log(typeof(divByZero));

var mulByString = num3 * 'A';
console.log(mulByString);
console.log(typeof(mulByString));