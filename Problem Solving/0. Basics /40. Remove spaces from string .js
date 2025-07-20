// remove spaces from string  :
// --------------------------------------------------------------------------------------------------------------::

// Using replace() with regex (removes all spaces)
const removeSpaces1 = (str) => {
    if (!str) return "";
    return str.replace(/\s/g, "");
};
console.log("removeSpaces1('Hello World'): ", removeSpaces1('Hello World'));
console.log("removeSpaces1('  Hello   World  '): ", removeSpaces1('  Hello   World  '));

/*
Explanation:
====================
const removeSpaces1 = (str) => {
    if (!str) return "";
    return str.replace(/\s/g, "");
};

HOW IT WORKS:
- Uses replace() method with regex /\s/g
- \s matches any whitespace character (space, tab, newline, etc.)
- g flag for global replacement (all occurrences)
- Replaces all whitespace with empty string

EXAMPLE: "Hello World" → "HelloWorld"
REMOVES: spaces, tabs, newlines, carriage returns
*/


// Manual loop approach (no built-in methods)
// ------------------------------------------------------------------------------------
const removeSpaces2 = (str) => {
    if (!str) return "";

    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
};
console.log("removeSpaces2('Hello World'): ", removeSpaces2('Hello World'));
console.log("removeSpaces2('JavaScript Programming'): ", removeSpaces2('JavaScript Programming'));

/*
Explanation:
====================
const removeSpaces2 = (str) => {
    if (!str) return "";

    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
};

HOW IT WORKS:
- Loops through each character manually
- Checks if character is not a space
- Concatenates non-space characters to result string
- Only removes regular spaces (ASCII 32), not tabs/newlines

STEP-BY-STEP EXAMPLE: "Hi There"
i=0: 'H' (not space) → result = "H"
i=1: 'i' (not space) → result = "Hi"
i=2: ' ' (is space) → skip
i=3: 'T' (not space) → result = "HiT"
...Final result: "HiThere"
*/
