// First Unique Character in a String
/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

*/


// Approach :
// You get a string s.
// Find the first character that appears only once in the string.
// Return its index. If none, return -1.

// For each character in the string:
// Count how many times it appears in the whole string.
// If it appears only once, return its index.
// If no such character, return -1.

/**
 * @param {string} s
 * @return {number}
*/

// Function to find the first unique character in a string
var firstUniqChar1 = function (s) {
    // Loop through each character in the string
    for (var i = 0; i < s.length; i++) {
        // Start a counter for the current character
        var count = 0;
        // Loop through the string again to count occurrences of s[i]
        for (var j = 0; j < s.length; j++) {
            // If the character at position i matches character at position j
            if (s[i] === s[j]) {
                // Increase the count for this character
                count = count + 1;
            }
        }
        // If the count is exactly 1, this character is unique
        if (count === 1) {
            // Return the index of the first unique character
            return i;
        }
    }
    // If no unique character is found, return -1
    return -1;
};

console.log(firstUniqChar1("leetcode"));      // 0
console.log(firstUniqChar1("loveleetcode"));  // 2
console.log(firstUniqChar1("aabb"));          // -1


// current solution uses two nested loops, which makes it O(n²) time complexity.
// For long strings, this is too slow and causes "Time Limit Exceeded" on LeetCode.


var firstUniqChar = function (s) {
    // Count frequency of each character using an object
    var freq = {}; // Create an empty object to store counts
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1; // First time seeing this character
        } else {
            freq[ch] = freq[ch] + 1; // Increment count
        }
    }
    // Find the first character with count 1
    for (var i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i; // Return index of first unique character
        }
    }
    return -1; // If no unique character found
};

console.log(firstUniqChar("leetcode"));      // 0
console.log(firstUniqChar("loveleetcode"));  // 2
