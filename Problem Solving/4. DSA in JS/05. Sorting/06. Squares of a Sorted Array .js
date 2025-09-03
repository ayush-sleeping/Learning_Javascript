// Squares of a Sorted Array
/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].


Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Topics : Array, Two Pointers, Sorting
*/

/**
 * Approach:
 * - First, create a new array to store the squares of each number.
 * - Then, manually sort the squared array using selection sort.
 * - Applying Selection sort
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    var squares = [];
    for (var i = 0; i < nums.length; i++) {
        squares[i] = nums[i] * nums[i];
    }


    for (var i = 0; i < squares.length - 1; i++) {
        var minIndex = i;

        for (var j = i + 1; j < squares.length; j++) {
            if (squares[j] < squares[minIndex]) {
                minIndex = j;
            }
        }

        var temp = squares[i];
        squares[i] = squares[minIndex];
        squares[minIndex] = temp;
    }
    return squares;
};



// ---------------------------------------------------------------------- ::
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // Square each element and store in a new array
    var squares = [];
    for (var i = 0; i < nums.length; i++) {
        squares[i] = nums[i] * nums[i];
        // console.log("Squared nums[" + i + "] =", nums[i], "->", squares[i]);
    }
    // console.log("Array after squaring:", squares);

    // Manually sort the squares array using selection sort
    for (var i = 0; i < squares.length - 1; i++) {
        // Assume the current position is the minimum
        var minIndex = i;
        // console.log("\nSelection sort pass", i, "- starting at index", i, "value:", squares[i]);
        for (var j = i + 1; j < squares.length; j++) {
            // console.log("  Comparing squares[" + j + "] =", squares[j], "with current min squares[" + minIndex + "] =", squares[minIndex]);
            if (squares[j] < squares[minIndex]) {
                minIndex = j;
                // console.log("    New minIndex found at", minIndex, "with value", squares[minIndex]);
            }
        }
        // Swap the found minimum with the current position
        if (minIndex !== i) {
            // console.log("  Swapping squares[" + i + "] =", squares[i], "with squares[" + minIndex + "] =", squares[minIndex]);
        }
        var temp = squares[i];
        squares[i] = squares[minIndex];
        squares[minIndex] = temp;
        // console.log("  Array after swap:", squares);
    }

    // Return the sorted array
    // console.log("\nFinal sorted array:", squares);
    return squares;
};

var nums1 = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums1)); // Output: [0, 1, 9, 16, 100]

var nums2 = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums2)); // Output: [4, 9, 9, 49, 121]

/*
How this code works:
- First, we square every element and store it in a new array.
- Then, we use selection sort to sort the squared values in ascending order.
*/
