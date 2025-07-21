// count character occurrences in string  :
// --------------------------------------------------------------------------------------------------------------::

const text = "hello world";
const charCount = {};

// Go through each character in the string
for (let i = 0; i < text.length; i++) {
    let char = text[i];

    // If character already exists, increase count
    if (charCount[char]) {
        charCount[char] = charCount[char] + 1;
    } else {
        // If character doesn't exist, start counting from 1
        charCount[char] = 1;
    }
}
console.log(text);
console.log(charCount);
/*
EXPLANATION:
Count each character = how many times each letter appears

STEPS:
1. Go through each character in the string
2. Check if we've seen this character before
3. If yes: increase its count by 1
4. If no: start counting it from 1
5. Result: object showing each character and its count

EXAMPLE:
"hello" → {h: 1, e: 1, l: 2, o: 1}
- h appears 1 time
- e appears 1 time
- l appears 2 times
- o appears 1 time

HOW OBJECTS WORK AS COUNTERS:
- charCount["h"] = 1 means h appears 1 time
- charCount["l"] = 2 means l appears 2 times
- Objects are perfect for storing key-value pairs
*/



// Count one character only
// -----------------------------------------------------------------------
const sentence = "programming is fun";
const targetChar = "g";
let count = 0; // Start counter at zero

// Go through each character in the string
for (let i = 0; i < sentence.length; i++) {
    // Check if current character matches our target
    if (sentence[i] === targetChar) {
        count = count + 1; // Found a match, increase counter
    }
}

console.log(`"${sentence}"`);
console.log(`Character '${targetChar}' appears ${count} times`);
/*
EXPLANATION:
Sometimes you only want to count one specific character

SIMPLE STEPS:
1. Set counter to 0
2. Go through each character in string
3. If character matches what we're looking for, add 1 to counter
4. Result: total count of that specific character

EXAMPLE:
"programming" looking for "g"
- Check each: p,r,o,g(+1),r,a,m,m,i,n,g(+1)
- Result: g appears 2 times
*/



// Manual tracking with arrays
// -----------------------------------------------------------------------
const word = "banana";
const characters = [];
const counts = [];

for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let found = false;
    let position = -1;

    // Check if character already exists in our tracking arrays
    for (let j = 0; j < characters.length; j++) {
        if (characters[j] === char) {
            found = true;
            position = j;
            break;
        }
    }

    if (found === true) {
        // Character exists, increase its count
        counts[position] = counts[position] + 1;
    } else {
        // New character, add to both arrays
        characters[characters.length] = char;
        counts[counts.length] = 1;
    }
}

console.log(word);
console.log(characters);
console.log(counts);

// results
for (let i = 0; i < characters.length; i++) {
    console.log(`'${characters[i]}' appears ${counts[i]} time(s)`);
}
/*
EXPLANATION:
Using two parallel arrays instead of objects

HOW IT WORKS:
- characters[] stores unique characters found
- counts[] stores count for each character
- Both arrays stay in sync: characters[0] count is counts[0]

EXAMPLE:
"banana" processing:
- b: new → characters=[b], counts=[1]
- a: new → characters=[b,a], counts=[1,1]
- n: new → characters=[b,a,n], counts=[1,1,1]
- a: found at position 1 → characters=[b,a,n], counts=[1,2,1]
- n: found at position 2 → characters=[b,a,n], counts=[1,2,2]
- a: found at position 1 → characters=[b,a,n], counts=[1,3,2]

RESULT: b=1, a=3, n=2
*/
