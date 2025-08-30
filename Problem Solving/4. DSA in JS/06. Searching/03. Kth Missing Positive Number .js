// Kth Missing Positive Number ::
/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
Return the kth positive integer that is missing from this array.


Example 1:
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
*/

// arr = [2,3,4,7,11], k = 5
// count = 4
// 11 <= 9

// Linear search approach to find the kth missing positive number
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + count) {
            count++;
        }
    }
    return k + count;
};



// ------------------------------------------------------------------::
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */


var findKthPositive = function (arr, k) {
    // 'count' will keep track of how many numbers are missing so far
    let count = 0;

    // Loop through each number in the given array
    for (let i = 0; i < arr.length; i++) {
        /**
         * Idea:
         * If arr[i] <= k + count,
         * then it means this number exists within the first (k + count) natural numbers.
         * So before reaching arr[i], there must be some missing numbers.
         * For each such case, we increase 'count'.
         */
        if (arr[i] <= k + count) {
            count++; // Increase count to account for the missing number
        }
        // After this step, k + count always points to the candidate "Kth missing number"
    }

    /**
     * When the loop ends:
     * - 'count' tells how many numbers we skipped so far.
     * - Adding this count to 'k' gives us the final answer.
     */
    return k + count;
};

// Example usage
// Array: [2, 3, 4, 7, 11]
// Missing numbers in order: [1, 5, 6, 8, 9, 10, ...]
// The 5th missing number is 9
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // Output: 9
// [5,6,7,...]
// console.log(findKthPositive([1, 2, 3, 4], 2)); // Output: 6




// Step-by-step explanation for arr = [2,3,4,7,11], k = 5:
// We need to find the 5th missing positive number.
// Missing positives: 1 (before 2), then after 2: 3,4 are present, so next missing is 5, then 6, then 7 is present, so next is 8, then 9, etc.
// The code simulates this by counting how many numbers are "covered" by the array up to a certain point.
//
// Initial: count = 0, k = 5
// i=0, arr[0]=2, k + count = 5 + 0 = 5, 2 <= 5? Yes, so count = 1 (missing 1)
// i=1, arr[1]=3, k + count = 5 + 1 = 6, 3 <= 6? Yes, count = 2 (missing 1, and now 3 is present but we're counting the gap)
// Wait, actually: the condition arr[i] <= k + count means we're checking if arr[i] is within the first (k + count) positives.
// For i=1, count=1, k+count=6, 3 <= 6, yes, count=2
// i=2, arr[2]=4, k+count=5+2=7, 4 <= 7, yes, count=3
// i=3, arr[3]=7, k+count=5+3=8, 7 <= 8, yes, count=4
// i=4, arr[4]=11, k+count=5+4=9, 11 <= 9? No, so count remains 4
// End loop, count = 4
// Return k + count = 5 + 4 = 9
//
// So, count represents the number of missing positives before the kth one.
// The kth missing is k + count = 9.
