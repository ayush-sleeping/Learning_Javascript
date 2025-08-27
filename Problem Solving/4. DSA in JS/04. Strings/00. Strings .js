// String DSA topic with JS :
/*
What is a String?
- A string is a sequence of characters (letters, numbers, symbols).
- In JS, strings are written inside quotes: "hello", 'world', `123`.
- Strings can be single-quoted, double-quoted, or template literals (backticks).
- Think of them as a chain of characters where each character has a position (index).

Example: "hello" = ['h', 'e', 'l', 'l', 'o']
         Index:    [0,   1,   2,   3,   4]

Key Points:
- Strings are IMMUTABLE (can't change directly)
- Each character has an index starting from 0
- Very common in coding interviews and real projects

String Types in JS:
- Primitive string: Most common, e.g. "abc" (immutable)
- String object: Created with new String("abc") (rarely used)

String Mutability:
- Strings in JS are immutable: you cannot change a character directly (str[0] = 'x' does nothing)
- To "change" a string, you must build a new one (e.g. by concatenation or using a loop)

Why are Strings important in DSA?
- Many problems involve manipulating, searching, or analyzing text.
- Strings are used for passwords, names, messages, binary numbers, etc.
- Efficient string handling is key for interview problems (reverse, search, pattern, etc.)

Basic String Operations:
- Access characters: str[0], str[1], ... (read-only)
- Find length: str.length
- Concatenate: str1 + str2 (creates a new string)
- Compare: str1 === str2 (checks value and type)
- Slice (manual): Use loops to extract substrings if not using built-ins

Manual String Manipulation:
- Loop through each character by index
- Build new strings by adding characters one by one
- Use variables to track positions, counts, or build results

String and Memory:
- Each new string (after concatenation or change) is a new value in memory
- Old strings are not changed, just replaced

Template Literals:
- Use backticks (`) for multi-line strings and embedding variables: `Hello, ${name}`

Common Mistakes:
- Trying to change a character directly (str[0] = 'x')
- Forgetting strings are zero-indexed
- Mixing up string and number types ("5" vs 5)

Practical Notes:
- Always use strict equality (===) for comparison
- Strings can be looped like arrays, but cannot be changed in place
- For DSA, practice building new strings manually (no built-ins)
- Understand how to access, compare, and build strings step by step

Summary:
- Strings are fundamental in JS and DSA
- Learn to access, loop, compare, and build strings using only basic syntax
- This will help you implement any string logic when needed
*/

// Example of string manipulation in JavaScript
const name = "Ayush";
const repoCount = 28;
console.log(name + repoCount + " repositories");
console.log(`${name}${repoCount} repositories`);
console.log("My name is " + name + " and I have " + repoCount + " repositories.");
console.log(`My name is ${name} and I have ${repoCount} repositories.`);


console.log("------------------------------------ ::");


// String object
const gameName = new String("Chess");
console.log(gameName); // String object
console.log(gameName.valueOf()); // "Chess"
console.log(gameName.toString()); // "Chess"
console.log(gameName[2]); // "e"
console.log(gameName.length); // 5
console.log(gameName.__proto__); // String.prototype
const newString = gameName.substring(1, 4);
console.log(newString); // "hes"
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // "Ches"


console.log("------------------------------------ ::");


// trim :
const newStringOne = "     chess     ";
console.log(newStringOne); // "chess"
console.log(newStringOne.trim()); // "chess"

// replace :
const newStringTwo = "chess";
console.log(newStringTwo.replace("chess", "checkers")); // "checkers"
const url = "https://www.example.com";
console.log(url.replace("example", "test")); // "https://www.test.com"
console.log(url.includes("example")); // true


console.log("------------------------------------ ::");
// Manual String Practice (No built-in methods)


// 1. Reverse a string manually
var str = "hello world";
var reversed = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
console.log("Reversed:", reversed); // "dlrow olleh"


console.log("-------------- ::");


// 2. Count vowels manually
var s = "Ayush Mishra";
var vowels = "aeiouAEIOU";
var vowelCount = 0;
for (var i = 0; i < s.length; i++) {
    var ch = s[i];
    for (var j = 0; j < vowels.length; j++) {
        if (ch === vowels[j]) {
            vowelCount = vowelCount + 1;
            break;
        }
    }
}
console.log("Vowel count:", vowelCount);


