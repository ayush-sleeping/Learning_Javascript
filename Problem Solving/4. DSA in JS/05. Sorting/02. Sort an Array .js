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

// lets use the mergesort :
function sortArrayMerge(nums) {

    // If array has 0 or 1 element, it's already sorted
    if (nums.length <= 1) return nums;

    // integer division for mid (no Math.floor)
    // mid = (length is even) -> length/2; (odd) -> (length-1)/2
    var mid = 0;
    var len = nums.length;
    if (len % 2 === 0) {
        mid = len / 2;
    } else {
        mid = (len - 1) / 2;
    }

    // Copy left half
    var left = [];
    for (var i = 0; i < mid; i++) {
        left[left.length] = nums[i];
    }
    // Copy right half
    var right = [];
    for (var i = mid; i < nums.length; i++) {
        right[right.length] = nums[i];
    }

    var sortedLeft = sortArrayMerge(left);
    var sortedRight = sortArrayMerge(right);

    return mergeManual(sortedLeft, sortedRight);
}

function mergeManual(left, right) {
    var sortedArr = [];
    var i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr[sortedArr.length] = left[i];
            i++;
        } else {
            sortedArr[sortedArr.length] = right[j];
            j++;
        }
    }
    // Add remaining elements from left
    while (i < left.length) {
        sortedArr[sortedArr.length] = left[i];
        i++;
    }
    // Add remaining elements from right
    while (j < right.length) {
        sortedArr[sortedArr.length] = right[j];
        j++;
    }
    return sortedArr;
}

console.log(sortArrayMerge([29, 10, 14, 37, 14])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



// Or lets use the Quick sort :

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Function to sort an array using Quick sort
function sortArray(arr) {
    return quickSort(arr); // Call quickSort to sort the array
}

function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = arr[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];      // Choose first element as pivot
    let swapIdx = start;         // Track where to swap smaller elements

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {    // If current is less than pivot
            swapIdx++;
            swap(arr, swapIdx, i); // Move it to left of pivot
        }
    }
    swap(arr, start, swapIdx);   // Place pivot in correct position
    return swapIdx;              // Return pivot index
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end); // Partition array
        quickSort(arr, start, pivotIndex - 1);     // Sort left part
        quickSort(arr, pivotIndex + 1, end);       // Sort right part
    }
    return arr; // Return sorted array
}

console.log(sortArray([29, 10, 14, 37, 14])); // Output: [10, 14, 14, 29, 37]
