// Sort an Array

/*
Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in
    - O(nlog(n)) time complexity and
    - with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.

*/

// Approach :
// - Use selection sort algorithm to sort the array.
// - Iterate through the array and find the minimum element in the unsorted part.
// - Swap the found minimum element with the first element of the unsorted part.
// - Repeat the process for the remaining unsorted elements.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Function to sort an array using selection sort
var sortArray = function (nums) {
    // Get the length of the array
    const n = nums.length;

    // Loop through each element except the last
    for (let i = 0; i < n - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Loop through the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            // If we find a smaller element, update minIndex
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        // If minIndex changed, swap the elements
        if (minIndex !== i) {
            // Swap nums[i] and nums[minIndex]
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
    }
    // Return the sorted array
    return nums;
};

console.log(sortArray([29, 10, 14, 37, 14])); //


/*
After submitting on leetcode test cases failed :

Time Limit Exceeded
12 / 21 testcases passed
Last Executed Input
Use Testcase
nums =
[0,25063,5,25062,7,25061,9,25060,11,25059,13,25058,15,25057,17,25056,19,25055,21,25054,23,25053,25,25052,27,25051,29,25050,31,25049,33,25048,35,25047,37,25046,39,25045,41,25044,43,25043,45,25042,47,25041,49,25040, ....

only starting 2 simple test cases passed.
*/
