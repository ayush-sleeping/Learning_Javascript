// ------------------------:: Revision and Practice the ESSENTIAL ::------------------------
// - Reverse a string                     // Reason: Basic string manipulation and indexing
// - Check if a string is a palindrome    // Reason: Two-pointer/string comparison pattern
// - Reverse an array                      // Reason: Array manipulation fundamentals
// - Find largest and smallest in array    // Reason: Single-pass traversal, common check
// - Find frequency of elements in array   // Reason: Counting/hashmap basics
// - Count occurrences of each character  // Reason: String frequency & hashing

// - Remove duplicates from array          // Reason: Deduplication patterns (set/map)
// - Find missing number in array          // Reason: Math/array trick (common interview ask)
// - Merge two array                        // Reason: Array concatenation + dedupe/merge logic
// - Find union of two arrays               // Reason: Combining sets, basic hashing
// - Sort array in ascending order          // Reason: Fundamental sorting understanding
// - Sort array in descending order         // Reason: Sorting variant, comparator idea
// - Merge two sorted arrays without built-in sort // Reason: Two-pointer technique

// - Count words in a sentence              // Reason: String parsing and token counting
// - Remove spaces from string              // Reason: String filtering/parsing
// - Count the number of vowels in a string// Reason: Simple character checks
// - Sum of first N natural numbers         // Reason: Basic math and loops
// - Check if a number is even or odd      // Reason: Bitwise/mod operator basics
// - Find index of element in array         // Reason: Linear search primitive
// - Print all type of star pattern        // Reason: Loop practice (visual)


console.log("------------------------------------ ::");
// - Reverse a string
let str = "Hello World !";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
console.log(reversed);


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}
console.log(reverseString("Hello World !"));


console.log("------------------------------------ ::");
// - Check if a string is a palindrome
let string = "olo";
let opposite = "";
for (let i = string.length - 1; i >= 0; i--) {
    opposite = opposite + string[i];
}
if (string === opposite) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

function checkPalindrome(str) {
    let opposite = "";
    for (let i = str.length - 1; i >= 0; i--) {
        opposite = opposite + str[i];
    }
    if (str === opposite) {
        return "Palindrome";
    } else {
        return "Not A Palindrome";
    }
}
console.log(checkPalindrome("olo"));
console.log(checkPalindrome("hello"));


console.log("------------------------------------ ::");
// - Reverse an array
let word = "Hello";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
}
console.log(reversedWord);



console.log("------------------------------------ ::");
// - Find largest and smallest in array
function findLargestAndSmallest(arr) {
    let arrLength = getArrayLength(arr);
    if (arrLength === 0) {
        return { largest: null, smallest: null };
    }

    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arrLength; i++) {
        let currentElement = arr[i];

        if (currentElement > largest) {
            largest = currentElement;
        }

        if (currentElement < smallest) {
            smallest = currentElement;
        }
    }

    let result = {};
    result.largest = largest;
    result.smallest = smallest;
    return result;
}
function getArrayLength(arr) {
    let length = 0;
    while (arr[length] !== undefined) {
        length++;
    }
    return length;
}
let test = [4, 8, 2, 12, 1, 6];
let result = findLargestAndSmallest(test);
console.log(result); // largest: 12, smallest: 1

// ------
function findLargestSmallest(arr) {
    let arrlength = 0;
    while (arr[arrlength] !== undefined) {
        arrlength++;
    }
    let largest = arr[0];
    let smallest = arr[0];
    for (let i = 1; i < arrlength; i++) {
        let currentElement = arr[i];
        if (currentElement > largest) {
            largest = currentElement;
        }
        if (currentElement < smallest) {
            smallest = currentElement;
        }
    }
    let result = [];
    result.largest = largest;
    result.smallest = smallest;
    return result;
}
console.log(findLargestSmallest([4, 8, 2, 12, 1, 6, 17]));



console.log("------------------------------------ ::");
// - Find frequency of elements in array
function findFrequency(arr) {
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }
    return frequency;
}
let test1 = [1, 2, 3, 1, 1, 3, 1];
let result1 = findFrequency(test1);
console.log(result1); // {1: 3, 2: 2, 3: 2}

// ------
function findFrequencyArray(arr) {
    let unique = [];
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let found = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === element) {
                count[j]++;
                found = true;
                break;
            }
        }
        if (!found) {
            unique[unique.length] = element;
            count[count.length] = 1;
        }
    }
    for (let k = 0; k < unique.length; k++) {
        console.log(unique[k] + " - " + count[k]);
    }
}
let test2 = [1, 2, 3, 1, 1, 3, 1];
findFrequencyArray(test2);


function findFreq(arr) {
    let unique = [];
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let found = false;
        for (let j = 0; j < unique.length; j++) {
            if (unique[j] === element) {
                count[j]++;
                found = true;
                break;
            }
        }
        if (!found) {
            unique[unique.length] = element;
            count[count.length] = 1;
        }
    }
    for (let k = 0; k < unique.length; k++) {
        console.log(unique[k] + " - " + count[k]);
    }
    return unique;
}
console.log(findFreq([1, 2, 3, 1, 1, 3, 1]));





