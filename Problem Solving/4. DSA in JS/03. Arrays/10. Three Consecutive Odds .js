// Three Consecutive Odds

/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.


Example 1:
Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.


Example 2:
Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.


Topics : Array
*/


/**
 * Approach:
 * - We are given an array of integers.
 * - We need to check if there are any three numbers in a row (consecutive) that are all odd.
 * - Loop through the array, and for each position, check the current number and the next two numbers.
 * - If all three are odd, return true.
 * - If we reach the end of the array without finding such a sequence, return false.
 * - We do not use any built-in JS methods.
*/



/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
            return true;
        }
    }
    return false;
};
console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));





/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    // Loop through the array, stopping 2 elements before the end
    for (var i = 0; i < arr.length - 2; i++) {
        console.log("Checking indices", i, i + 1, i + 2, ":", arr[i], arr[i + 1], arr[i + 2]);
        // Check if arr[i], arr[i+1], and arr[i+2] are all odd
        var isOdd1 = arr[i] % 2 === 1;
        var isOdd2 = arr[i + 1] % 2 === 1;
        var isOdd3 = arr[i + 2] % 2 === 1;
        console.log("  Odd status:", isOdd1, isOdd2, isOdd3);
        if (isOdd1 && isOdd2 && isOdd3) {
            console.log("  Found three consecutive odds at indices", i, i + 1, i + 2);
            return true;
        }
    }
    // No three consecutive odds found
    console.log("No three consecutive odds found in the array.");
    return false;
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
