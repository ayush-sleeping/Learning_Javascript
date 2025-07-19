// find missing number in array  :
// --------------------------------------------------------------------------------------------------------------::


let arr1 = [1, 2, 3, 5, 6, 7];
let n1 = arr1.length  + 1;
let expectedSum1 = (n1 * (n1 + 1)) / 2;
let actualSum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    actualSum1 += arr1[i];
}
let missingNumber1 = expectedSum1 - actualSum1;
console.log(missingNumber1);

/*
EXPLANATION FOR EXAMPLE 1:

let arr1 = [1, 2, 3, 5, 6, 7];  // Missing: 4
let n1 = arr1.length + 1;  // Should have 7 numbers (6 present + 1 missing)
let expectedSum1 = (n1 * (n1 + 1)) / 2;  // Sum formula: 7*8/2 = 28
let actualSum1 = 0;  // Sum of present numbers

CALCULATION:
Expected sum: 1+2+3+4+5+6+7 = 28
Actual sum: 1+2+3+5+6+7 = 24
Missing: 28-24 = 4
*/


// ------------------------------------------------------------------------------------
let arr2 = [10, 11, 13, 14, 15];
let start = 10;
let end = 15;
let expectedSum2 = 0;
let actualSum2 = 0;
for (let i = start; i <= end; i++) {
    expectedSum2 += i;
}
for (let i = 0; i < arr2.length; i++) {
    actualSum2 += arr2[i];
}
let missingNumber2 = expectedSum2 - actualSum2;
console.log(missingNumber2);


/*
EXPLANATION FOR EXAMPLE 2:

let arr2 = [10, 11, 13, 14, 15];  // Missing: 12
let start = 10;  // Sequence starts from 10
let end = 15;    // Sequence ends at 15

// First loop: Calculate expected sum
for (let i = start; i <= end; i++) {  // Loop from 10 to 15
    expectedSum2 += i;  // Add each number: 10+11+12+13+14+15 = 75
}

// Second loop: Calculate actual sum of array elements
for (let i = 0; i < arr2.length; i++) {  // Loop through array indices (0 to 4)
    actualSum2 += arr2[i];  // Add each element: arr2[0]+arr2[1]+arr2[2]+arr2[3]+arr2[4]
}                          // Which is: 10+11+13+14+15 = 63

let missingNumber2 = expectedSum2 - actualSum2;  // 75 - 63 = 12

CALCULATION:
Expected sum: 10+11+12+13+14+15 = 75
Actual sum: 10+11+13+14+15 = 63
Missing: 75-63 = 12

EXECUTION OF SECOND LOOP:
i=0: actualSum2 = 0 + arr2[0] = 0 + 10 = 10
i=1: actualSum2 = 10 + arr2[1] = 10 + 11 = 21
i=2: actualSum2 = 21 + arr2[2] = 21 + 13 = 34
i=3: actualSum2 = 34 + arr2[3] = 34 + 14 = 48
i=4: actualSum2 = 48 + arr2[4] = 48 + 15 = 63
*/



