// merge two array  :
// --------------------------------------------------------------------------------------------------------------::

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const merged = []; // Create result array

// Copy all elements from first array
for (let i = 0; i < array1.length; i++) {
    merged[merged.length] = array1[i]; // Manual push
}
// Copy all elements from second array
for (let i = 0; i < array2.length; i++) {
    merged[merged.length] = array2[i]; // Manual push
}
console.log("Merged:", merged);

/*
BASIC EXPLANATION:
1. Create empty result array
2. Copy all elements from first array to result
3. Copy all elements from second array to result
4. Result contains all elements from both arrays
Simple rule: "add everything from array1, then everything from array2"
*/



// STRING ARRAYS - Merging text arrays
// --------------------------------------------------------------------
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "potato", "onion"];
const food = [];

// Add all fruits
for (let i = 0; i < fruits.length; i++) {
    food[food.length] = fruits[i];
}
// Add all vegetables
for (let i = 0; i < vegetables.length; i++) {
    food[food.length] = vegetables[i];
}
console.log("All food:", food);

/*
STRING ARRAYS EXPLANATION:
- Same logic works for strings, numbers, or any data type
- Just copy elements one by one from each array
- Order matters: first array elements come first
- Shows algorithm works universally
*/



// DIFFERENT SIZES - Arrays don't need to be same length
// --------------------------------------------------------------------
const small = [10, 20];
const large = [30, 40, 50, 60, 70];
const combined = [];

// Copy from small array
for (let i = 0; i < small.length; i++) {
    combined[combined.length] = small[i];
}
// Copy from large array
for (let i = 0; i < large.length; i++) {
    combined[combined.length] = large[i];
}
console.log("Combined:", combined);

/*
DIFFERENT SIZES EXPLANATION:
- Arrays can be different lengths - no problem!
- Each loop runs for its own array's length
- Final result has total length of both arrays combined
- Demonstrates flexibility of the algorithm
*/



// MOST MANUAL - Without using length property
// --------------------------------------------------------------------
const firstArray = [100, 200, 300];
const secondArray = [400, 500];

// Calculate sizes manually
let firstSize = 0;
while (firstArray[firstSize] !== undefined) {
    firstSize = firstSize + 1;
}
let secondSize = 0;
while (secondArray[secondSize] !== undefined) {
    secondSize = secondSize + 1;
}

// Create result manually
const final = new Array();
let finalIndex = 0;

// Copy first array manually
for (let i = 0; i < firstSize; i++) {
    final[finalIndex] = firstArray[i];
    finalIndex = finalIndex + 1;
}
// Copy second array manually
for (let i = 0; i < secondSize; i++) {
    final[finalIndex] = secondArray[i];
    finalIndex = finalIndex + 1;
}
console.log("Final merged:", final);

/*
MOST MANUAL EXPLANATION:
- Calculate array sizes manually (no .length)
- Manual result array creation
- Track result index manually
- Copy elements with manual indexing
- Shows complete manual approach
- Same logic but avoiding all JavaScript conveniences
*/
