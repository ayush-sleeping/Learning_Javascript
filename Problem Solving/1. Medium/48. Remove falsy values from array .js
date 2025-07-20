// remove falsy values from array  :
// --------------------------------------------------------------------------------------------------------------::

// BASIC MANUAL - Remove falsy values using if statement
const mixedArray = [1, 0, "hello", "", true, false, null, undefined, "world", NaN];
const truthyValues = []; // Create result array for truthy values only

// Check each element in original array
for (let i = 0; i < mixedArray.length; i++) {
    let currentValue = mixedArray[i];
    // Add only if value is truthy (not falsy)
    if (currentValue) {
        truthyValues[truthyValues.length] = currentValue; // Manual push
    }
}
console.log(mixedArray);
console.log(truthyValues);

/*
BASIC EXPLANATION:
JavaScript falsy values: false, 0, "", null, undefined, NaN
1. Go through each element in array
2. Check if element is truthy using if (element)
3. If truthy, add to result array
4. If falsy, skip it
5. Result contains only truthy values
Simple rule: "keep only what evaluates to true"
*/

// MANUAL FALSY CHECK - Without using if(value) shortcut
// -----------------------------------------------------------------------------------
const testArray = [42, 0, "test", "", true, false, null, "abc", undefined, NaN, "end"];
const filtered = [];

for (let i = 0; i < testArray.length; i++) {
    let value = testArray[i];
    let isFalsy = false;

    // Manual check for each falsy value
    if (value === false) isFalsy = true;
    if (value === 0) isFalsy = true;
    if (value === "") isFalsy = true;
    if (value === null) isFalsy = true;
    if (value === undefined) isFalsy = true;
    // NaN check: NaN is not equal to itself
    if (value !== value) isFalsy = true;

    // Add only if not falsy
    if (isFalsy === false) {
        filtered[filtered.length] = value;
    }
}

console.log(testArray);
console.log(filtered);

/*
MANUAL FALSY CHECK EXPLANATION:
- Explicitly check each falsy value type
- false: boolean false
- 0: number zero
- "": empty string
- null: null value
- undefined: undefined value
- NaN: Not a Number (special case: NaN !== NaN is true)
- If none of these match, value is truthy
- Shows understanding of all JavaScript falsy values
*/

// STRING AND NUMBER FOCUS - Specific falsy removal
// -----------------------------------------------------------------------------------
const numberStrings = [5, "0", 0, "hello", "", "false", false, 10, null];
const cleanNumbers = [];

for (let i = 0; i < numberStrings.length; i++) {
    let item = numberStrings[i];
    let keepIt = true;

    // Check specific falsy conditions
    if (item === 0) keepIt = false;           // number zero
    if (item === false) keepIt = false;       // boolean false
    if (item === "") keepIt = false;          // empty string
    if (item === null) keepIt = false;        // null value
    if (item === undefined) keepIt = false;   // undefined

    if (keepIt === true) {
        cleanNumbers[cleanNumbers.length] = item;
    }
}

console.log(numberStrings);
console.log(cleanNumbers);

/*
SPECIFIC FOCUS EXPLANATION:
- Note: "0" (string) is truthy, 0 (number) is falsy
- "false" (string) is truthy, false (boolean) is falsy
- Shows importance of type checking
- Same logic but focusing on common falsy values
- Demonstrates type awareness in falsy checking
*/