// ------------------------------------------------------------------------------------
let letters1 = ['a', 'b', 'c', 'e', 'f'];
let expectedLetters1 = [];
let startChar1 = 'a'.charCodeAt(0);
let endChar1 = 'f'.charCodeAt(0);
for (let i = startChar1; i <= endChar1; i++) {
    expectedLetters1.push(String.fromCharCode(i));
}
for (let i = 0; i < expectedLetters1.length; i++) {
    let found = false ;
    for (let j = 0; j < letters1.length; j++) {
        if (expectedLetters1[i] === letters1[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(expectedLetters1[i]);
        break;
    }
}

/*
EXPLANATION FOR ALPHABET EXAMPLE 3:

let letters1 = ['a', 'b', 'c', 'e', 'f'];  // Missing: 'd'
let startChar1 = 'a'.charCodeAt(0);  // Get ASCII code of 'a' = 97
let endChar1 = 'f'.charCodeAt(0);    // Get ASCII code of 'f' = 102

// Generate expected sequence
for (let i = startChar1; i <= endChar1; i++) {  // Loop from 97 to 102
    expectedLetters1.push(String.fromCharCode(i));  // Convert back to letters: ['a','b','c','d','e','f']
}

// Find missing letter by comparing arrays
for (let i = 0; i < expectedLetters1.length; i++) {  // Check each expected letter
    let found = false;
    for (let j = 0; j < letters1.length; j++) {  // Search in actual array
        if (expectedLetters1[i] === letters1[j]) {  // If letter found
            found = true;
            break;
        }
    }
    if (!found) {  // If letter not found in actual array
        console.log("Example 3 - Missing letter:", expectedLetters1[i]);  // This is missing
        break;
    }
}

LOGIC: Generate expected alphabet sequence, find which one is missing from actual array
*/


// ------------------------------------------------------------------------------------
let letters2 = ['a', 'b', 'c', 'e', 'f'];
let expectedLetters2 = [];
let startChar2 = 97;
let endChar2 = 102;
let letterIndex = 0;

for (let i = startChar2; i <= endChar2; i++) {
    let char = "";
    if (i === 97) char = 'a';
    else if (i === 98) char = 'b';
    else if (i === 99) char = 'c';
    else if (i === 100) char = 'd';
    else if (i === 101) char = 'e';
    else if (i === 102) char = 'f';

    expectedLetters2[letterIndex] = char;
    letterIndex++;
}

for (let i = 0; i < letterIndex; i++) {
    let found = false;
    for (let j = 0; j < 5; j++) {
        if (expectedLetters2[i] === letters2[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        console.log(expectedLetters2[i]);
        break;
    }
}

/*
EXPLANATION FOR ALPHABET EXAMPLE 3 (NO BUILT-INS):

let letters1 = ['a', 'b', 'c', 'e', 'f'];  // Missing: 'd'
let startChar1 = 97;  // ASCII code of 'a' (hardcoded instead of charCodeAt)
let endChar1 = 102;   // ASCII code of 'f' (hardcoded instead of charCodeAt)
let letterIndex = 0;  // Manual index for array building

// Generate expected sequence WITHOUT built-in functions
for (let i = startChar1; i <= endChar1; i++) {  // Loop from 97 to 102
    let char = "";  // Variable to store character

    // Manual ASCII to character conversion (instead of String.fromCharCode)
    if (i === 97) char = 'a';
    else if (i === 98) char = 'b';
    else if (i === 99) char = 'c';
    else if (i === 100) char = 'd';
    else if (i === 101) char = 'e';
    else if (i === 102) char = 'f';

    expectedLetters1[letterIndex] = char;  // Manual array assignment (instead of push)
    letterIndex++;  // Increment index manually
}

// Find missing letter by comparing arrays
for (let i = 0; i < letterIndex; i++) {  // Check each expected letter
    let found = false;  // Flag to track if letter found

    for (let j = 0; j < 5; j++) {  // Search in actual array (hardcoded length)
        if (expectedLetters1[i] === letters1[j]) {  // Compare letters
            found = true;  // Mark as found
            break;  // Exit inner loop
        }
    }

    if (!found) {  // If letter not found in actual array
        console.log("Missing letter:", expectedLetters1[i]);  // Print missing letter
        break;  // Exit outer loop
    }
}

BUILT-INS AVOIDED:
- No charCodeAt() → Used hardcoded ASCII values
- No String.fromCharCode() → Used manual if-else mapping
- No .push() → Used manual array index assignment
- No .length property → Used hardcoded array size

EXECUTION:
expectedLetters1 becomes ['a', 'b', 'c', 'd', 'e', 'f']
Comparing with ['a', 'b', 'c', 'e', 'f']
'd' is not found, so it's the missing letter
*/
