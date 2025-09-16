// Rotate Array
/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]


Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Topics : Array, Math, Two Pointers
*/


/*
APPROACH ::
- We are given an array nums and an integer k. We need to rotate the array to the right by k steps, in-place.
- If k is greater than the array length, we use k = k % n to avoid unnecessary rotations.
- The optimal way is to use the reversal algorithm, which works in O(n) time and O(1) space.

Steps:
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the remaining n - k elements.

Why this works:
- After reversing the whole array, the elements that need to be at the front are at the back, but in reverse order.
- Reversing the first k elements puts them in the correct order at the front.
- Reversing the rest puts the remaining elements in the correct order at the back.

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;
    if (k === 0) {
        return 0;
    }

    function reverse(start, end) {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]



// lets understand each line via comments
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length;              // Get the length of the array
    k = k % n;                        // If k > n, only rotate k % n times
    if (k === 0) {                    // If no rotation needed, exit early
        return 0;                     // (LeetCode expects no return, but this is safe)
    }

    function reverse(start, end) {    // Helper function to reverse part of the array
        while (start < end) {         // Use two pointers: start and end
            let temp = nums[start];   // Store left value in temp
            nums[start] = nums[end];  // Move right value to left position
            nums[end] = temp;         // Move temp (original left) to right position
            start++;                  // Move start pointer right
            end--;                    // Move end pointer left
        }
    }
    reverse(0, n - 1);                // Step 1: Reverse the entire array
    reverse(0, k - 1);                // Step 2: Reverse the first k elements
    reverse(k, n - 1);                // Step 3: Reverse the remaining n-k elements
};



var rotate = function (nums, k) {
    let n = nums.length;                  // Get the length of the array
    k = k % n;                            // If k > n, only rotate k % n times
    let rotated = [];                     // Create a new array to store rotated result

    // First loop: Place each element at its new rotated position
    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n;       // Calculate the new index for nums[i] after rotation
        rotated[newIndex] = nums[i];      // Place nums[i] at its new index in rotated array
    }

    // Second loop: Copy rotated array back to original nums array
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];             // Overwrite nums[i] with the rotated value
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]
