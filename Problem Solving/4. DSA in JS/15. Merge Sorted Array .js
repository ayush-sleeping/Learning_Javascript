/*
Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

// Use two pointers: one for nums1 and one for nums2.
// Compare the current elements from both arrays.
// Put the smaller one into the correct position in nums1.
// If one array runs out, copy the rest from the other array.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // Start filling nums1 from the end
    var i = m - 1; // pointer for nums1's real elements
    var j = n - 1; // pointer for nums2
    var k = m + n - 1; // pointer for the end of nums1

    // Compare from the back and fill nums1
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i = i - 1;
        } else {
            nums1[k] = nums2[j];
            j = j - 1;
        }
        k = k - 1;
    }

    // If nums2 still has elements, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j = j - 1;
        k = k - 1;
    }
    // If nums1 still has elements, they're already in place
};

// --- Testing the function ---
var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // [1,2,2,3,5,6]

var nums3 = [1];
var nums4 = [];
merge(nums3, 1, nums4, 0);
console.log(nums3); // [1]

var nums5 = [0];
var nums6 = [1];
merge(nums5, 0, nums6, 1);
console.log(nums5); // [1]
