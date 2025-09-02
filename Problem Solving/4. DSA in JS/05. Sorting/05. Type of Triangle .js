// Type of Triangle

/*
You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.


Example 1:
Input: nums = [3,3,3]
Output: "equilateral"
Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.


Example 2:
Input: nums = [3,4,5]
Output: "scalene"
Explanation:
nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3.
Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
As all the sides are of different lengths, it will form a scalene triangle.


Topics: Array, Math, Sorting
*/


// Approach:
// - We are given an array of 3 integers representing the sides of a triangle.
// - First, check if these sides can actually form a triangle using the triangle inequality:

// For any triangle, the sum of any two sides must be greater than the third side.
// That is: a + b > c, a + c > b, b + c > a
// - To make these checks easier, sort the array in ascending order (so sides[0] <= sides[1] <= sides[2]).

// For 3 elements, you can use simple manual sorting (selection sort or bubble sort).
// - After sorting, check the triangle inequality: sides[0] + sides[1] > sides[2]

// If not, return "none" (cannot form a triangle).
// - If it can form a triangle, check the type:
// - If all sides are equal: "equilateral"
// - If exactly two sides are equal: "isosceles"
// - If all sides are different: "scalene"
// - Return the type as a string.

// Sorting to use:
// - For just 3 elements, manual sorting (selection sort or bubble sort)


/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    // Sorting of the array (ascending order)
    // using a selection sort for 3 elements
    for (var i = 0; i < 2; i++) {
        // Find the minimum element in the remaining unsorted part
        var minIndex = i;
        for (var j = i + 1; j < 3; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        var temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }

    // Check if the sides can form a triangle using triangle inequality
    // For a triangle: sum of any two sides > third side
    if (nums[0] + nums[1] <= nums[2]) {
        return "none";
    }

    // Determine the type of triangle
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
        return "equilateral";
    } else if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
        return "isosceles";
    } else {
        return "scalene";
    }
};
console.log(triangleType([3, 3, 3])); // "equilateral"
console.log(triangleType([3, 4, 5])); // "scalene"
console.log(triangleType([3, 3, 4])); // "isosceles"
console.log(triangleType([1, 2, 3])); // "none"




/*
Lets again understand, how this code works:
- First, we manually sort the array so that comparisons are easier.
- Then, we check if the sides can form a triangle using the triangle inequality rule.
- If not, we return "none".
- If yes, we check for all sides equal (equilateral), exactly two sides equal (isosceles), or all sides different (scalene).
- The function returns the type as a string.
*/
