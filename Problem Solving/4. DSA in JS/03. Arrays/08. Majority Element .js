/*
Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// Count how many times each number appears.
// If a number appears more than n/2 times (where n is the array length), that's the answer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var n = nums.length;
    // Calculate majority threshold manually (integer division)
    var majorityCount = 0;
    var temp = n;
    while (temp >= 2) {
        temp = temp - 2;
        majorityCount = majorityCount + 1;
    }
    // Now majorityCount is n/2 floored

    // Outer loop: pick each number
    for (var i = 0; i < n; i++) {
        var currentNum = nums[i]; // Simple variable name
        var count = 0;

        // Inner loop: count how many times currentNum appears
        for (var j = 0; j < n; j++) {
            if (nums[j] === currentNum) {
                count = count + 1;
            }
        }

        // If count > majorityCount, return currentNum
        if (count > majorityCount) {
            return currentNum;
        }
    }
    return -1; // Should never reach here (problem guarantees majority exists)
};

console.log(majorityElement([3, 2, 3]));          // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));  // Output: 2
