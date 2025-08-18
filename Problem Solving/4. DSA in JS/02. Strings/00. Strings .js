// String DSA topic with JS :
/*
What is a String?
- A string is a sequence of characters (letters, numbers, symbols).
- In JS, strings are written inside quotes: "hello", 'world', `123`.
- Strings can be single-quoted, double-quoted, or template literals (backticks).

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
