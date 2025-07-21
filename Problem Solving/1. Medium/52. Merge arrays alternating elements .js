// merge arrays alternating elements  :
// --------------------------------------------------------------------------------------------------------------::

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const merged = [];

// Find which array is longer
let maxLength = array1.length;
if (array2.length > maxLength) {
    maxLength = array2.length;
}

// Take elements alternating from each array
for (let i = 0; i < maxLength; i++) {
    // Add from first array if element exists
    if (i < array1.length) {
        merged[merged.length] = array1[i];
    }
    // Add from second array if element exists
    if (i < array2.length) {
        merged[merged.length] = array2[i];
    }
}
console.log(merged);
/*
EXPLANATION:
Alternating merge = take one from first, one from second, repeat

STEPS:
1. Find the length of longer array
2. Loop through positions 0, 1, 2, etc.
3. At each position: add element from array1 (if exists), then from array2 (if exists)
4. Result: [array1[0], array2[0], array1[1], array2[1], ...]

EXAMPLE:
Array 1: [1, 2, 3]
Array 2: [a, b, c]
Result:  [1, a, 2, b, 3, c]

WHY CHECK IF ELEMENT EXISTS:
- Arrays might be different lengths
- We don't want undefined values in result
- if (i < array1.length) prevents going beyond array
*/



// Handle unequal array sizes
// -----------------------------------------------------------------
const short = [10, 20];
const long = ["x", "y", "z", "w", "v"];
const result = [];

// Find longer length
let longerLength = short.length;
if (long.length > longerLength) {
    longerLength = long.length;
}

// Alternate through all positions
for (let i = 0; i < longerLength; i++) {
    // Add from short array if position exists
    if (i < short.length) {
        result[result.length] = short[i];
    }
    // Add from long array if position exists
    if (i < long.length) {
        result[result.length] = long[i];
    }
}
console.log(result);
/*
EXPLANATION:
When arrays are different sizes:
- Loop continues until longer array is finished
- Shorter array stops contributing when it runs out
- Longer array continues adding its remaining elements

EXAMPLE:
Short: [10, 20]
Long:  [x, y, z, w, v]
Result: [10, x, 20, y, z, w, v]

TRACE:
i=0: add 10 (short[0]), add x (long[0]) → [10, x]
i=1: add 20 (short[1]), add y (long[1]) → [10, x, 20, y]
i=2: short[2] doesn't exist, add z (long[2]) → [10, x, 20, y, z]
i=3: short[3] doesn't exist, add w (long[3]) → [10, x, 20, y, z, w]
i=4: short[4] doesn't exist, add v (long[4]) → [10, x, 20, y, z, w, v]
*/



// Without using Math.max or length comparison
// -----------------------------------------------------------------
const first = [100, 200, 300];
const second = [500, 600];

// Calculate lengths manually
let firstLength = 0;
while (first[firstLength] !== undefined) {
    firstLength = firstLength + 1;
}

let secondLength = 0;
while (second[secondLength] !== undefined) {
    secondLength = secondLength + 1;
}

// Find bigger length manually
let biggerLength = firstLength;
if (secondLength > firstLength) {
    biggerLength = secondLength;
}

// Create result manually
const final = new Array();
let finalIndex = 0;

// Manual alternating merge
for (let i = 0; i < biggerLength; i++) {
    // Add from first if position exists
    if (i < firstLength) {
        final[finalIndex] = first[i];
        finalIndex = finalIndex + 1;
    }

    // Add from second if position exists
    if (i < secondLength) {
        final[finalIndex] = second[i];
        finalIndex = finalIndex + 1;
    }
}
console.log(final);
/*
EXPLANATION:
- Calculate array lengths manually (no .length property)
- Find bigger length without Math.max
- Manual result array creation and indexing
- Track result index manually
- Shows complete manual approach
- Same logic but avoiding all JavaScript conveniences
*/
