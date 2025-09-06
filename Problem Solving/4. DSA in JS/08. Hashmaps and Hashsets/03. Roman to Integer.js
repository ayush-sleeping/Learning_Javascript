//  Roman to Integer

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.


Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.


Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Topics: Hash Table, Math, String
*/


/**
 * Approach:
 * - We are given a string representing a Roman numeral.
 * - We need to convert it to an integer using a hashtable (object) for symbol-to-value mapping.
 * - For each character in the string:
 *   1. Look up its value in the hashtable.
 *   2. If the current value is less than the next value, subtract it (for cases like IV, IX, etc.).
 *   3. Otherwise, add it to the result.
 * - This uses string traversal, math (addition/subtraction), and a hashtable for fast lookup.
 * - We will not use any built-in JS methods like .split(), .map(), .reduce(), etc.
 * - All logic will be manual: object for hashtable, for loop for traversal, and manual char access.
*/


/**
* @param {string} s
* @return {number}
*/
var romanToInt = function (s) {
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var currentVal = romanMap[s[i]];
        var nextVal = 0;
        if (i + 1 < s.length) {
            nextVal = romanMap[s[i + 1]];
        }
        if (currentVal < nextVal) {
            result = result - currentVal;
        } else {
            result = result + currentVal;
        }
    }
    return result;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));



/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // 1. Hash table: mapping Roman symbols to integer values
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var result = 0; // final answer

    // 2. Loop through each character in the string
    for (var i = 0; i < s.length; i++) {
        var currentVal = romanMap[s[i]];     // value of current symbol
        var nextVal = 0;                     // default for next symbol

        // Check the next symbol if it exists
        if (i + 1 < s.length) {
            nextVal = romanMap[s[i + 1]];
        }

        // 3. Decision:
        // If current value is smaller than next (like IV = 4), subtract it
        if (currentVal < nextVal) {
            result = result - currentVal;
        }
        // Otherwise, just add it
        else {
            result = result + currentVal;
        }
    }

    return result; // return the total
};

// Testing
console.log(romanToInt("III"));      // 3
console.log(romanToInt("LVIII"));    // 58
console.log(romanToInt("MCMXCIV"));  // 1994
