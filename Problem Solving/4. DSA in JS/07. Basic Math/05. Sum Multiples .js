// Sum Multiples ::
/*
Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
Return an integer denoting the sum of all numbers in the given range satisfying the constraint.


Example 1:
Input: n = 7
Output: 21
Explanation:
    - Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7.
    - The sum of these numbers is 21.


Example 2:
Input: n = 10
Output: 40
Explanation:
    - Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10.
    - The sum of these numbers is 40.


Example 3:
Input: n = 9
Output: 30
Explanation:
    - Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9.
    - The sum of these numbers is 30.

Topics : Math
*/

// Approach ::
// ------------------------------------------------ ::
// - We need to find the sum of all numbers from 1 to n that are divisible by 3, 5, or 7.
// - Loop through each number from 1 to n.
// - For each number, check if it is divisible by 3, 5, or 7 using the % operator.
// - If it is, add it to a running sum.
// - After the loop, return the sum.
// - Do not use any built-in JS features (no .filter, .reduce, etc.).

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum = sum + i;
        }
    }
    return sum;
};




// Now lets see this problem with  ::
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    var sum = 0; // Initialize sum to 0

    // Loop through all numbers from 1 to n
    for (var i = 1; i <= n; i++) {
        // Check if i is divisible by 3, 5, or 7
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum = sum + i; // Add i to sum if condition is true
        }
    }

    return sum; // Return the final sum
};
console.log(sumOfMultiples(7));  // Output: 21
console.log(sumOfMultiples(10)); // Output: 40
console.log(sumOfMultiples(9));  // Output: 30