console.log("-------------- ::");


// 3. Remove spaces manually
var spaced = "  JavaScript   is   fun  ";
var noSpaces = "";
for (var i = 0; i < spaced.length; i++) {
    if (spaced[i] !== " ") {
        noSpaces = noSpaces + spaced[i];
    }
}
console.log("No spaces:", noSpaces);


console.log("-------------- ::");


// 4. Compare two strings manually
var a = "hello";
var b = "hello";
var areEqual = true;
if (a.length !== b.length) {
    areEqual = false;
} else {
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            areEqual = false;
            break;
        }
    }
}
console.log("Are strings equal?", areEqual);


console.log("-------------- ::");


// 5. Build substring manually (from index 2 to 5)
var text = "JavaScript";
var sub = "";
for (var i = 2; i < 6; i++) {
    sub = sub + text[i];
}
console.log("Manual substring (2-5):", sub); // "vaSc"


console.log("-------------- ::");


// 6. Manual concatenation
var first = "Good ";
var second = "Morning";
var combined = "";
for (var i = 0; i < first.length; i++) {
    combined = combined + first[i];
}
for (var j = 0; j < second.length; j++) {
    combined = combined + second[j];
}
console.log("Manual concatenation:", combined);



// DECLARING AND INITIALIZING STRINGS
// -------------------------------------------------------------------- ::
// String Declaration
// Different ways to create strings
let str1 = "Hello World";           // Double quotes
let str2 = 'JavaScript is cool';    // Single quotes
let str3 = `Template literal`;      // Backticks (template literals)
let str4 = "";                      // Empty string
let str5 = String("Convert to string"); // Constructor method

console.log("str1:", str1);
console.log("str2:", str2);
console.log("Empty string length:", str4.length);




// ACCESSING CHARACTERS IN A STRING
// -------------------------------------------------------------------- ::
// Accessing Characters

let word = "Programming";
console.log("Original string:", word);
console.log("Length:", word.length);

// Access individual characters
console.log("First character:", word[0]);        // 'P'
console.log("Last character:", word[word.length - 1]); // 'g'
console.log("Character at index 3:", word[3]);   // 'g'

// What happens with invalid indexes?
console.log("Invalid index:", word[100]);        // undefined




// TRAVERSING A STRING (LOOPING)
// -------------------------------------------------------------------- ::
// String Traversal

let text = "HELLO";

// Method 1: Traditional for loop
console.log("Method 1 - Traditional for loop:");
for (let i = 0; i < text.length; i++) {
    console.log(`Index ${i}: ${text[i]}`);
}

// Method 2: for...of loop (cleaner for simple traversal)
console.log("\nMethod 2 - for...of loop:");
let index = 0;
for (let char of text) {
    console.log(`Index ${index}: ${char}`);
    index++;
}

// Practical example: Print each character with its ASCII value
console.log("\nCharacters with ASCII values:");
for (let i = 0; i < text.length; i++) {
    console.log(`'${text[i]}' has ASCII value: ${text.charCodeAt(i)}`);
}




// COMPARING STRINGS (Manual Way)
// -------------------------------------------------------------------- ::
// String Comparison

function compareStrings(str1, str2) {
    // First check if lengths are different
    if (str1.length !== str2.length) {
        return false;
    }

    // Compare each character
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    return true;
}

// Test the function
console.log("'hello' vs 'hello':", compareStrings("hello", "hello")); // true
console.log("'hello' vs 'Hello':", compareStrings("hello", "Hello")); // false
console.log("'abc' vs 'abcd':", compareStrings("abc", "abcd"));       // false

