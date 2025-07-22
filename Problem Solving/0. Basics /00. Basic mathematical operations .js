// Q. Basic Mathematical operations :
// ------------------------------------------------------------------------::

// print/show results
console.log("Hello JavaScript Programming");
console.log("Let's learn basic math operations!");

/*
EXPLANATION - CONSOLE.LOG:
- console.log() is like a "printer" for programmers
- It shows results on the screen so we can see what happened
- Always put text in quotes: "like this"
- Use it to check if your code is working
*/



// Variables - Storing numbers for math
// -------------------------------------------------------------
let firstNumber = 10;
let secondNumber = 5;
console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);

/*
EXPLANATION - VARIABLES:
- Variables are like boxes that store values
- let firstNumber = 10 means "put number 10 in a box called firstNumber"
- We can use these stored numbers later for calculations
- Think of it like: "Remember this number, I'll use it later"
*/



// Basic Math Operations (+, -, *, /, %)
// -------------------------------------------------------------

// Addition (+)
let addition = firstNumber + secondNumber;
console.log(firstNumber + " + " + secondNumber + " = " + addition);

// Subtraction (-)
let subtraction = firstNumber - secondNumber;
console.log(firstNumber + " - " + secondNumber + " = " + subtraction);

// Multiplication (*)
let multiplication = firstNumber * secondNumber;
console.log(firstNumber + " * " + secondNumber + " = " + multiplication);

// Division (/)
let division = firstNumber / secondNumber;
console.log(firstNumber + " / " + secondNumber + " = " + division);

// Remainder/Modulo (%)
let remainder = firstNumber % secondNumber;
console.log(firstNumber + " % " + secondNumber + " = " + remainder);

/*
EXPLANATION - MATH SYMBOLS:
+ means addition (like 3 + 2 = 5)
- means subtraction (like 8 - 3 = 5)
* means multiplication (like 4 * 3 = 12)
/ means division (like 10 / 2 = 5)
% means remainder (like 10 % 3 = 1, because 10 ÷ 3 = 3 remainder 1)

IMPORTANT:
- Use * for multiplication, NOT x
- Use / for division
- % gives you the leftover after division
*/



// Working with different numbers
// -------------------------------------------------------------

let a = 20;
let b = 7;

console.log("New numbers: a = " + a + ", b = " + b);
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));

/*
EXPLANATION - PARENTHESES:
- (a + b) in console.log ensures math happens first
- Without parentheses: "a + b = " + a + b becomes "a + b = 207" (text joining)
- With parentheses: "a + b = " + (a + b) becomes "a + b = 27" (math first)
- Always use () around math operations in console.log!
*/



// Direct calculations (without variables)
// -------------------------------------------------------------

console.log("5 + 3 =", 5 + 3);
console.log("15 - 8 =", 15 - 8);
console.log("6 * 4 =", 6 * 4);
console.log("20 / 4 =", 20 / 4);
console.log("17 % 5 =", 17 % 5);

/*
EXPLANATION - DIRECT MATH:
- You can do math directly: console.log("5 + 3 =", 5 + 3)
- The comma (,) separates different things to print
- JavaScript calculates 5 + 3 and shows the result
- No need to store in variables for simple calculations
*/



// Understanding decimals
// -------------------------------------------------------------

let decimal1 = 10.5;
let decimal2 = 3.2;

console.log("Decimal 1:", decimal1);
console.log("Decimal 2:", decimal2);
console.log("Addition:", decimal1 + decimal2);
console.log("Subtraction:", decimal1 - decimal2);
console.log("Multiplication:", decimal1 * decimal2);
console.log("Division:", decimal1 / decimal2);

/*
EXPLANATION - DECIMALS:
- Use dot (.) for decimal numbers: 10.5, 3.14, 0.5
- JavaScript can do math with decimals just like whole numbers
- Results might have many decimal places
- Examples: 10.5 + 3.2 = 13.7
*/



// Order of operations (PEMDAS/BODMAS)
// -------------------------------------------------------------

let result1 = 2 + 3 * 4;        // Multiplication first: 2 + (3 * 4) = 2 + 12 = 14
let result2 = (2 + 3) * 4;      // Parentheses first: (2 + 3) * 4 = 5 * 4 = 20
let result3 = 10 - 2 * 3;       // Multiplication first: 10 - (2 * 3) = 10 - 6 = 4
let result4 = (10 - 2) * 3;     // Parentheses first: (10 - 2) * 3 = 8 * 3 = 24

console.log("2 + 3 * 4 =", result1);
console.log("(2 + 3) * 4 =", result2);
console.log("10 - 2 * 3 =", result3);
console.log("(10 - 2) * 3 =", result4);

/*
EXPLANATION - ORDER OF OPERATIONS:
JavaScript follows math rules (PEMDAS/BODMAS):
1. Parentheses/Brackets first: ()
2. Multiplication and Division: * /
3. Addition and Subtraction: + -

EXAMPLES:
- 2 + 3 * 4 = 2 + 12 = 14 (multiply first)
- (2 + 3) * 4 = 5 * 4 = 20 (parentheses first)

TIP: When in doubt, use parentheses to be clear!
*/



// Very Simple real-world examples
// -------------------------------------------------------------

// Q. Calculate total cost
let itemPrice = 25;
let quantity = 3;
let totalCost = itemPrice * quantity;
console.log("Item price: $" + itemPrice);
console.log("Quantity: " + quantity);
console.log("Total cost: $" + totalCost);

// Q. Calculate average
let test1 = 85;
let test2 = 92;
let test3 = 78;
let average = (test1 + test2 + test3) / 3;
console.log("Test scores:", test1, test2, test3);
console.log("Average score:", average);

// Q. Calculate change
let paid = 50;
let cost = 37;
let change = paid - cost;
console.log("Amount paid: $" + paid);
console.log("Item cost: $" + cost);
console.log("Change: $" + change);

/*
EXPLANATION - REAL EXAMPLES:
These show how math is used in real programming:
- Shopping: price * quantity = total
- School: (score1 + score2 + score3) / 3 = average
- Money: paid - cost = change

This is why learning basic math operations is important!
*/



// -------------------------------------------------------------
let practice1 = 12;
let practice2 = 8;

console.log("Practice numbers:", practice1, "and", practice2);
console.log("Add them:", practice1 + practice2);
console.log("Subtract:", practice1 - practice2);
console.log("Multiply:", practice1 * practice2);
console.log("Divide:", practice1 / practice2);
console.log("Remainder:", practice1 % practice2);
