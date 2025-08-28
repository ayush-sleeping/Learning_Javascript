// Find First Palindromic String in the Array
/*
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.


Example 1:
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
*/

// - Input: words (array of strings).
// - Output: first palindromic string (string) or "" if none.
// - Error: if input is not an array, print a message and return "".

// Approach (step-wise):
// 1. Validate input is an array.
// 2. Loop over each word in `words` from left to right.
// 3. For each word, use two pointers (left=0, right=word.length-1).
//    - While left < right: compare word[left] and word[right].
//    - If mismatch -> not palindrome; break.
//    - If all matched -> palindrome; return this word immediately.
// 4. If no palindrome found after checking all words, return "".
// Complexity: O(n * m) where n = number of words, m = average word length.



// code
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    // input validation: check if words is an array-like object
    if (typeof words !== 'object' || words === null || typeof words.length !== 'number') {
        console.log("Invalid input: expected an array of strings.");
        return "";
    }

    // Iterate through each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        // Skip non-string entries safely
        if (typeof word !== 'string') {
            continue;
        }

        var left = 0;
        var right = word.length - 1;
        var isPal = true; // assume palindrome until proven otherwise

        // Two-pointer check
        while (left < right) {
            if (word[left] !== word[right]) {
                isPal = false; // mismatch found
                break;
            }
            left = left + 1;
            right = right - 1;
        }

        if (isPal) {
            return word; // first palindromic word found
        }
    }

    // No palindromic string found
    return "";
};
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // "ada"
console.log(firstPalindrome(["notapalindrome", "racecar"]));        // "racecar"
