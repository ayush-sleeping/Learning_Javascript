// sort array in ascending order  :
// --------------------------------------------------------------------------------------------------------------::

// BASIC MANUAL SORTING
const originalArray = [5, 2, 8, 1, 9];
const result = [];

// Create a copy so we don't modify original array
for (let i = 0; i < originalArray.length; i++) {
    result[i] = originalArray[i];
}

// Keep checking and swapping until everything is sorted
let isChanged = true;
while (isChanged) {
    isChanged = false; // Assume no changes needed this time

    // Go through array and swap any wrong pairs
    for (let i = 0; i < result.length - 1; i++) {
        // If left number is bigger than right number, swap them
        if (result[i] > result[i + 1]) {
            // Swapping process: save left, move right to left, put saved to right
            let bigger = result[i];
            result[i] = result[i + 1];
            result[i + 1] = bigger;
            isChanged = true; // Mark that we made a change
        }
    }
}
console.log(result);

/*
EXPLANATION:
- Copy original array so we don't change it
- Keep comparing neighbors: if left > right, swap them
- Use isChanged flag to know when we're done
- When no swaps happen in a full pass, array is sorted
- Simple and works, but takes multiple passes through array
*/

// SUPER MANUAL (NO BUILT-IN FEATURES)
// ------------------------------------------------------------------------------------
let arraySize = 0;
const testArray = [5, 2, 8, 1, 9];

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

// Manual sorting algorithm
let stillChanging = true;
while (stillChanging) {
    stillChanging = false; // Assume no changes needed
    let checkIndex = 0;

    // Compare adjacent elements manually
    while (checkIndex < arraySize - 1) {
        // If left element is greater than right element, swap them
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
console.log("more manual result:", manualResult);

/*
EXPLANATION:
- Even more manual: calculate array size ourselves (no .length)
- Count elements by checking when we hit undefined
- Copy and sort using only basic operations
- Shows how much work JavaScript does for us behind the scenes
- Same sorting logic but without any convenience features
*/

// BUBBLE SORT FUNCTION (STRUCTURED APPROACH)
// ------------------------------------------------------------------------------------
function bubbleSortAscending(arr) {
    // Create a copy so we don't modify original array
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    // Bubble sort algorithm
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            // Compare adjacent elements
            if (result[j] > result[j + 1]) {
                // Swap if they're in wrong order
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

const numbers1 = [64, 34, 25, 12, 22, 11, 90];
console.log("given:", numbers1);
console.log("by bubble sort:", bubbleSortAscending(numbers1));

/*
EXPLANATION:
- Proper bubble sort with exact number of passes needed
- Outer loop controls passes, inner loop does comparisons
- Each pass puts largest unsorted element in correct position
- More efficient than Section 1 (fixed number of passes)
- Function format makes it reusable for any array
- This is the "textbook" version of bubble sort algorithm
*/
