// Find All Numbers Disappeared in an Array

/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Topics : Array, Hash Table
*/

/*
PROBLEM UNDERSTANDING:
- Array has n integers
- Each integer is in range [1, n]
- Find which numbers from 1 to n are missing
- Example: [4,3,2,7,8,2,3,1]
        nums = [4,3,2,7,8,2,3,1]
        Range = [1...8]
        Present = {1,2,3,4,7,8}
        → missing [5,6]

KEY INSIGHT: We have numbers 1 to n, array length is n
So we need to find which numbers from 1 to n don't appear in array
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length;

    // Creating hash table of size n+1 initialized to false
    let hashTable = [];
    for (let i = 0; i <= n; i++) {
        hashTable[i] = false; // false means number not found yet
    }

    // Marking all numbers present in nums
    for (let i = 0; i < n; i++) {
        let value = nums[i];
        hashTable[value] = true; // mark as present
    }

    // Collecting missing numbers
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (hashTable[i] === false) {
            result[result.length] = i; // push
        }
    }
    return result;
}
let nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
let nums2 = [1, 1];

console.log(findDisappearedNumbers(nums1)); // [5,6]
console.log(findDisappearedNumbers(nums2)); // [2]





console.log("------------------------------------ ::");
// understand how this Hash table works using AI  ::
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    // create hash table
    let tableSize = nums.length;
    let hashTable = [];

    // empty arrays for each slot
    for (let i = 0; i < tableSize; i++) {
        hashTable[i] = [];
    }

    console.log("Empty hash table with", tableSize, "slots");

    // hash function - convert number to table index
    function hash(number) {
        return number % tableSize;
    }

    // add all numbers from input array to hash table
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        let index = hash(number);
        // add to the bucket at this index
        hashTable[index].push(number);
        console.log("Added", number, "to index", index);
    }
    console.log("Hash table after adding all numbers:", hashTable);

    // function - see is a number exists in hash table
    function exists(number) {
        let index = hash(number);
        let bucket = hashTable[index];

        for (let j = 0; j < bucket.length; j++) {
            if (bucket[j] === number) {
                return true;
            }
        }
        return false;
    }

    // Find missing numbers by checking 1 to n
    let missing = [];

    console.log("\nChecking each number from 1 to", nums.length, ":");

    for (let i = 1; i <= nums.length; i++) {
        if (exists(i)) {
            console.log(i, "exists ✓");
        } else {
            console.log(i, "MISSING ✗");
            missing.push(i);
        }
    }

    return missing;
};

console.log("----- SOLVING [4,3,2,7,8,2,3,1] ");
let result1 = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
console.log("Final answer:", result1);

console.log("\n----- SOLVING [1,1] ");
let result2 = findDisappearedNumbers([1, 1]);
console.log("Final answer:", result2);
