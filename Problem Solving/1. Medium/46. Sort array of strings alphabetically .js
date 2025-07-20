// sort array of strings alphabetically  :
// --------------------------------------------------------------------------------------------------------------::

const words = ["banana", "apple", "cherry", "date"];

// Copy to new array
const sorted = [];
for (let i = 0; i < words.length; i++) {
    sorted[i] = words[i];
}

// Keep swapping until sorted
let swapped = true;
while (swapped) {
    swapped = false;

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] > sorted[i + 1]) {
            // Swap
            let temp = sorted[i];
            sorted[i] = sorted[i + 1];
            sorted[i + 1] = temp;
            swapped = true;
        }
    }
}

console.log("Original:", words);
console.log("Sorted:", sorted);

/*
EXPLANATION:
1. Copy array to avoid changing original
2. Compare each pair of words
3. If left word > right word alphabetically, swap them
4. Keep doing this until no more swaps needed
5. Done! Array is now sorted alphabetically
*/


// SUPER MANUAL (NO BUILT-IN FEATURES) - ALPHABETICAL
// ------------------------------------------------------------------------------------
let arraySize = 0;
const testArray = ["dog", "cat", "bird", "ant"];

// Calculate array size manually (no .length property)
while (testArray[arraySize] !== undefined) {
    arraySize = arraySize + 1;
}

// Create result array manually
const manualResult = new Array();
let copyIndex = 0;

// Copy array elements manually (no built-in methods)
while (testArray[copyIndex] !== undefined) {
    manualResult[copyIndex] = testArray[copyIndex];
    copyIndex = copyIndex + 1;
}

// Manual sorting algorithm for alphabetical order
let stillChanging = true;
while (stillChanging) {
    stillChanging = false; // Assume no changes needed
    let checkIndex = 0;

    // Compare adjacent elements manually
    while (checkIndex < arraySize - 1) {
        // If left string comes AFTER right string alphabetically, swap them
        if (manualResult[checkIndex] > manualResult[checkIndex + 1]) {
            // Manual swap without using convenient variable names
            let temp = manualResult[checkIndex];
            manualResult[checkIndex] = manualResult[checkIndex + 1];
            manualResult[checkIndex + 1] = temp;
            stillChanging = true; // Mark that a change was made
        }
        checkIndex = checkIndex + 1; // Move to next pair
    }
}
console.log("Super manual alphabetical:", manualResult);

/*
EXPLANATION:
- Even more manual: calculate array size ourselves (no .length)
- Count elements by checking when we hit undefined
- Copy and sort using only basic operations
- String comparison works same as numbers: "dog" > "cat" is true
- Shows how much work JavaScript does for us behind the scenes
- Same sorting logic but comparing strings instead of numbers
*/

// BUBBLE SORT FUNCTION (STRUCTURED APPROACH) - ALPHABETICAL
// ------------------------------------------------------------------------------------
function bubbleSortAlphabetical(arr) {
    // Create a copy so we don't modify original array
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    // Bubble sort algorithm for alphabetical order
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            // Compare adjacent string elements
            if (result[j] > result[j + 1]) { // ALPHABETICAL: swap if left > right
                // Swap if they're in wrong order
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

const words1 = ["zebra", "apple", "dog", "cat", "banana"];
console.log("Given:", words1);
console.log("Bubble sort alphabetical:", bubbleSortAlphabetical(words1));

/*
EXPLANATION:
- Proper bubble sort with exact number of passes needed
- Outer loop controls passes, inner loop does comparisons
- Each pass puts alphabetically latest string in correct position
- More efficient than Section 1 (fixed number of passes)
- Function format makes it reusable for any string array
- Exact same code as number sorting - JavaScript handles string comparison!
*/
