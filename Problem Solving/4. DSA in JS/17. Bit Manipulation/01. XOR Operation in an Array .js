// XOR Operation in an Array
/*
You are given an integer n and an integer start.
Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.
Return the bitwise XOR of all elements of nums.


Example 1:
Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.


Example 2:
Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.


Topics : Math, Bit Manipulation
*/

// What is Bit Manipulation ???
// Bit Manipulation means performing operations directly on the binary representation (bits) of numbers.
// Common bitwise operations: AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>).
// It is used in optimization, cryptography, checking even/odd, swapping numbers, etc.

// What is XOR Operation in Bit Manipulation ???
// XOR (^) stands for "Exclusive OR".
// Rule: 1 ^ 1 = 0, 0 ^ 0 = 0, 1 ^ 0 = 1, 0 ^ 1 = 1
// In other words: it returns 1 if bits are different, 0 if they are same.
// Example: 5 ^ 3
//     5 -> 101 (in binary)
//     3 -> 011 (in binary)
//     XOR -> 110 = 6



// Approach to solve this :
//
// 1. We are given two inputs: n (length of array) and start (first element rule).
// 2. The array is not directly given, but we can generate it using the formula:
//        nums[i] = start + 2 * i
//    Example: n=5, start=0 → nums = [0, 2, 4, 6, 8]
//
// 3. We don’t actually need to STORE the whole array (that would use extra space).
//    Instead, we can calculate each element on the fly inside a loop.
//
// 4. XOR operation has these useful properties:
//       - x ^ 0 = x  (starting point can be 0)
//       - x ^ x = 0  (same numbers cancel out)
//       - Order does not matter
//
// 5. So, we initialize a variable (say result = 0).
//
// 6. Loop from i = 0 to n-1:
//       - Compute nums[i] = start + 2 * i
//       - Do result = result ^ nums[i]
//
// 7. At the end of the loop, result will hold the XOR of all elements.
//
// 8. Return result.


/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    var result = 0; // Start with 0 because x ^ 0 = x

    // Loop to generate nums[i] and apply XOR
    for (var i = 0; i < n; i++) {
        var num = start + 2 * i;   // nums[i] = start + 2*i
        // console.log("i:", i, "num:", num);
        result = result ^ num;     // XOR current number with result
        // console.log("i:", i, "num:", num, "result:", result);
    }
    //console.log("Final XOR Result:", result);

    return result; // Final XOR of all numbers
};

console.log(xorOperation(5, 0)); // Output: 8 → [0,2,4,6,8] => 0^2^4^6^8 = 8
console.log(xorOperation(4, 3)); // Output: 8 → [3,5,7,9]   => 3^5^7^9 = 8
