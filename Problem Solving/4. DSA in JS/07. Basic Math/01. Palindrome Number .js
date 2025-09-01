// Palindrome Number
/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Topic : Math
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {                           // Negative numbers are never palindromes (e.g., -121 != 121-)
        return false;
    }

    let original = x;                      // Save the original number for comparison later
    let reversed = 0;                      // This will store the reversed number we build step by step

    while (x > 0) {                        // Keep looping until x becomes 0
        let digit = x % 10;                // Get the last digit (remainder when divided by 10)
        reversed = reversed * 10 + digit;  // Add that digit to the reversed number (shifting digits left)

        let newX = 0;                      // We'll compute x without its last digit
        let temp = x - digit;              // Remove the remainder so only tens, hundreds, etc. remain

        while (temp >= 10) {               // Instead of Math.floor, keep subtracting 10 until < 10
            temp -= 10;                    // Reduce temp by 10
            newX++;                        // Count how many 10s fit (this is same as floor division by 10)
        }

        x = newX;                          // Now x becomes the number without its last digit
    }

    return original === reversed;          // Finally, check if reversed equals original
};
console.log(isPalindrome(121));   // true
console.log(isPalindrome(1221));  // true
console.log(isPalindrome(123));   // false
console.log(isPalindrome(10));    // false



// ------------------------------------------------------------------ ::
// ------------------------------------------------------------------ ::
let num = 121;
let str = num.toString(); // Convert number to string
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
if (str === reversed) {
    console.log("true");
} else {
    console.log("false");
}



// ------------------------------------------------------------------ ::
// ------------------------------------------------------------------ ::
// Function to check if a number is a palindrome
var isPalindrome = function (x) {
    if (x < 0) return false; // Negative numbers cannot be palindromes
    let str = x.toString(); // Convert number to string
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Build reversed string
    }
    return str === reversed; // Compare original and reversed strings
};
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false



// ------------------------------------------------------------------ ::
// ------------------------------------------------------------------ ::
const isPalindrome = function (x) {
    // Check if the number is negative
    if (x < 0) return false;

    // Compare the original number with its reverse
    return x === + x.toString().split("").reverse().join("");
};
const res = isPalindrome(10);
console.log(res); // false
