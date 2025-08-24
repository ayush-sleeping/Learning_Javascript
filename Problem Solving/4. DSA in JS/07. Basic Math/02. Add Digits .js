// Add Digits

/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2

Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0

*/

/*
Approach:
While num has more than one digit (num >= 10):
    a. Initialize sum = 0.
    b. Extract each digit from num and add to sum.
    c. Update num to be sum.
When num is a single digit, return num.
 */


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    // Keep repeating until num is a single digit
    while (num >= 10) { // If num has more than one digit

        let sum = 0;         // This will store the sum of digits for this round
        let temp = num;      // Make a copy of num to extract its digits

        // Extract and add each digit of temp
        while (temp > 0) {
            // Get the last digit of temp (manual way, no built-ins)
            // (temp - (temp / 10 | 0) * 10) gives the last digit
            sum = sum + (temp - (temp / 10 | 0) * 10);
            // Remove the last digit from temp (integer division)
            temp = temp / 10 | 0;
        }
        // After adding all digits, update num to be the sum
        num = sum;
    }
    // When num is a single digit, return it
    return num;
};

console.log(addDigits(38)); // Output: 2
console.log(addDigits(0));  // Output: 0
console.log(addDigits(123)); //
