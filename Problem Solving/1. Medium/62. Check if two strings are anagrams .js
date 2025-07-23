// check if two strings are anagrams  :
// --------------------------------------------------------------------------------------------------------------::

// SIMPLE SORTING APPROACH
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

let test1 = areAnagrams("listen", "silent");
let test2 = areAnagrams("hello", "world");
console.log(test1); // true
console.log(test2); // false
/*
Explanation :

LOGIC BEHIND VERSION 1 (Sorting Approach):
1. Two strings are anagrams if they contain the same characters with same frequency
2. If we sort both strings, anagrams will become identical
3. First check if lengths are equal (anagrams must have same length)
4. Convert both to lowercase to handle case differences
5. Split into characters, sort them, join back to string
6. Compare the sorted strings - if equal, they are anagrams

function areAnagrams(str1, str2) {
    // If lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert first string to lowercase, split into array, sort, join back
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');

    // Convert second string to lowercase, split into array, sort, join back
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');

    // If sorted strings are equal, original strings are anagrams
    return sortedStr1 === sortedStr2;
}

let test1 = areAnagrams("listen", "silent");
let test2 = areAnagrams("hello", "world");
console.log(test1); // true
console.log(test2); // false

*/



// ----------------------------------------------------------------------------------
// MANUAL CHARACTER COUNTING (NO BUILT-INS)
function areAnagramsManual(str1, str2) {
    if (getStringLength(str1) !== getStringLength(str2)) {
        return false;
    }

    let charCounts = [];
    let chars = [];
    let charIndex = 0;

    for (let i = 0; i < getStringLength(str1); i++) {
        let char = toLowerCase(str1[i]);
        let found = false;

        for (let j = 0; j < charIndex; j++) {
            if (chars[j] === char) {
                charCounts[j]++;
                found = true;
                break;
            }
        }

        if (!found) {
            chars[charIndex] = char;
            charCounts[charIndex] = 1;
            charIndex++;
        }
    }

    for (let i = 0; i < getStringLength(str2); i++) {
        let char = toLowerCase(str2[i]);
        let found = false;

        for (let j = 0; j < charIndex; j++) {
            if (chars[j] === char) {
                charCounts[j]--;
                found = true;
                break;
            }
        }

        if (!found) {
            return false;
        }
    }

    for (let i = 0; i < charIndex; i++) {
        if (charCounts[i] !== 0) {
            return false;
        }
    }

    return true;
}

function getStringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

function toLowerCase(char) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(charCode + 32);
    }
    return char;
}

let test5 = areAnagramsManual("Astronomer", "Moon starer");
let test6 = areAnagramsManual("hello", "bello");
console.log(test5); // false (has spaces)
console.log(test6); // false

/*
Explanation :

LOGIC BEHIND VERSION 3 (Manual Implementation):
1. No built-in functions like .length, .toLowerCase(), objects
2. Manual string length calculation using undefined check
3. Manual character arrays to track characters and their counts
4. Manual lowercase conversion using ASCII manipulation
5. Two-pass algorithm: count characters in first string, subtract from second
6. Final verification that all counts are zero

function areAnagramsManual(str1, str2) {
    // Compare lengths using manual length function
    if (getStringLength(str1) !== getStringLength(str2)) {
        return false;
    }

    // Manual arrays to store characters and their counts
    let charCounts = [];  // Store count for each unique character
    let chars = [];       // Store unique characters found
    let charIndex = 0;    // Track how many unique characters we have

    // Count characters in first string
    for (let i = 0; i < getStringLength(str1); i++) {
        // Convert character to lowercase manually
        let char = toLowerCase(str1[i]);
        let found = false;

        // Look for this character in our existing list
        for (let j = 0; j < charIndex; j++) {
            if (chars[j] === char) {
                // Character found, increment its count
                charCounts[j]++;
                found = true;
                break;
            }
        }

        // If character not found, add it to our lists
        if (!found) {
            chars[charIndex] = char;
            charCounts[charIndex] = 1;
            charIndex++;
        }
    }

    // Subtract characters from second string
    for (let i = 0; i < getStringLength(str2); i++) {
        // Convert character to lowercase manually
        let char = toLowerCase(str2[i]);
        let found = false;

        // Look for this character in our list
        for (let j = 0; j < charIndex; j++) {
            if (chars[j] === char) {
                // Character found, decrement its count
                charCounts[j]--;
                found = true;
                break;
            }
        }

        // If character not found in first string, not anagrams
        if (!found) {
            return false;
        }
    }

    // Check if all character counts are zero
    for (let i = 0; i < charIndex; i++) {
        if (charCounts[i] !== 0) {
            return false;
        }
    }

    // All counts are zero, strings are anagrams
    return true;
}

// Manual function to get string length
function getStringLength(str) {
    let length = 0;
    // Keep checking characters until we hit undefined
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

// Manual function to convert character to lowercase
function toLowerCase(char) {
    // Get ASCII code of character
    let charCode = char.charCodeAt(0);

    // If it's uppercase (A-Z has ASCII 65-90)
    if (charCode >= 65 && charCode <= 90) {
        // Convert to lowercase by adding 32
        return String.fromCharCode(charCode + 32);
    }

    // Return character unchanged if already lowercase or not a letter
    return char;
}

let test5 = areAnagramsManual("Astronomer", "Moon starer");
let test6 = areAnagramsManual("hello", "bello");
console.log(test5); // false (has spaces)
console.log(test6); // false

*/



// ----------------------------------------------------------------------------------
// CHARACTER FREQUENCY COUNTING APPROACH
function areAnagramsFrequency(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let charCount = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i].toLowerCase();
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i].toLowerCase();
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

let test3 = areAnagramsFrequency("race", "care");
let test4 = areAnagramsFrequency("rat", "car");
console.log(test3); // true
console.log(test4); // false

/*
Explanation :

LOGIC BEHIND VERSION 2 (Frequency Counting):
1. Count frequency of each character in first string
2. Subtract frequency for each character in second string
3. If any character count goes negative or doesn't exist, not anagrams
4. This approach is more efficient than sorting for large strings
5. Uses object to store character frequencies
6. Single pass through each string makes it O(n) time complexity

function areAnagramsFrequency(str1, str2) {
    // Early return if lengths don't match
    if (str1.length !== str2.length) {
        return false;
    }

    // Object to store character frequencies
    let charCount = {};

    // Count frequency of each character in first string
    for (let i = 0; i < str1.length; i++) {
        // Convert to lowercase for case-insensitive comparison
        let char = str1[i].toLowerCase();

        // Increment count (or set to 1 if first occurrence)
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract frequency for each character in second string
    for (let i = 0; i < str2.length; i++) {
        // Convert to lowercase for case-insensitive comparison
        let char = str2[i].toLowerCase();

        // If character doesn't exist in first string, not anagrams
        if (!charCount[char]) {
            return false;
        }

        // Decrease the count
        charCount[char]--;
    }

    // If we reach here, all characters matched perfectly
    return true;
}

let test3 = areAnagramsFrequency("race", "care");
let test4 = areAnagramsFrequency("rat", "car");
console.log(test3); // true
console.log(test4); // false

*/
