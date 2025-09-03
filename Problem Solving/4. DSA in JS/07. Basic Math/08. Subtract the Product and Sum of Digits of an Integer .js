// Subtract the Product and Sum of Digits of an Integer

/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.


Example 1:
Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15


Example 2:
Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21
*/

/**
 * Approach:
 * - We need to find the product and sum of all digits of n.
 * - We extract each digit using % 10 and // 10 (division by 10).
 * - Multiply digits for product, add digits for sum.
 * - Return product - sum.
*/


/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    var product = 1;
    var sum = 0;

    // Loop until n becomes 0
    while (n > 0) {
        var digit = n % 10; // Get the last digit
        product = product * digit; // Multiply to product
        sum = sum + digit;         // Add to sum
        n = (n - digit) / 10;      // Remove last digit
    }

    // Return the difference
    return product - sum;
};

/*
Dry run:
n = 234
product:
    1 * 4 = 4,
    4 * 3 = 12,
    12 * 2 = 24
sum:
    0 + 4 = 4,
    4 + 3 = 7,
    7 + 2 = 9
result: 24 - 9 = 15
*/
