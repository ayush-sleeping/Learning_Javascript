//  Problem 1: Write a function to calculate factorial.
// Approach (step-wise):
// Contract:
//    - Input: a single number `n` (expected a non-negative integer).
//    - Output: factorial of n (n!), which is the product of all integers from 1 to n.
//    - Error modes: if n is negative or not an integer, we will return null and print a helpful message.
// Quick math reminder:
//    - 0! = 1 (by definition).
//    - n! = n * (n-1) * (n-2) * ... * 1 for n >= 1.
// Steps to implement:
//    a. Validate input: check type, integer-ness, and non-negativity.
//    b. If n is 0 return 1 immediately.
//    c. Initialize result = 1. Loop i from 1 to n, multiply result by i each step.
//    d. Return result.
// Edge cases to consider:
//    - Negative numbers → invalid (return null).
//    - Non-integer numbers → invalid (return null).
//    - Very large n → results may overflow number range (JS uses 64-bit float for numbers).

function factorial(n) {

    if (typeof n !== 'number') {
        console.log("Invalid input: not a number");
        return null;
    }

    if (n % 1 !== 0) {
        console.log("Invalid input: not an integer");
        return null;
    }

    if (n < 0) {
        console.log("Invalid input: negative number");
        return null;
    }

    if (n === 0) {
        return 1;
    }

    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(5)); // 120




console.log("------------------------------------ ::");
//  Problem 2: Calculate simple interest using function
// Formula: SI = (Principal × Rate × Time) / 100
// Example: Principal=1000, Rate=5%, Time=2 years → SI = 100

// - Inputs:
//    principal: number (amount, >= 0)
//    rate: number (annual rate in percent, e.g., 5 for 5%)
//    time: number (time in years, >= 0; fractional years allowed)
// - Output: simple interest as a number (or null for invalid input)
// - Error modes: return null and print a helpful message for invalid inputs

// Approach (step-wise):
// 1. Validate inputs: all must be numbers and non-negative. Rate can be zero or positive.
// 2. Use formula SI = (principal * rate * time) / 100.
// 3. Return the computed SI.
// 4. Note: If user passes rate as a decimal (0.05), mention they should pass percent (5).

function simpleInterest(principal, rate, time) {

    if (typeof principal !== 'number' || typeof rate !== 'number' || typeof time !== 'number') {
        console.log("Invalid inputs");
        return null;
    }

    if (principal < 0 || rate < 0 || time < 0) {
        console.log("Invlaid inputs");
        return null;
    }

    var si = (principal * rate * time / 100);
    return si;
}
console.log(simpleInterest(1500, 7, 1));




console.log("------------------------------------ ::");
//  Problem 3: Count words in a sentence
// Count number of words (separated by spaces)
// Example: "Hello world how are you" → 5 words
//
// - Input: sentence (string)
// - Output: number (count of words). Returns 0 for empty or all-space strings.
// - Error: if input is not a string, prints a message and returns null.
//
// Approach (step-wise):
// 1. Validate input is a string.
// 2. Use a loop to scan characters left-to-right.
// 3. Track whether the previous character was a space (prevWasSpace).
// 4. When we see a non-space character and prevWasSpace is true, we found the start of a word -> increment count and set prevWasSpace=false.
// 5. When we see a space character, set prevWasSpace=true.
// 6. This handles single, multiple, leading and trailing spaces without using built-ins.
//
// Note: treat ' ', '\t', '\n' as whitespace for robustness.

function countWords(sentence) {

    // validate input
    if (typeof sentence !== 'string') {
        console.log("Invalid input");
        return null;
    }

    // initialize variables
    var wordCount = 0; // Keeps track of words
    var prevWasSpace = true; // Tracks if the last character was space

    // Loop through each character in the sentence
    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i];

        // Check if current character is whitespace
        var isSpace = (ch === ' ' || ch === '\t' || ch === '\n');

        // Detect start of a new word
        if (!isSpace && prevWasSpace) {
            wordCount++; // Found a new word
            prevWasSpace = false;
        }
        // If it's space, mark as outside a word
        else if (isSpace) {
            prevWasSpace = true;
        }
    }
    // Return total words counted

    return wordCount;
}
console.log(countWords("Hello world how are you")); // Output: 5




console.log("------------------------------------ ::");
//  Problem 4: Find sum of digits of a number using a function
// Example: 1234 → 1+2+3+4 = 10

// - Input: num (expected a non-negative integer).
// - Output: sum of its digits (e.g., 1234 → 10). Returns null for invalid input.
// - Error modes: if num is not a number, not an integer, or negative, return null with a message.

// Approach (step-wise):
// 1. Validate input: check type, integer-ness, and non-negativity.
// 2. Initialize sum = 0.
// 3. While num > 0:
//    a. Extract last digit: lastDigit = num % 10.
//    b. Add lastDigit to sum.
//    c. Remove last digit: num = (num - lastDigit) / 10 (integer division).
// 4. Return sum.
// 5. Edge cases: 0 → sum=0, negative → invalid, non-integer → invalid.

function sumOfDigits(num) {

    // validate
    if (typeof num !== 'number') {
        console.log("Invalid Input");
        return null;
    }
    if (num % 1 !== 0) {
        console.log("Expected an integer");
        return null;
    }
    if (num < 0) {
        console.log("Expecting an positive number");
        return null;
    }

    var sum = 0;
    var originalNum = num;

    // Loop to extract and sum digits
    while (num > 0) {
        var lastDigit = num % 10; // Get last digit (e.g., 1234 % 10 = 4)
        sum = sum + lastDigit;     // Add to sum
        num = (num - lastDigit) / 10; // Remove last digit (e.g., 1234 → 123)
    }

    return sum;
}
console.log(sumOfDigits(1234)); // 10




