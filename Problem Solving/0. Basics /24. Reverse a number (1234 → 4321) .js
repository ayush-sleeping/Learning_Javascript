// reverse a number  :
// --------------------------------------------------------------------------------------------------------------::

// String conversion approach
// ---------------------------------------------------------------------
let number = 129;  // Original number to reverse
let numberString = number.toString();  // Convert to string for character access
let reversedNumberString = "";  // Build reversed string here
for (let i = numberString.length - 1; i >= 0; i--) {  // Loop backwards through string
    reversedNumberString = reversedNumberString + numberString[i];  // Concatenate each digit
}
let reversedNumber = parseInt(reversedNumberString);  // Convert back to number

console.log("String method: " + number + " → " + reversedNumber);  // 129 → 921

/*
Step-by-step execution for 129:
- number = 129
- numberString = "129" (length = 3)
- reversedNumberString = ""

Loop 1: i=2, numberString[2]="9", reversedNumberString = "" + "9" = "9"
Loop 2: i=1, numberString[1]="2", reversedNumberString = "9" + "2" = "92"
Loop 3: i=0, numberString[0]="1", reversedNumberString = "92" + "1" = "921"

parseInt("921") converts string "921" back to number 921
*/

// Mathematical approach
// ---------------------------------------------------------------------
let originalNum = 5678;  // Number to reverse
let result = 0;  // Build result here digit by digit

while (originalNum > 0) {  // Continue until all digits processed
    let digit = originalNum % 10;  // Extract rightmost digit (5678 % 10 = 8)
    result = result * 10 + digit;  // Add digit to left side of result (0*10+8=8, 8*10+7=87, etc.)
    originalNum = (originalNum - digit) / 10;  // Remove rightmost digit manually
}

console.log("Mathematical method: 5678 → " + result);  // 5678 → 8765


// Function approach for reusability
// ---------------------------------------------------------------------
function reverseNumber(n) {
    let reversed = 0;  // Initialize result
    while (n > 0) {  // Process each digit
        reversed = reversed * 10 + (n % 10);  // Extract digit and build result
        n = Math.floor(n / 10);  // Remove processed digit
    }
    return reversed;  // Return final reversed number
}
console.log("Function method: 456 → " + reverseNumber(456));  // 456 → 654

// MATHEMATICAL LOGIC EXPLANATION:
// For number 1234:
// Step 1: 1234 % 10 = 4, reversed = 0*10 + 4 = 4, num = 123
// Step 2: 123 % 10 = 3, reversed = 4*10 + 3 = 43, num = 12
// Step 3: 12 % 10 = 2, reversed = 43*10 + 2 = 432, num = 1
// Step 4: 1 % 10 = 1, reversed = 432*10 + 1 = 4321, num = 0
// Result: 4321

// KEY CONCEPTS:
// % operator gets remainder (extracts last digit)
// Math.floor() removes decimal part (eliminates last digit)
// Multiply by 10 shifts digits left, then add new digit on right
