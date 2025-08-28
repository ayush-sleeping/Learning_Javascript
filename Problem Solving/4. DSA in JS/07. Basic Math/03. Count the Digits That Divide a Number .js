// Count the Digits That Divide a Number :
/*
Given an integer num, return the number of digits in num that divide num.
An integer val divides nums if nums % val == 0.

Example 1:
Input: num = 7
Output: 1
Explanation: 7 divides itself, hence the answer is 1.

Example 2:
Input: num = 121
Output: 2
Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

Example 3:
Input: num = 1248
Output: 4
Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
*/

// Approach :
/**
- Input: num (expected a non-negative integer).
- Output: number of digits (each occurrence counted) d such that d != 0 and num % d === 0.
- Notes: skip digit 0 (cannot divide). If input invalid, print message and return null.

Approach (step-wise):
 * 1. Validate input: must be a number, integer, and non-negative. If negative, work with absolute value.
 * 2. Save a copy of the original number (originalNum) for divisibility checks.
 * 3. Use a loop to extract digits from the right using:
 *      digit = copy % 10
 *      copy = (copy - digit) / 10   // integer division without built-ins
 * 4. For each extracted digit:
 *      - if digit === 0, skip it (can't divide by zero)
 *      - otherwise check if originalNum % digit === 0; if true, increment counter
 * 5. Repeat until copy becomes 0.
 * 6. Return the counter.
 *
Complexity: O(log10(num)) time, O(1) extra space.
 */


/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    // validate
    if (typeof num !== 'number' || num % 1 !== 0) {
        console.log("Invalid input: expected an integer number.");
        return null;
    }
    // Work with absolute value to handle negative inputs gracefully
    if (num < 0) {
        num = -num;
    }
    // Edge case: if num is 0, there is no valid digit that can divide (0 digit cannot divide), return 0.
    if (num === 0) {
        return 0;
    }

    var originalNum = num; // preserve original for divisibility checks
    var count = 0;
    var copy = num;

    // Extract digits one by one from the right
    while (copy > 0) {
        var digit = copy % 10;               // last digit
        if (digit !== 0) {                   // skip zero digit
            if (originalNum % digit === 0) { // check divisibility
                count = count + 1;
            }
        }
        // remove last digit using integer division
        copy = (copy - digit) / 10;
    }

    return count;
};

console.log(countDigits(7));    // expected 1
console.log(countDigits(121));  // expected 2 (1 divides 121 twice)
console.log(countDigits(1248)); // expected 4 (all digits divide)