console.log("------------------------------------ ::");
//  Problem 5: Check if number is Armstrong number
// Armstrong: sum of cubes of digits equals the number
// Example: 153 → 1³+5³+3³ = 1+125+27 = 153 (true)

// - Input: num (expected a non-negative integer).
// - Output: true if Armstrong, false otherwise. Returns null for invalid input.
// - Error modes: if num is not a number, not an integer, or negative, return null with a message.

// Approach :
// 1. Validate input: check type, integer-ness, and non-negativity.
// 2. Initialize sum = 0.
// 3. Make a copy of num to extract digits without modifying original.
// 4. While copy > 0:
//    a. Extract last digit: lastDigit = copy % 10.
//    b. Calculate cube: cube = lastDigit * lastDigit * lastDigit.
//    c. Add cube to sum.
//    d. Remove last digit: copy = (copy - lastDigit) / 10.
// 5. Compare sum with original num: if equal, return true; else false.
// 6. Edge cases: 0 → true (0³=0), 1 → true (1³=1), negative → invalid, non-integer → invalid.

function isArmstrong(num) {
    // Input validation
    if (typeof num !== 'number') {
        console.log("Invalid input: expected a number.");
        return null;
    }
    if (num % 1 !== 0) {
        console.log("Invalid input: expected an integer.");
        return null;
    }
    if (num < 0) {
        console.log("Invalid input: expected a non-negative number.");
        return null;
    }

    var sum = 0;
    var copy = num; // Work on a copy to preserve original

    // Loop to extract digits and calculate sum of cubes
    while (copy > 0) {
        var lastDigit = copy % 10; // Get last digit (e.g., 153 % 10 = 3)
        var cube = lastDigit * lastDigit * lastDigit; // Calculate cube manually
        sum = sum + cube; // Add to sum
        copy = (copy - lastDigit) / 10; // Remove last digit (e.g., 153 → 15)
    }

    // Check if sum equals original number
    if (sum === num) {
        return true;
    } else {
        return false;
    }
}
console.log(isArmstrong(153)); // true




console.log("------------------------------------ ::");
//  Problem 6: Print pattern of stars using a function
// Print a triangle pattern of given height
// Example: height=4 →
// *
// **
// ***
// ****

// - Input: height (expected a positive integer).
// - Output: prints the star pattern to console. Returns nothing.
// - Error modes: if height is not a number, not an integer, or <= 0, print a message and return.

// Approach (step-wise):
// 1. Validate input: check type, integer-ness, and positivity.
// 2. Use nested loops:
//    a. Outer loop: for each row from 1 to height.
//    b. Inner loop: for each column in the row, print '*' up to the row number.
// 3. After inner loop, print a newline (console.log()).
// 4. Edge cases: height=1 → single *, height=0 or negative → invalid.

function printStarPattern(height) {

    // validate
    if (typeof height !== 'number') {
        console.log("Invalid");
        return null;
    }
    if (height % 1 !== 0) {
        console.log("Invalid");
        return null;
    }
    if (height <= 0) {
        console.log("Invalid");
        return null;
    }

    // Outer loop for each row
    for (var row = 1; row <= height; row++) {
        var line = ""; // Build the line for this row
        // Inner loop to add stars for this row
        for (var col = 1; col <= row; col++) {
            line = line + "*"; // Append a star
        }
        // Print the line
        console.log(line);
    }
}
printStarPattern(4);
console.log("---");
printStarPattern(3);




console.log("------------------------------------ ::");
//  Problem 7: Check if string contains only digits
// Example: "12345" → true, "123a45" → false

// - Input: s (expected a string).
// - Output: boolean: true if s contains only ASCII digits '0'..'9' and has at least one character; false if any non-digit or empty.
// - Error modes: if input is not a string, print a message and return null.

// Approach (step-wise):
// 1. Validate input is a string.
// 2. If the string is empty, return false (no digits present).
// 3. Loop over each character in the string.
//    a. For each character `ch`, check if it lies between '0' and '9' using simple character comparisons.
//    b. If any character is outside this range, return false immediately.
// 4. If the loop finishes, all characters were digits → return true.
// Note: This checks only ASCII digits 0-9. It treats spaces, signs, decimals and other unicode digits as non-digit.

function containsOnlyDigits(s) {
    // validate
    if (typeof s !== 'string') {
        console.log("Invalid input");
        return null;
    }
    // Empty string has no digits -> return false
    if (s.length === 0) {
        return false;
    }

    // Check each character
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        // character comparison works: '0' <= ch <= '9' for ASCII digits
        if (!(ch >= '0' && ch <= '9')) {
            return false; // found a non-digit
        }
    }
    // All characters are digits
    return true;
}
console.log(containsOnlyDigits("12345"));   // true
console.log(containsOnlyDigits("123a45"));  // false


console.log("------------------------------------ ::");
// Problem 8: Write a function to check prime number.



console.log("------------------------------------ ::");
// Problem 9: Write a function to generate Fibonacci series.



console.log("------------------------------------ ::");
// Problem 10: Write a function to find GCD of two numbers.



console.log("------------------------------------ ::");
// Problem 11: Write a function to find unique elements in an array.


// Problem 12: Find the largest word in a sentence.



console.log("------------------------------------ ::");
// Problem 13: Find the reverse of an array.



console.log("------------------------------------ ::");
// Problem 14: Find the sum of all prime numbers up to N.



console.log("------------------------------------ ::");
// Problem 15: Find the missing number in an array from 1 to N.



console.log("------------------------------------ ::");
// Problem 16: Find the longest palindrome in a string.
