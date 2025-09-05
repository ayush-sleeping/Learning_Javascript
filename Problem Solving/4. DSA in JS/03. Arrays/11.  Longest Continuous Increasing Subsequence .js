// Longest Continuous Increasing Subsequence
/*
Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].


Example 1:
Input: nums = [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
4.


Example 2:
Input: nums = [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
increasing.


Topics: Array
*/


/**
 * Approach:
 * - We are given an array of integers.
 * - We need to find the length of the longest continuous (contiguous) subarray where each element is strictly greater than the previous one.
 * - Use two variables:
 *   1. currentLength: to count the length of the current increasing subarray.
 *   2. maxLength: to keep track of the maximum length found so far.
 * - Loop through the array:
 *   - If the current element is greater than the previous one, increment currentLength.
 *   - Otherwise, reset currentLength to 1 (start a new subarray).
 *   - After each step, update maxLength if currentLength is greater.
 * - At the end, return maxLength.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    var maxLength = 1;
    var currentLength = 1;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLength = currentLength + 1;
        } else {
            currentLength = 1;
        }
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    return maxLength;
};


/**
 * @param {number[]} nums
 * @return {number}
*/
var findLengthOfLCIS = function (nums) {
    // If the array is empty, the answer is 0
    if (nums.length === 0) {
        return 0;
    }

    var maxLength = 1;      // To keep track of the maximum length found
    var currentLength = 1;  // To count the current increasing subarray

    // Loop through the array starting from the second element
    for (var i = 1; i < nums.length; i++) {
        // If current number is greater than previous, increase currentLength
        if (nums[i] > nums[i - 1]) {
            currentLength = currentLength + 1;
        } else {
            // Otherwise, reset currentLength to 1
            currentLength = 1;
        }
        // Update maxLength if currentLength is greater
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    // Return the maximum length
    return maxLength;
}
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
