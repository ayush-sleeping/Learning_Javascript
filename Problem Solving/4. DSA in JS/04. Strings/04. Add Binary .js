/*
Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

*/

// Approach :
// - Start from the rightmost digit of both strings.
// - Add the digits and any carry.
// - If the sum is 2 or more, set carry to 1 and put the correct digit in the result.
// - Continue until both strings are processed.
// - If there's a carry left at the end, add it to the result.
// - Build the result from right to left.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var result = '';

    while (i >= 0 || j >= 0 || carry) {
        // Get digit from a or 0 if out of bounds
        var digitA = i >= 0 ? a[i] - '0' : 0;
        // Get digit from b or 0 if out of bounds
        var digitB = j >= 0 ? b[j] - '0' : 0;

        var sum = digitA + digitB + carry;
        // Current digit is sum % 2
        result = (sum % 2) + result;
        // Carry for next step
        carry = sum >= 2 ? 1 : 0;

        i = i - 1;
        j = j - 1;
    }
    return result;
};

console.log(addBinary("11", "1"));      // "100"
console.log(addBinary("1010", "1011")); // "10101"
console.log(addBinary("0", "0"));       // "0"
console.log(addBinary("1", "111"));     // "1000"
