// Q. Count digits in a number :
// --------------------------------------------------------------------------------------------------------------::

let num = 50000000000;
let count = 0;
while (num != 0) {
    num = Math.floor(num / 10);
    count++;
}
console.log("Number of digits:", count);

/*
EXPLANATION FOR ABOVE CODE:

let num = 50000000000;  // Original number to count digits
let count = 0;  // Counter to track number of digits
while (num != 0) {  // Continue until all digits are removed
    num = Math.floor(num / 10);  // Remove rightmost digit (50000000000 → 5000000000 → 500000000...)
    count++;  // Increment digit counter
}
console.log("Number of digits:", count);

EXECUTION BREAKDOWN:
num=50000000000, count=0 → num=5000000000, count=1
num=5000000000, count=1  → num=500000000, count=2
num=500000000, count=2   → num=50000000, count=3
...continues until num=0, final count=11

LOGIC: Divide by 10 removes one digit each time, count the divisions
*/


// ------------------------------------------------------------------------------------
let number = 50000000000;
let digitCount = number.toString().length;
console.log("Number of digits:", digitCount);

/*
EXPLANATION FOR ABOVE CODE:

let number = 50000000000;  // Original number
let digitCount = number.toString().length;  // Convert to string and get length
console.log("Number of digits:", digitCount);

LOGIC: Convert number to string, count characters
50000000000 → "50000000000" → length = 11

PROS: Simple one-liner
CONS: Uses built-in methods (may not be allowed in some interviews)
*/


// ------------------------------------------------------------------------------------
function countDigits(n) {
    if (n === 0) return 1;
    if (n < 0) n = -n;

    let digits = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        digits++;
    }
    return digits;
}

console.log("Function approach:", countDigits(123456));
console.log("Zero test:", countDigits(0));
console.log("Negative test:", countDigits(-9876));

/*
EXPLANATION FOR FUNCTION APPROACH:

function countDigits(n) {
    if (n === 0) return 1;  // Special case: 0 has 1 digit
    if (n < 0) n = -n;  // Handle negative numbers by making positive

    let digits = 0;  // Digit counter
    while (n > 0) {  // Continue while number has digits
        n = Math.floor(n / 10);  // Remove rightmost digit
        digits++;  // Increment counter
    }
    return digits;  // Return total count
}

EDGE CASES HANDLED:
- Zero: Special case returns 1 (0 has 1 digit)
- Negative: Convert to positive before counting
- Any positive number: Standard division method

EXECUTION for countDigits(123456):
n=123456 → n=12345, digits=1
n=12345  → n=1234, digits=2
n=1234   → n=123, digits=3
n=123    → n=12, digits=4
n=12     → n=1, digits=5
n=1      → n=0, digits=6
Return 6
*/


// ------------------------------------------------------------------------------------
function countDigitsRecursive(n) {
    if (n < 0) n = -n;
    if (n < 10) return 1;
    return 1 + countDigitsRecursive(Math.floor(n / 10));
}

console.log("Recursive approach:", countDigitsRecursive(987654));

/*
EXPLANATION FOR RECURSIVE APPROACH:

function countDigitsRecursive(n) {
    if (n < 0) n = -n;  // Handle negative numbers
    if (n < 10) return 1;  // Base case: single digit numbers have 1 digit
    return 1 + countDigitsRecursive(Math.floor(n / 10));  // 1 + count of remaining digits
}

EXECUTION for countDigitsRecursive(987654):
987654 → 1 + countDigitsRecursive(98765)
98765  → 1 + countDigitsRecursive(9876)
9876   → 1 + countDigitsRecursive(987)
987    → 1 + countDigitsRecursive(98)
98     → 1 + countDigitsRecursive(9)
9      → 1 (base case)
Result: 1+1+1+1+1+1 = 6

LOGIC: Each recursive call removes one digit and adds 1 to count
*/

const args = process.argv.slice(2);
if (args.length > 0) {
    const inputNumber = parseInt(args[0]);
    if (!isNaN(inputNumber)) {
        console.log("\nTerminal input:", inputNumber);
        console.log("Digit count:", countDigits(inputNumber));
    } else {
        console.log("Please provide a valid number");
    }
}

/*
EXPLANATION FOR TERMINAL INPUT:

const args = process.argv.slice(2);  // Get command line arguments
if (args.length > 0) {  // Check if user provided input
    const inputNumber = parseInt(args[0]);  // Convert first argument to number
    if (!isNaN(inputNumber)) {  // Validate number
        console.log("\nTerminal input:", inputNumber);
        console.log("Digit count:", countDigits(inputNumber));  // Use function to count
    } else {
        console.log("Please provide a valid number");  // Error handling
    }
}

USAGE: node "32. Count digits in a number .js" 123456789
OUTPUT: Terminal input: 123456789, Digit count: 9
*/
