// Find if Digit Game Can Be Won

/*
You are given an array of positive integers nums.
Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.
Return true if Alice can win this game, otherwise, return false.



Example 1:
Input: nums = [1,2,3,4,10]
Output: false
Explanation:
Alice cannot win by choosing either single-digit or double-digit numbers.


Example 2:
Input: nums = [1,2,3,4,5,14]
Output: true
Explanation:
Alice can win by choosing single-digit numbers which have a sum equal to 15.


Example 3:
Input: nums = [5,5,5,25]
Output: true
Explanation:
Alice can win by choosing double-digit numbers which have a sum equal to 25.


Topics : Array, Math
*/


/**
 * Approach:
 * - Alice can choose either all single-digit numbers (1-9) or all double-digit numbers (10-99) from the array.
 * - The rest of the numbers go to Bob.
 * - Alice wins if the sum of her chosen numbers is strictly greater than the sum of Bob's numbers.
 * - To solve:
 *   1. Calculate the sum of all single-digit numbers in the array.
 *   2. Calculate the sum of all double-digit numbers in the array.
 *   3. Calculate the total sum of all numbers in the array.
 *   4. For both cases (Alice picks single-digit or double-digit):
 *      - Bob's sum = total sum - Alice's sum
 *      - If Alice's sum > Bob's sum, return true.
 *   5. If neither case works, return false.
 * - Do not use any built-in JS methods (like filter, reduce,
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    var singleDigitSum = 0;
    var doubleDigitSum = 0;
    var totalSum = 0;

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        totalSum = totalSum + num;

        if (num >= 1 && num <= 9) {
            singleDigitSum = singleDigitSum + num;
        } else if (num >= 10 && num <= 99) {
            doubleDigitSum = doubleDigitSum + num;
        }
    }

    var bobIfAliceSingle = totalSum - singleDigitSum;
    var bobIfAliceDouble = totalSum - doubleDigitSum;

    if (singleDigitSum > bobIfAliceSingle) {
        return true;
    }
    if (doubleDigitSum > bobIfAliceDouble) {
        return true;
    }
    return false;
};

console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    // Variables to store sums
    var singleDigitSum = 0;   // Sum of numbers 1-9
    var doubleDigitSum = 0;   // Sum of numbers 10-99
    var totalSum = 0;         // Sum of all numbers

    // Loop through the array and calculate sums
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        totalSum = totalSum + num;

        // Check if single-digit
        if (num >= 1 && num <= 9) {
            singleDigitSum = singleDigitSum + num;
        }
        // Check if double-digit
        if (num >= 10 && num <= 99) {
            doubleDigitSum = doubleDigitSum + num;
        }
    }

    // Calculate Bob's sum for both cases
    var bobIfAliceSingle = totalSum - singleDigitSum;
    var bobIfAliceDouble = totalSum - doubleDigitSum;

    // Check if Alice can win in either case
    if (singleDigitSum > bobIfAliceSingle) {
        return true;
    }
    if (doubleDigitSum > bobIfAliceDouble) {
        return true;
    }
    // If neither, Alice cannot win
    return false;
