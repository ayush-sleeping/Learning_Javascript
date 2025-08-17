/*
LeetCode: Length of Last Word ::

Problem: Find the length of the last word in a string
- Words are separated by spaces
- Ignore trailing spaces
- A word = sequence of non-space characters

Example 1: s = "Hello World"
- Last word: "World"
- Length: 5

Example 2: s = "   fly me   to   the moon  "
- Ignore trailing spaces: "   fly me   to   the moon"
- Last word: "moon"
- Length: 4

Example 3: s = "luffy is still joyboy"
- Last word: "joyboy"
- Length: 6


*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {

    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i = i - 1;
    }

    let wordLength = 0;
    while (i >= 0 && s[i] !== ' ') {
        wordLength = wordLength + 1;
        i = i - 1;
    }

    return wordLength;
}

console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //
