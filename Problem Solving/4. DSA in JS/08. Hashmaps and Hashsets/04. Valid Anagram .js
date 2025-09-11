// Valid Anagram
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.


Example 1:
Input: s = "anagram", t = "nagaram"
Output: true


Example 2:
Input: s = "rat", t = "car"
Output: false


Topics: Hash Table, String, Sorting
*/


/**
Approach:
- If the lengths of s and t are not equal, return false immediately.
   // Reason: Anagrams must have the same number of characters.
- Create an empty object (hash table) to count the frequency of each character in s.
- Loop through each character in s:
   - For each character, increase its count in the hash table by 1.
- Loop through each character in t:
   - For each character, decrease its count in the hash table by 1.
   - If a character is not found or its count goes below zero, return false.
- After both loops, check the hash table:
   - If all values are zero, return true (it's an anagram).
   - If any value is not zero, return false.
- Using only loops, objects, and basic string indexing.

- So basically, Count the frequency of each character in both strings using plain objects (hash tables).
If both frequency tables are the same, the strings are anagrams.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var freqS = {};
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (freqS[char]) {
            freqS[char]++;
        } else {
            freqS[char] = 1;
        }
    }

    var freqT = {};
    for (var j = 0; j < t.length; j++) {
        var char2 = t[j];
        if (freqT[char2]) {
            freqT[char2]++;
        } else {
            freqT[char2] = 1;
        }
    }

    for (var key in freqS) {
        if (freqS[key] !== freqT[key]) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram(s = "anagram", t = "nagaram"));
console.log(isAnagram(s = "rat", t = "car"));




// lets again more understand this code using ai comments ::
var isAnagram = function (s, t) {
    // Step 1: If lengths are not equal, they can't be anagrams
    if (s.length !== t.length) {
        return false; // Different lengths, so not anagrams
    }

    // Step 2: Count frequency of each character in string s
    var freqS = {}; // Object to store frequency of each char in s
    for (var i = 0; i < s.length; i++) {
        var char = s[i]; // Get current character from s
        if (freqS[char]) { // If already exists in freqS
            freqS[char]++; // Increment its count
        } else {
            freqS[char] = 1; // Otherwise, set count to 1
        }
    }

    // Step 3: Count frequency of each character in string t
    var freqT = {}; // Object to store frequency of each char in t
    for (var j = 0; j < t.length; j++) {
        var char2 = t[j]; // Get current character from t
        if (freqT[char2]) { // If already exists in freqT
            freqT[char2]++; // Increment its count
        } else {
            freqT[char2] = 1; // Otherwise, set count to 1
        }
    }

    // Step 4: Compare both frequency objects
    for (var key in freqS) {
        if (freqS[key] !== freqT[key]) { // If any character count doesn't match
            return false; // Not anagrams
        }
    }
    return true; // All counts match, so they are anagrams
};