// Case-insensitive comparison
function compareIgnoreCase(str1, str2) {
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i].toLowerCase() !== str2[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

console.log("Case-insensitive 'Hello' vs 'HELLO':", compareIgnoreCase("Hello", "HELLO")); // true




// CONCATENATING STRINGS (Manual Way)
// -------------------------------------------------------------------- ::
// String Concatenation ===");

function concatenateStrings(str1, str2) {
    let result = "";

    // Add all characters from first string
    for (let i = 0; i < str1.length; i++) {
        result = result + str1[i];
    }

    // Add all characters from second string
    for (let i = 0; i < str2.length; i++) {
        result = result + str2[i];
    }

    return result;
}

console.log("Concatenate 'Hello' + ' World':", concatenateStrings("Hello", " World"));

// More efficient way using array (for learning)
function concatenateWithArray(str1, str2) {
    let chars = [];

    for (let i = 0; i < str1.length; i++) {
        chars[chars.length] = str1[i]; // Manual push
    }

    for (let i = 0; i < str2.length; i++) {
        chars[chars.length] = str2[i]; // Manual push
    }

    // Convert array back to string
    let result = "";
    for (let i = 0; i < chars.length; i++) {
        result += chars[i];
    }

    return result;
}

console.log("Array method result:", concatenateWithArray("Java", "Script"));




// REVERSING A STRING (Manual Way)
// -------------------------------------------------------------------- ::
// String Reversal

// Method 1: Build from end to start
function reverseString1(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

// Method 2: Two-pointer approach (more DSA-style)
function reverseString2(str) {
    let chars = [];

    // Convert to array first
    for (let i = 0; i < str.length; i++) {
        chars[i] = str[i];
    }

    // Reverse using two pointers
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        // Swap characters
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }

    // Convert back to string
    let result = "";
    for (let i = 0; i < chars.length; i++) {
        result += chars[i];
    }

    return result;
}

let original = "JavaScript";
console.log("Original:", original);
console.log("Reversed (method 1):", reverseString1(original));
console.log("Reversed (method 2):", reverseString2(original));




// COUNTING CHARACTERS, VOWELS, WORDS
// -------------------------------------------------------------------- ::
// Character Counting

function analyzeString(str) {
    let vowels = 0;
    let consonants = 0;
    let digits = 0;
    let spaces = 0;
    let specialChars = 0;
    let words = 0;

    let vowelSet = "aeiouAEIOU";
    let inWord = false;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === ' ') {
            spaces++;
            inWord = false;
        } else if (char >= '0' && char <= '9') {
            digits++;
            if (!inWord) {
                words++;
                inWord = true;
            }
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            // Check if vowel
            let isVowel = false;
            for (let j = 0; j < vowelSet.length; j++) {
                if (char === vowelSet[j]) {
                    isVowel = true;
                    break;
                }
            }

            if (isVowel) {
                vowels++;
            } else {
                consonants++;
            }

            if (!inWord) {
                words++;
                inWord = true;
            }
        } else {
            specialChars++;
            if (!inWord) {
                words++;
                inWord = true;
            }
        }
    }

    return {
        totalChars: str.length,
        vowels: vowels,
        consonants: consonants,
        digits: digits,
        spaces: spaces,
        specialChars: specialChars,
        words: words
    };
}

let testText = "Hello World! I have 123 apples.";
let analysis = analyzeString(testText);
console.log("Text:", testText);
console.log("Analysis:", analysis);




// CHECKING FOR PALINDROMES
// -------------------------------------------------------------------- ::
// Palindrome Check

// Simple palindrome check
function isPalindrome1(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Advanced palindrome (ignore spaces, case, and punctuation)
function isPalindrome2(str) {
    // Clean the string first
    let cleaned = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }

    // Check palindrome on cleaned string
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test palindromes
let testWords = ["racecar", "hello", "A man a plan a canal Panama", "race a car"];
for (let word of testWords) {
    console.log(`"${word}" - Simple: ${isPalindrome1(word)}, Advanced: ${isPalindrome2(word)}`);
}




// REMOVING SPACES AND UNWANTED CHARACTERS
// -------------------------------------------------------------------- ::
// Character Removal

// Remove all spaces
function removeSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// Remove specific characters
function removeChars(str, charsToRemove) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let shouldRemove = false;
        for (let j = 0; j < charsToRemove.length; j++) {
            if (str[i] === charsToRemove[j]) {
                shouldRemove = true;
                break;
            }
        }
        if (!shouldRemove) {
            result += str[i];
        }
    }
    return result;
}

// Keep only alphabetic characters
function keepOnlyLetters(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            result += char;
        }
    }
    return result;
}

let messyText = "Hello, World! 123";
console.log("Original:", messyText);
console.log("No spaces:", removeSpaces(messyText));
console.log("Remove ',!':", removeChars(messyText, ",!"));
console.log("Only letters:", keepOnlyLetters(messyText));




// STRING TO ARRAY CONVERSION (Manual)
// -------------------------------------------------------------------- ::
// String to Array Conversion

function stringToArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    return arr;
}

// Split by delimiter
function manualSplit(str, delimiter) {
    let result = [];
    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            if (currentWord.length > 0) {
                result[result.length] = currentWord;
                currentWord = "";
            }
        } else {
            currentWord += str[i];
        }
    }

    // Add the last word
    if (currentWord.length > 0) {
        result[result.length] = currentWord;
    }

    return result;
}

let sentence = "apple,banana,cherry,date";
console.log("Original string:", sentence);
console.log("To character array:", stringToArray(sentence));
console.log("Split by comma:", manualSplit(sentence, ","));

let sentence2 = "Hello world from JavaScript";
console.log("Split by space:", manualSplit(sentence2, " "));




// SUBSTRING SEARCH (Manual Way)
// -------------------------------------------------------------------- ::
// Substring Search

// Find first occurrence of substring
function findSubstring(str, pattern) {
    if (pattern.length > str.length) return -1;

    for (let i = 0; i <= str.length - pattern.length; i++) {
        let found = true;
        for (let j = 0; j < pattern.length; j++) {
            if (str[i + j] !== pattern[j]) {
                found = false;
                break;
            }
        }
        if (found) return i;
    }
    return -1;
}

// Find all occurrences
function findAllSubstrings(str, pattern) {
    let positions = [];

    for (let i = 0; i <= str.length - pattern.length; i++) {
        let found = true;
        for (let j = 0; j < pattern.length; j++) {
            if (str[i + j] !== pattern[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            positions[positions.length] = i;
        }
    }
    return positions;
}

// Count occurrences
function countSubstring(str, pattern) {
    let count = 0;

    for (let i = 0; i <= str.length - pattern.length; i++) {
        let found = true;
        for (let j = 0; j < pattern.length; j++) {
            if (str[i + j] !== pattern[j]) {
                found = false;
                break;
            }
        }
        if (found) count++;
    }
    return count;
}

let longText = "The cat in the hat sat on the mat";
let searchPattern = "at";

console.log("Text:", longText);
console.log("Pattern:", searchPattern);
console.log("First occurrence at index:", findSubstring(longText, searchPattern));
console.log("All occurrences at:", findAllSubstrings(longText, searchPattern));
console.log("Total count:", countSubstring(longText, searchPattern));




// COMMON DSA STRING PROBLEMS
// -------------------------------------------------------------------- ::
// DSA String Problems

// Problem 1: Find the longest word
function findLongestWord(str) {
    let words = manualSplit(str, " ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// Problem 2: Capitalize first letter of each word
function capitalizeWords(str) {
    let result = "";
    let capitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += str[i];
            capitalizeNext = true;
        } else if (capitalizeNext) {
            if (str[i] >= 'a' && str[i] <= 'z') {
                result += String.fromCharCode(str[i].charCodeAt(0) - 32);
            } else {
                result += str[i];
            }
            capitalizeNext = false;
        } else {
            result += str[i];
        }
    }
    return result;
}

// Problem 3: Check if two strings are anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    // Count characters in first string
    let charCount = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i].toLowerCase();
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    // Subtract characters from second string
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i].toLowerCase();
        if (char !== ' ') {
            if (!charCount[char] || charCount[char] === 0) {
                return false;
            }
            charCount[char]--;
        }
    }

    return true;
}

// Problem 4: Remove duplicates from string
function removeDuplicates(str) {
    let result = "";
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        if (!seen[str[i]]) {
            result += str[i];
            seen[str[i]] = true;
        }
    }
    return result;
}

// Test the problems
console.log("\n--- Problem Solutions ---");
console.log("Longest word in 'The quick brown fox':", findLongestWord("The quick brown fox"));
console.log("Capitalize 'hello world':", capitalizeWords("hello world"));
console.log("'listen' and 'silent' are anagrams:", areAnagrams("listen", "silent"));
console.log("'hello' and 'world' are anagrams:", areAnagrams("hello", "world"));
console.log("Remove duplicates from 'programming':", removeDuplicates("programming"));


// Example of ASCII optimization
function fastIsLetter(char) {
    let code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function fastIsDigit(char) {
    let code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
}

console.log("Fast letter check 'A':", fastIsLetter('A'));
console.log("Fast digit check '5':", fastIsDigit('5'));
