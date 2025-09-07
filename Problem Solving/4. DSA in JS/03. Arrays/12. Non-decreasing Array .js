// Non-decreasing Array
/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).


Example 1:
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.


Example 2:
Input: nums = [4,2,1]
Output: false
Explanation: You cannot get a non-decreasing array by modifying at most one element.


Topics : Array
*/


/**
 * Approach:
 * - We are given an array of integers.
 * - We need to check if we can make the array non-decreasing by modifying at most one element.
 * - An array is non-decreasing if for every i, nums[i] <= nums[i+1].
 * - This is an array problem because we need to check and possibly change elements based on their neighbors.
 *
 * Steps:
 * 1. Loop through the array and look for places where nums[i] > nums[i+1].
 * 2. If we find more than one such place, return false (can't fix with one change).
 * 3. If we find only one, we have two options:
 *    - Change nums[i] to nums[i+1]
 *    - Or change nums[i+1] to nums[i]
 *    - We need to check which change keeps the array non-decreasing.
 * 4. If we can fix the array with one change, return true.
 *
 * - We are working with array indices, neighbors, and need to check/modify elements in place.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    var count = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count = count + 1;
            if (count > 1) {
                return false;
            }
            if (i === 0 || nums[i - 1] <= nums[i + 1]) {
                nums[i] = nums[i + 1];
            } else {
                nums[i + 1] = nums[i];
            }
        }
    }
    return true;
};
console.log(checkPossibility([4, 2, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false


/**
 * @param {number[]} nums
 * @return {boolean}
*/
var checkPossibility = function (nums) {
    var count = 0; // To count how many changes we need

    for (var i = 0; i < nums.length - 1; i++) { // Loop through the array
        console.log("Checking pair:", nums[i], nums[i + 1]);


        if (nums[i] > nums[i + 1]) { // If current is greater than next, it's a problem
            count = count + 1; // We need to fix this
            console.log("  Problem found at index", i, ":", nums[i], ">", nums[i + 1], "| Fix count:", count);


            if (count > 1) { // If more than one fix needed, return false
                console.log("  More than one fix needed. Returning false.");
                return false;
            }


            // Decide which element to change:
            if (i === 0 || nums[i - 1] <= nums[i + 1]) {
                // If at the start or previous is less than or equal to next, lower current
                console.log("  Lowering nums[" + i + "] from", nums[i], "to", nums[i + 1]);
                nums[i] = nums[i + 1]; // Change nums[i] to nums[i+1]
            } else {
                // Otherwise, raise next
                console.log("  Raising nums[" + (i + 1) + "] from", nums[i + 1], "to", nums[i]);
                nums[i + 1] = nums[i]; // Change nums[i+1] to nums[i]
            }


        } else {
            console.log("  No problem at index", i, "|", nums[i], "<=", nums[i + 1]);
        }
        // If nums[i] <= nums[i+1], do nothing and continue


    }
    console.log("Finished checking. Total fixes needed:", count, "| Returning", count <= 1);
    return true; // If we never needed more than one change, return true
}
console.log(checkPossibility([4, 2, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false
