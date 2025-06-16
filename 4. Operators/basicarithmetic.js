// Basic Arithmetic Operations in JavaScript :
result = 10 + 5; // Addition
console.log("Addition Result:", result);
result = 10 - 5; // Subtraction
console.log("Subtraction Result:", result);
let result = 5 * 10; // Multiplication
console.log("Multiplication Result:", result);
result = 10 / 2; // Division
console.log("Division Result:", result);
result = 10 % 3; // Modulus (Remainder)
console.log("Modulus Result:", result);
result = 2 ** 3; // Exponentiation (Power)
console.log("Exponentiation Result:", result);
result = 10 + 5 * 2; // Order of Operations (Multiplication before Addition)
console.log("Order of Operations Result:", result);
result = (10 + 5) * 2; // Parentheses to change order of
console.log("Parentheses Result:", result);

let num = 5;
num++; // Increment
console.log("Increment Result:", num);
num--; // Decrement
console.log("Decrement Result:", num);


let x = 5;
x += 2; // Add and assign
console.log("Add and Assign Result:", x);
x -= 3; // Subtract and assign
console.log("Subtract and Assign Result:", x);

// Comparison Operators in JavaScript :
5 == 5; // true [ Sign : == is equality operator, it checks for value only ]
'5' == 5; // true (type coercion) [ Sign : == is equality operator, it checks for value only ]
5 === 5; // true (strict equality, no type coercion) [ Sign : === is strict equality operator, it checks for value and type both ]
'5' === 5; // false (strict equality, because types are different) [ Sign : === is strict equality operator, it checks for value and type both ]


5 != 3; // true [ Sign : != is inequality operator, it checks for value only ]
'5' != 3; // true (type coercion) [ Sign : != is inequality operator, it checks for value only ]
5 !== '5'; // true (strict inequality, different types) [ Sign : !== is strict inequality operator, it checks for value and type both ]


5 < 10; // true [ Sign : < is less than operator ]
10 > 5; // true [ Sign : > is greater than operator ]
5 <= 5; // true [ Sign : <= is less than or equal to operator ]
10 >= 5; // true [ Sign : >= is greater than or equal to operator ]


let a = 8;
a /= 2; // Divide and assign ( a is now 4 )
console.log("Divide and Assign Result:", a);

let b = 10;
b *= 3; // Multiply and assign ( b is now 30 )
console.log("Multiply and Assign Result:", b);

let c = 15;
c %= 4; // Modulus and assign ( c is now 3 )
console.log("Modulus and Assign Result:", c);

let d = 2;
d **= 3; // Exponentiation and assign ( d is now 8 )
console.log("Exponentiation and Assign Result:", d);


// Logical Operators in JavaScript, && ||, and ! are used to perform logical operations on boolean values.
//They are commonly used in conditional statements and expressions to control the flow of the program based on certain conditions.
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse; // Logical AND
console.log("Logical AND Result:", andResult); // false, because one operand is false
let orResult = isTrue || isFalse; // Logical OR
console.log("Logical OR Result:", orResult); // true, because one operand is true
let notResult = !isTrue; // Logical NOT
console.log("Logical NOT Result:", notResult); // false, negates the value of is  True

true && true; // true
true && false; // false

true || false; // true
false || false; // false

!true; // false
!false; // true
