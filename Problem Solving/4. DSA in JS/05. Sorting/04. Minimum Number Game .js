// Minimum Number Game :
/*
You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
Now, first Bob will append the removed element in the array arr, and then Alice does the same.
The game continues until nums becomes empty.
Return the resulting array arr.


Example 1:
Input: nums = [5,4,2,3]
Output: [3,2,5,4]
Explanation: In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].


Example 2:
Input: nums = [2,5]
Output: [5,2]
Explanation: In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends. So arr = [5,2].

Topics : Array, Sorting, Heap (Priority Queue)
*/

/**
 * Minimum Number Game
 * Approach:
 * 1. Repeat until nums is empty:
 *    a. Find and remove the smallest number (Alice's turn).
 *    b. Find and remove the next smallest number (Bob's turn).
 *    c. Bob appends his number to arr, then Alice appends hers.
 * 2. Return arr.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    var arr = []; // This will store the result

    // Keep playing rounds until nums is empty
    while (nums.length > 0) {
        // --- Alice's turn ---
        // Find the minimum value and its index in nums
        var minA = nums[0], idxA = 0;
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] < minA) {
                minA = nums[i]; // Update minimum value
                idxA = i;      // Update index of minimum
            }
        }
        // Remove Alice's minimum from nums by shifting elements left
        for (var i = idxA; i < nums.length - 1; i++) {
            nums[i] = nums[i + 1]; // Move each element one step left
        }
        nums.length = nums.length - 1; // Shorten the array by one

        // --- Bob's turn ---
        // Find the next minimum value and its index in nums
        var minB = nums[0], idxB = 0;
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] < minB) {
                minB = nums[i]; // Update minimum value
                idxB = i;      // Update index of minimum
            }
        }
        // Remove Bob's minimum from nums by shifting elements left
        for (var i = idxB; i < nums.length - 1; i++) {
            nums[i] = nums[i + 1]; // Move each element one step left
        }
        nums.length = nums.length - 1; // Shorten the array by one

        // --- Appending to result ---
        // Bob appends his number first, then Alice
        arr[arr.length] = minB; // Add Bob's number to arr
        arr[arr.length] = minA; // Add Alice's number to arr
    }
    // Return the final result array
    return arr;
};


// Example usage:
console.log(numberGame([5, 4, 2, 3])); // Output: [3,2,5,4]
console.log(numberGame([2, 5])); // Output: [5,2]
