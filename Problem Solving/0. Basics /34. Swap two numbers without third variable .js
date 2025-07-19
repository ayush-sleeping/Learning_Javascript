// swap two numbers without third variable  :
// --------------------------------------------------------------------------------------------------------------::

let a = 10;
let b = 20;
console.log(a, b);

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

/*
EXPLANATION FOR ARITHMETIC METHOD:

let a = 10;  // First number
let b = 20;  // Second number

// Step by step swapping using addition and subtraction
a = a + b;  // a = 10 + 20 = 30, b = 20
b = a - b;  // b = 30 - 20 = 10 (now b has original value of a)
a = a - b;  // a = 30 - 10 = 20 (now a has original value of b)

EXECUTION BREAKDOWN:
Initial: a=10, b=20
Step 1: a = 10+20 = 30, b = 20
Step 2: b = 30-20 = 10, a = 30
Step 3: a = 30-10 = 20, b = 10
Final: a=20, b=10

LOGIC: Store sum in first variable, then subtract to get original values
*/


// ---------------------------------------------------------------------------
let p = 7;
let q = 13;
console.log(p, q);

p = p * q;
q = p / q;
p = p / q;

console.log(p, q);

/*
EXPLANATION FOR MULTIPLICATION METHOD:

let p = 7;   // First number
let q = 13;  // Second number

// Step by step swapping using multiplication and division
p = p * q;  // p = 7 * 13 = 91, q = 13
q = p / q;  // q = 91 / 13 = 7 (now q has original value of p)
p = p / q;  // p = 91 / 7 = 13 (now p has original value of q)

EXECUTION BREAKDOWN:
Initial: p=7, q=13
Step 1: p = 7*13 = 91, q = 13
Step 2: q = 91/13 = 7, p = 91
Step 3: p = 91/7 = 13, q = 7
Final: p=13, q=7

CAUTION: This method can cause issues with:
- Zero values (division by zero)
- Very large numbers (overflow)
- Floating point precision errors
*/


// ---------------------------------------------------------------------------
function swapNumbers(num1, num2) {
    console.log(num1, num2);

    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    console.log(num1, num2);
    return { first: num1, second: num2 };
}

let result = swapNumbers(25, 35);

/*
EXPLANATION FOR FUNCTION APPROACH:

function swapNumbers(num1, num2) {
    console.log("Function - Before swap:", num1, num2);

    // Use arithmetic method for swapping
    num1 = num1 + num2;  // Store sum in first parameter
    num2 = num1 - num2;  // Extract original first value
    num1 = num1 - num2;  // Extract original second value

    console.log("Function - After swap:", num1, num2);
    return { first: num1, second: num2 };  // Return swapped values
}

EXECUTION for swapNumbers(25, 35):
Input: num1=25, num2=35
Step 1: num1 = 25+35 = 60, num2 = 35
Step 2: num2 = 60-35 = 25, num1 = 60
Step 3: num1 = 60-25 = 35, num2 = 25
Output: {first: 35, second: 25}

ADVANTAGE: Encapsulated logic, reusable, returns result object
*/


// ---------------------------------------------------------------------------
let m = 100;
let n = 200;
console.log(m, n);

[m, n] = [n, m];

console.log(m, n);

/*
EXPLANATION FOR DESTRUCTURING METHOD:

let m = 100;  // First variable
let n = 200;  // Second variable

[m, n] = [n, m];  // ES6 destructuring assignment for swapping

EXECUTION:
- Right side [n, m] creates array [200, 100]
- Left side [m, n] assigns: m gets first element (200), n gets second element (100)

RESULT: m=200, n=100

NOTE: This is the most modern and clean approach in JavaScript
However, it might not be allowed in interviews asking for "without third variable"
since it internally uses temporary array storage
*/
