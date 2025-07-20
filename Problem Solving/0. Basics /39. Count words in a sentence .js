// count words in a sentence  :
// --------------------------------------------------------------------------------------------------------------::

const countWords1 = (sentence) => {
    if (!sentence || sentence.trim() === "") return 0;
    return sentence.trim().split(" ").length;
}

console.log(countWords1('Hello world'));
console.log(countWords1('  Hello   world  '));

/*
Explanation:
====================
const countWords1 = (sentence) => {
    if (!sentence || sentence.trim() === "") return 0;
    return sentence.trim().split(" ").length;
};

HOW IT WORKS:
- First checks for empty or null input
- trim() removes leading/trailing spaces
- split(" ") splits by single space
- Returns length of resulting array

LIMITATION: Doesn't handle multiple spaces between words properly
EXAMPLE: "Hello   world" would count as 4 words (including empty strings)

*/


// ------------------------------------------------------------------------------------
const countWords3 = (sentence) => {
    if (!sentence) return 0;
    let count = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== ' ' && char !== '\t' && char !== '\n' && char !== '\r') {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }
    return count;
};

console.log("countWords3('Hello world'): ", countWords3('Hello world'));
console.log("countWords3('  Hello   world   JavaScript  '): ", countWords3('  Hello   world   JavaScript  '));
/*
Explanation:
====================
const countWords3 = (sentence) => {
    if (!sentence) return 0;

    let count = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== ' ' && char !== '\t' && char !== '\n' && char !== '\r') {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    return count;
};

HOW IT WORKS:
- Loops through each character manually
- Uses boolean flag 'inWord' to track if currently inside a word
- Increments count when entering a new word (first non-space after space)
- Considers space, tab, newline, carriage return as separators

STEP-BY-STEP EXAMPLE: "Hi  there"
i=0: 'H' (not space, !inWord) → count=1, inWord=true
i=1: 'i' (not space, inWord) → continue
i=2: ' ' (space) → inWord=false
i=3: ' ' (space) → inWord=false
i=4: 't' (not space, !inWord) → count=2, inWord=true
...Result: 2 words

TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(1) - no extra arrays
*/

/*
Method 3 Explanation:
====================
const countWords3 = (sentence) => {
    if (!sentence) return 0;

    let count = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== ' ' && char !== '\t' && char !== '\n' && char !== '\r') {
            if (!inWord) {
                count++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    return count;
};

HOW IT WORKS:
- Loops through each character manually
- Uses boolean flag 'inWord' to track if currently inside a word
- Increments count when entering a new word (first non-space after space)
- Considers space, tab, newline, carriage return as separators

STEP-BY-STEP EXAMPLE: "Hi  there"
i=0: 'H' (not space, !inWord) → count=1, inWord=true
i=1: 'i' (not space, inWord) → continue
i=2: ' ' (space) → inWord=false
i=3: ' ' (space) → inWord=false
i=4: 't' (not space, !inWord) → count=2, inWord=true
...Result: 2 words
*/
