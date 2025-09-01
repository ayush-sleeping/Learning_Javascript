// Difference Between Element Sum and Digit Sum of an Array
/*
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.
Note that the absolute difference between two integers x and y is defined as |x - y|.


Example 1:
Input: nums = [1,15,6,3]
Output: 9
Explanation:
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.


Example 2:
Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.

Topics : Array, Math
*/

// Approach:
// - We need two sums:
//         - (1) element sum (sum of all numbers in the array),
//         - (2) digit sum (sum of all digits in all numbers).
// - Loop through the array to calculate the element sum.
// - For each number, extract its digits one by one (using % and /) and add them to the digit sum.
// - After both sums are calculated, return the absolute difference (always positive) between them.
// - Do not use any built-in JS features (no .reduce, .split, .toString, Math.abs, etc.).


/**
 * @param {number[]} nums
 * @return {number}
*/
var differenceOfSum = function (nums) {
    var elementSum = 0; // Sum of all elements
    var digitSum = 0;   // Sum of all digits


    for (var i = 0; i < nums.length; i++) { // Loop through each number in the array
        var num = nums[i];         // Current number
        elementSum = elementSum + num; // Add to element sum
        var temp = num;            // Copy of current number


        while (temp > 0) { // Extract digits from num and add to digitSum
            var digit = temp % 10; // Get last digit
            digitSum = digitSum + digit; // Add digit to digitSum
            temp = (temp - digit) / 10;  // Remove last digit
        }
    }


    var diff = elementSum - digitSum; // Difference
    if (diff < 0) {                   // If negative, make positive
        diff = -diff;
    }
    return diff; // Return the absolute difference
};
console.log(differenceOfSum([1, 15, 6, 3])); // Output: 9
console.log(differenceOfSum([1, 2, 3, 4]));  // Output: 0




// lets understand this question much more what exactly is being asked
// We have an array of numbers, and we need to find two sums:
// 1. Element Sum: The sum of all numbers in the array.
// 2. Digit Sum: The sum of all individual digits in all numbers.
// Finally, we return the absolute difference between these two sums.
// lets also dry run it using AI :


/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    var elementSum = 0; // Sum of all elements
    var digitSum = 0;   // Sum of all digits

    console.log("Input array:", nums);
    console.log("----- Starting Calculation -----");

    // Loop through each number in the array
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];                 // Current number
        elementSum = elementSum + num;     // Add to element sum
        console.log("Element:", num, "| Current elementSum:", elementSum);

        // Extract digits from num and add to digitSum
        var temp = num; // Copy of current number
        while (temp > 0) {
            var digit = temp % 10;         // Get last digit
            digitSum = digitSum + digit;   // Add digit to digitSum
            console.log("   Extracted digit:", digit, "| Current digitSum:", digitSum);

            temp = (temp - digit) / 10;    // Remove last digit
            console.log("   Remaining number after removing digit:", temp);
        }
        console.log("Finished processing number:", num);
        console.log("--------------------------------");
    }

    // Calculate absolute difference manually (no Math.abs)
    var diff = elementSum - digitSum; // Difference
    console.log("Raw difference (elementSum - digitSum):", diff);

    if (diff < 0) {  // If negative, make positive
        diff = -diff;
    }

    console.log("Final absolute difference:", diff);
    console.log("===== End of Calculation =====");
    return diff; // Return the absolute difference
};

console.log(differenceOfSum([1, 15, 6, 3])); // Output: 9
console.log(differenceOfSum([1, 2, 3, 4]));  // Output: 0
