// Search in Rotated Sorted Array
/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
*/

// Lets try to do this by linear search ::

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) { // O(n)
        if (target === nums[i]) {
            return i;
        }
    }
    return -1;
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1

// space complexity: O(1)




// Global Linear Search ::
// -----------------------
var globalLinearSearch = function (nums, target) {
    const result = [];
    for (let i = 0; i < nums.length; i++) { // O(n)
        if (target === nums[i]) {
            result.push(i);
        }
    }
    if (result.length === 0) {
        return -1;
    }
    return result;
};
console.log(globalLinearSearch([4, 5, 6, 7, 0, 1, 2, 0, 1, 2], 0)); // Output: [4,7]
console.log(globalLinearSearch([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(globalLinearSearch([1], 0)); // Output: -1

// Time Complexity: O(n)
// Space Complexity: O(n)



// Topic : Array, Binary Search
// -----------------------
/* Approach ::

- Invariant: the target (if present) is always within the current window [left, right].
- Use binary search (O(log n)). At each step compute mid = left + ((right - left) >> 1) (no Math.floor).
- If nums[mid] == target → return mid.
- Otherwise, exactly one half is sorted:
    - If nums[left] <= nums[mid], the left half [left..mid] is sorted.
        - If target ∈ [nums[left], nums[mid]) → search left (right = mid-1).
        - Else → search right (left = mid+1).
    - Else the right half [mid..right] is sorted.
        - If target ∈ (nums[mid], nums[right]] → search right (left = mid+1).
        - Else → search left (right = mid-1).
- Repeat until left > right; return -1 if not found.

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while (left <= right) {
        // Manual calculation for mid (no Math.floor)
        var mid = left + ((right - left) >> 1); // Bitwise right shift for integer division
        if (nums[mid] === target) {
            return mid; // Found target
        }
        // Check if left half is sorted
        if (nums[left] <= nums[mid]) {
            // Target in left sorted half?
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Search left half
            } else {
                left = mid + 1; // Search right half
            }
        } else {
            // Right half is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
    }
    return -1; // Not found
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1



function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}
console.log(binarySearch([4, 5, 6, 7, 8, 9, 10], 0)); // Output: -1
console.log(binarySearch([4, 5, 6, 7, 8, 9, 10], 5)); // Output: 1
console.log(binarySearch([4, 5, 6, 7, 8, 9, 10], 10)); // Output: 6
