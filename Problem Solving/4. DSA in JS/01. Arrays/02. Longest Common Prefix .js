/*
Longest Common Prefix ::
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Look at the first letter of all words - are they the same?
If yes, look at the second letter of all words - are they the same?
Keep going until you find a letter that's different
The common part you found is your answer

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // what if array is empty
    if (strs.length === 0) {
        return "";
    }

    // if only one string, the whole string is the prefix
    if (strs.length === 1) {
        return strs[0];
    }

    // starting with first string
    let prefix = strs[0];

    // comparing this with each other string
    for (let i = 1; i < strs.length; i++) {
        // finding common parts between prefix and current string
        let commonPart = "";
        let minLength = Math.min(prefix.length, strs[i].length);

        // checking letter by letter
        for (let j = 0; j < minLength; j++) {
            if (prefix[j] === strs[i][j]) {
                commonPart += prefix[j];
            } else {
                break;
            }
        }

        // updating our prefix to the common part
        prefix = commonPart;

        // if prefix becomes empty, no point continuing
        if (prefix === "") {
            return "";
        }
    }
    return prefix;
};

let test1 = ["flower", "flow", "flight"];
console.log("Input:", test1);
console.log("Output:", longestCommonPrefix(test1));


let test2 = ["dog", "racecar", "car"];
console.log("Input:", test2);
console.log("Output:", longestCommonPrefix(test2));
