// Single Number

// Hint
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

/*
Approach :

- Count how many times each number appears
- The number that appears only once is our answer
- Go through array and count each number
- Find the number with count = 1

*/
// --------------------------------------------------------------------------------- ::

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    // For each number, count how many times it appears
    for (let i = 0; i < nums.length; i++) {

        let currentNumber = nums[i];
        let count = 0;

        // Count this number in the entire array
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === currentNumber) {
                count = count + 1;
            }
        }

        // If it appears only once, that's our answer!
        if (count === 1) {
            return currentNumber;
        }
    }
};

let testCases = [
    [2, 2, 1],           // Expected: 1
    [4, 1, 2, 1, 2],     // Expected: 4
    [1],                 // Expected: 1
    [7, 3, 7],           // Expected: 3
    [5, 5, 9, 9, 2]      // Expected: 2
];

for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
    let result1 = singleNumber([...testCase]);
    console.log(`Beginner V1:   ${result1}`);
}
