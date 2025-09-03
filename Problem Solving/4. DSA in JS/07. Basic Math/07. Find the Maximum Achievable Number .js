// Find the Maximum Achievable Number

/*
Given two integers, num and t. A number x is achievable if it can become equal to num after applying the following operation at most t times:
Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
Return the maximum possible value of x.


Example 1:
Input: num = 4, t = 1
Output: 6
Explanation:
Apply the following operation once to make the maximum achievable number equal to num:
Decrease the maximum achievable number by 1, and increase num by 1.


Example 2:
Input: num = 3, t = 2
Output: 7
Explanation:
Apply the following operation twice to make the maximum achievable number equal to num:
Decrease the maximum achievable number by 1, and increase num by 1.

Topic : Math
*/


/**
 * Approach:
 * - We are given two numbers: num and t.
 * - We can perform the operation at most t times:
 *   - Increase or decrease x by 1, and simultaneously increase or decrease num by 1.
 * - To maximize x, we want to increase x by 1 and increase num by 1 in each operation.
 * - After t operations:
 *   - x will be increased by t
 *   - num will be increased by t
 * - So, the maximum achievable x is num + t + t = num + 2 * t
 * - This is because both x and num move together, so their difference stays the same, but both can be increased by t.
*/



/*
Dry run:

Example 1:
    num = 4, t = 1
    Operation 1: x + 1, num + 1
    Maximum x = 4 + 2*1 = 6

Example 2:
    num = 3, t = 2
    Operation 1: x + 1, num + 1
    Operation 2: x + 1, num + 1
    Maximum x = 3 + 2*2 = 7
*/


/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
    // Maximum achievable value is num + 2 * t
    return num + 2 * t;
};

console.log(theMaximumAchievableX(4, 1)); // Expected 6
console.log(theMaximumAchievableX(3, 2)); // Expected 7
console.log(theMaximumAchievableX(10, 5)); // Extra test -> Expected 20
