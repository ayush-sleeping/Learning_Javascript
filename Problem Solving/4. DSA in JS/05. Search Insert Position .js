/*
LeetCode: Search Insert Position - BEGINNER FRIENDLY EXPLANATION

Problem: Given sorted array + target, find index where target is (or should be)

UNDERSTANDING THE EXAMPLES:

Example 1: nums = [1,3,5,6], target = 5
- Array: [1, 3, 5, 6]
- Index:  0  1  2  3
- Target: 5
- 5 exists at index 2 → Return 2

Example 2: nums = [1,3,5,6], target = 2
- Array: [1, 3, 5, 6]
- Index:  0  1  2  3
- Target: 2
- 2 doesn't exist, but should go between 1 and 3
- Position: [1, 2, 3, 5, 6] → 2 should be at index 1 → Return 1

Example 3: nums = [1,3,5,6], target = 7
- Array: [1, 3, 5, 6]
- Index:  0  1  2  3
- Target: 7
- 7 doesn't exist, should go after 6
- Position: [1, 3, 5, 6, 7] → 7 should be at index 4 → Return 4
*/

// SOLUTION 1: SUPER BEGINNER APPROACH (Linear Search)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) { // Go through each number one by one
        if (nums[i] === target) {  // Case 1: Found exact match
            return i;
        }
        if (nums[i] > target) { // Case 2: Current number is bigger than target, This means target should go BEFORE this position
            return i;
        }
    }
    return nums.length;  // Case 3: We went through whole array and target is bigger than everything, So it should go at the end
}

nums = [1, 3, 5, 6];
target = 5;
console.log(`Search Insert Position: ${searchInsert(nums, target)}`); // Output:
