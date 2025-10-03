// ------------------------:: Revision and Practice the ESSENTIAL ::------------------------
// - Reverse a string                     // DSA Topics: Arrays, Strings, Two Pointers
// - Check if a string is a palindrome    // DSA Topics: Strings, Two Pointers
// - Reverse an array                      // DSA Topics: Arrays, Two Pointers
// - Find largest and smallest in array    // DSA Topics: Arrays, Single-pass Traversal
// - Find frequency of elements in array   // DSA Topics: Hash Tables/Maps, Arrays
// - Count occurrences of each character  // DSA Topics: Hash Tables/Maps, Strings

// - Remove duplicates from array          // DSA Topics: Hash Tables/Sets, Arrays
// - Merge two array                        // DSA Topics: Arrays, Set Operations
// - Find union of two arrays               // DSA Topics: Arrays, Set Operations, Hash Tables
// - Sort array in ascending order          // DSA Topics: Sorting (Selection Sort)
// - Sort array in descending order         // DSA Topics: Sorting (Selection Sort variant)
// - Merge two sorted arrays without built-in sort // DSA Topics: Two Pointers, Merge Algorithm
// - Count words in a sentence              // DSA Topics: Strings, Parsing

// - Remove spaces from string              // DSA Topics: Strings, Filtering
// - Count the number of vowels in a string // DSA Topics: Strings, Character Processing
// - Sum of first N natural numbers         // DSA Topics: Math, Arithmetic Progression
// - Check if a number is even or odd      // DSA Topics: Math, Bitwise Operations
// - Find index of element in array         // DSA Topics: Arrays, Linear Search
// - * Find missing number in array          // DSA Topics: Math, Arrays
// - * Print all type of star pattern        // DSA Topics: Nested Loops, Pattern Recognition


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
    let arrlength = 0;                                // Initialize counter to find array length manually
    while (arr[arrlength] !== undefined) {            // Loop while current index has a value (not undefined)
        arrlength++;                                  // Increment counter to move to next index
    }
    let largest = arr[0];                             // Set first element as initial largest value
    let smallest = arr[0];                            // Set first element as initial smallest value

    for (let i = 1; i < arrlength; i++) {            // Loop from second element to end of array
        let currentElement = arr[i];                  // Get current element at index i

        // ---
        if (currentElement > largest) {               // If current element is bigger than largest so far
            largest = currentElement;                 // Update largest to current element
        }

        // ---
        if (currentElement < smallest) {              // If current element is smaller than smallest so far
            smallest = currentElement;                // Update smallest to current element
        }
    }

    let result = [];                                  // Create empty array to store results
    result.largest = largest;                         // Add largest value as property to result array
    result.smallest = smallest;                       // Add smallest value as property to result array
    return result;                                    // Return the result array with both values
}
console.log(findLargestSmallest([4, 8, 2, 12, 1, 6, 17])); // Call function and print result



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
    let unique = [];                        // Array to store unique elements found so far
    let count = [];                         // Array to store count for each unique element


    for (let i = 0; i < arr.length; i++) {  // Loop through each element in the input array
        let element = arr[i];               // Get the current element
        let found = false;                  // Flag to check if element is already in unique array


        for (let j = 0; j < unique.length; j++) { // Loop through unique array to check for duplicates
            if (unique[j] === element) {    // If element already exists in unique array
                count[j]++;                 // Increment its count at the same index
                found = true;               // Mark as found
                break;                      // Exit the inner loop since we found it
            }
        }


        if (!found) {                       // If element was not found in unique array
            unique[unique.length] = element;// Add element to unique array
            count[count.length] = 1;        // Set its count to 1 in count array
        }
    }


    for (let k = 0; k < unique.length; k++) {      // Loop through all unique elements
        console.log(unique[k] + " - " + count[k]); // Print each unique element and its count
    }

    return unique;                          // Return the array of unique elements
}
console.log(findFreq([1, 2, 3, 1, 1, 3, 1]));      // Call function and print result





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
function unionArrays(arr1, arr2) {

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
console.log(unionArrays([1, 2, 3], [2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]



console.log("------------------------------------ ::");
// - Sort array in ascending order          // Reason: Fundamental sorting understanding
function sortAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {         // Outer loop for each element
        let minIndex = i;                              // Assume current index is minimum
        for (let j = i + 1; j < arr.length; j++) {     // Inner loop to find the smallest element
            if (arr[j] < arr[minIndex]) {              // If a smaller element is found
                minIndex = j;                          // Update minIndex
            }
        }
        // Swap arr[i] and arr[minIndex] if needed
        if (minIndex !== i) {
            let temp = arr[i];                         // Store current value in temp
            arr[i] = arr[minIndex];                    // Place smallest value at current position
            arr[minIndex] = temp;                      // Place temp value at minIndex
        }
    }
    return arr;                                        // Return sorted array
}
console.log(sortAscending([5, 2, 8, 1, 3])); // Output: [1, 2, 3, 5, 8]



console.log("------------------------------------ ::");
// - Sort array in descending order         // Reason: Sorting variant, comparator idea
function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}
console.log(sortDescending([5, 2, 8, 1, 3])); // Output: [8, 5, 3, 2, 1]



console.log("------------------------------------ ::");
// - Merge two sorted arrays without built-in sort // Reason: Two-pointer technique
function mergeSortedArrays(arr1, arr2) {
    let merged = [];                      // Array to store the merged result
    let i = 0;                            // Pointer for arr1
    let j = 0;                            // Pointer for arr2

    // Loop until one array is fully traversed
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {          // If arr1 element is smaller
            merged[merged.length] = arr1[i]; // Add arr1 element to merged
            i++;                          // Move pointer in arr1
        } else {
            merged[merged.length] = arr2[j]; // Add arr2 element to merged
            j++;                          // Move pointer in arr2
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        merged[merged.length] = arr1[i];
        i++;
    }

    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        merged[merged.length] = arr2[j];
        j++;
    }

    return merged;                        // Return the merged sorted array
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 7], [3, 4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6, 7]



console.log("------------------------------------ ::");
// - Count words in a sentence              // Reason: String parsing and token counting
function countWords(sentence) {
    let wordCount = 0;                           // Counter for words
    let inWord = false;                          // Flag to track if we're inside a word
    for (let i = 0; i < sentence.length; i++) {  // Loop through each character
        let char = sentence[i];                  // Get current character
        if (char !== ' ') {                      // If character is not a space
            if (!inWord) {                       // If we weren't in a word before
                wordCount++;                     // Start of a new word, increment count
                inWord = true;                   // Set flag that we're now in a word
            }
        } else {                                 // If character is a space
            inWord = false;                      // We're no longer in a word
        }
    }
    return wordCount;                            // Return total word count
}
console.log(countWords("Hello world")); // Output: 2
console.log(countWords("JavaScript is awesome")); // Output: 3
console.log(countWords("  Hello   world  ")); // Output: 2 (handles extra spaces)
console.log(countWords("")); // Output: 0



console.log("------------------------------------ ::");
// - Remove spaces from string              // Reason: String filtering/parsing
function removeSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result = result + str[i];
        }
    }
    return result;
}
console.log(removeSpaces("hello world"));         // Output: "helloworld"
console.log(removeSpaces("  JavaScript  is fun ")); // Output: "JavaScriptisfun"
console.log(removeSpaces("   "));                // Output: ""
console.log(removeSpaces("noSpaces"));           // Output: "noSpaces"



console.log("------------------------------------ ::");
// - Count the number of vowels in a string.   // Reason: Simple character checks
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        for (let j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}
console.log(countVowels("hello world"));      // Output: 3
console.log(countVowels("JavaScript"));       // Output: 3
console.log(countVowels("AEIOUaeiou"));       // Output: 10
console.log(countVowels("xyz"));              // Output: 0



console.log("------------------------------------ ::");
// - Sum of first N natural numbers         // Reason: Basic math and loops
function sumOfFirstN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfFirstN(5));  // Output: 15 (1+2+3+4+5)
console.log(sumOfFirstN(10)); // Output: 55 (1+2+...+10)
console.log(sumOfFirstN(1));  // Output: 1
console.log(sumOfFirstN(0));  // Output: 0



console.log("------------------------------------ ::");
// - Check if a number is even or odd      // Reason: Bitwise/mod operator basics
function isEvenOrOdd(num) {
    if (num % 2 === 0) {                // If remainder is 0 when divided by 2
        return "Even";                  // Number is even
    } else {
        return "Odd";                   // Number is odd
    }
}
console.log(isEvenOrOdd(4));  // Output: "Even"
console.log(isEvenOrOdd(7));  // Output: "Odd"
console.log(isEvenOrOdd(0));  // Output: "Even"
console.log(isEvenOrOdd(-3)); // Output: "Odd"



console.log("------------------------------------ ::");
// - Find index of element in array         // Reason: Linear search primitive
function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage:
console.log(findIndex([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(findIndex([1, 2, 3, 4, 5], 6));      // Output: -1
console.log(findIndex([], 10));                  // Output: -1



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

let num = 5;
let pattern = "";
if (num > 1) {
    for (let i = 1; i <= num; i++) {                  // Loop for each row (1 to num)
        for (let j = 1; j <= (num - i); j++) {        // Add spaces before stars to center the pyramid
            pattern = pattern + "  ";                 // Each space is two spaces for better alignment
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {    // Add stars for the current row
            pattern = pattern + "* ";                 // Add a star and a space
        }
        pattern = pattern + "\n";                     // Move to the next line after each row
    }
    console.log(pattern);                             // Print the complete pattern
} else {
    console.log("Invalid Number");                    // Handle invalid input
}
/*
Pyramid Triangle :

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/