console.log("------------------------------------ ::");
// - Count occurrences of each character
function countCharOccur(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}
console.log(countCharOccur("hello world"));

// --------
function findCharFreq(str) {
    let unique = [];                  // To store unique characters
    let count = [];                   // To store count of each unique character
    for (let i = 0; i < str.length; i++) {      // Loop through each character
        let character = str[i];                   // Get current character
        let found = false;                        // Flag to check if character is already in unique

        for (let j = 0; j < unique.length; j++) { // Loop through unique array
            if (unique[j] === character) {        // If character already exists
                count[j]++;                       // Increment its count
                found = true;                     // Set found to true
                break;                            // Exit inner loop
            }
        }
        if (!found) {                             // If character not found in unique
            unique[unique.length] = character;    // Add character to unique array
            count[count.length] = 1;              // Set its count to 1
        }
    }
    for (let k = 0; k < unique.length; k++) {     // Loop to print each unique char and its count
        console.log(unique[k] + " - " + count[k]);
    }
    return unique;                                // Return unique characters array
}
console.log(findCharFreq("programming"));         // Example usage





console.log("------------------------------------ ::");
// - Remove duplicates from array          // Reason: Deduplication patterns (set/map)
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            unique[unique.length] = arr[i];
        }
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5, 3]));



console.log("------------------------------------ ::");
// - Find missing number in array          // Reason: Math/array trick (common interview ask)
function findMissingNumber(arr) {
    // Find the length of the array (should be N-1 if one number is missing)
    let n = arr.length + 1;                  // Because one number is missing

    // Calculate the expected sum of numbers from 1 to N
    let expectedSum = 0;
    for (let i = 1; i <= n; i++) {           // Loop from 1 to N
        expectedSum = expectedSum + i;       // Add each number to expectedSum
        //console.log(expectedSum);
    }

    // Calculate the actual sum of elements in the array
    let actualSum = 0;
    for (let j = 0; j < arr.length; j++) {   // Loop through the array
        actualSum = actualSum + arr[j];      // Add each element to actualSum
        //console.log(actualSum);
    }

    // The missing number is the difference
    let missing = expectedSum - actualSum;   // Subtract actual from expected
    return missing;                          // Return the missing number
}
console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([2, 3, 1, 5])); // Output: 4



console.log("------------------------------------ ::");
// - Merge two array                        // Reason: Array concatenation + dedupe/merge logic
function mergeArray(arr1, arr2) {
    let merged = [];
    for (let i = 0; i < arr1.length; i++) {
        merged[merged.length] = arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        merged[merged.length] = arr2[j];
    }
    let unique = [];
    for (let k = 0; k < merged.length; k++) {
        let found = false;

        for (let l = 0; l < unique.length; l++) {
            if (merged[k] === unique[l]) {
                found = true;
                break;
            }
        }
        if (!found) {
            unique[unique.length] = merged[k];
        }
    }
    return unique;

}
console.log(mergeArray([1, 2, 3], [2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]




console.log("------------------------------------ ::");
// - Find union of two arrays               // Reason: Combining sets, basic hashing




console.log("------------------------------------ ::");
// - Sort array in ascending order          // Reason: Fundamental sorting understanding




console.log("------------------------------------ ::");
// - Sort array in descending order         // Reason: Sorting variant, comparator idea




console.log("------------------------------------ ::");
// - Merge two sorted arrays without built-in sort // Reason: Two-pointer technique





console.log("------------------------------------ ::");
// - Print all type of star pattern        // Reason: Loop practice (visual)
let num1 = 5;
let pattern1 = "";
if (num1 > 1) {
    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= i; j++) {
            pattern1 = pattern1 + "* ";
        }
        pattern1 += "\n"
    }
    console.log(pattern1);
} else {
    console.log("Num must be greater than +1.");
}
/*
Left Triangle :

*
* *
* * *
* * * *
* * * * *
*/



let num2 = 5;
let pattern2 = "";
if (num2 > 1) {
    for (let i = 1; i <= num2; i++) {
        for (let j = 0; j <= (num2 - i); j++) {
            pattern2 = pattern2 + "* ";
        }
        pattern2 = pattern2 + "\n";
    }
    console.log(pattern2);
} else {
    console.log("Num must be greater than +1.");
}
/*
Downward Left Triangle :

* * * * *
* * * *
* * *
* *
*
*/

let num3 = 5;
let pattern3 = "";
if (num3 > 1) {
    for (let i = 1; i <= num3; i++) {
        for (let j = 1; j <= (num3 - i); j++) {
            pattern3 = pattern3 + "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {
            pattern3 = pattern3 + "* ";
        }
        pattern3 = pattern3 + "\n";
    }
    console.log(pattern3);

} else {
    console.log("Num must be greater than +1.");
}

/*
Pyramid Triangle :

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/
