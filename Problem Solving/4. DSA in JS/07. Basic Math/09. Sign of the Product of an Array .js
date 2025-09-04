// Sign of the Product of an Array

/*
Implement a function signFunc(x) that returns:
1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.
Return signFunc(product).


Example 1:
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1


Example 2:
Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0


Example 3:
Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1


Topic : Array, Math
*/


/**
 * Approach:
 * - We are given an array of integers.
 * - We need to find the sign of the product of all elements:
 *   - If the product is positive, return 1.
 *   - If the product is negative, return -1.
 *   - If the product is zero, return 0.
 * - Instead of calculating the actual product (which can be very large), we can:
 *   - If any element is 0, the product is 0.
 *   - Count the number of negative numbers:
 *     - If the count is even, the product is positive.
 *     - If the count is odd, the product is negative.
 * - This avoids overflow and is efficient.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    var negativeCount = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return 0; // Product is zero
        } else if (nums[i] < 0) {
            negativeCount = negativeCount + 1; // Count negatives
        }
    }
    // If negative count is even, product is positive
    if (negativeCount % 2 === 0) {
        return 1;
    } else {
        return -1;
    }
};
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));



/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySum = function (nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

// Example usage:
console.log(arraySum([-1, -2, -3, -4, 3, 2, 1])); // Output: -4
console.log(arraySum([1, 5, 0, 2, -3])); // Output: 5
console.log(arraySum([-1, 1, -1, 1, -1])); // Output: -1
