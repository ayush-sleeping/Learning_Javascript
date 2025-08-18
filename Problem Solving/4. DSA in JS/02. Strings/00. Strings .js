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

const name = "Ayush";
const repoCount = 28;
console.log(name + repoCount + " repositories");
console.log(`${name}${repoCount} repositories`);
console.log("My name is " + name + " and I have " + repoCount + " repositories.");
console.log(`My name is ${name} and I have ${repoCount} repositories.`);


console.log("------------------------------------ ::");
