// Group array elements by condition  :
// --------------------------------------------------------------------------------------------------------------::

// MANUAL IMPLEMENTATION (NO BUILT-INS)
function groupByConditionManual(arr, conditionFunction) {
    // Step 1: Get array length manually without using .length property
    let arrLength = getArrayLength(arr);

    // Step 2: Create arrays to store elements that meet and don't meet condition
    let trueGroup = [];     // Elements that satisfy condition
    let falseGroup = [];    // Elements that don't satisfy condition
    let trueCount = 0;      // Count of elements in true group
    let falseCount = 0;     // Count of elements in false group

    // Step 3: Loop through each element in the array
    for (let i = 0; i < arrLength; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 4: Test current element with the condition function
        let meetsCondition = conditionFunction(currentElement);

        // Step 5: Add element to appropriate group based on condition result
        if (meetsCondition) {
            // Add to true group if condition is met
            trueGroup[trueCount] = currentElement;
            trueCount++; // Increment true group count
        } else {
            // Add to false group if condition is not met
            falseGroup[falseCount] = currentElement;
            falseCount++; // Increment false group count
        }
    }

    // Step 6: Create result object manually
    let result = {};
    result.true = trueGroup;   // Group of elements that meet condition
    result.false = falseGroup; // Group of elements that don't meet condition

    // Step 7: Return the grouped result
    return result;
}

// Helper function to manually calculate array length without using .length property
function getArrayLength(arr) {
    let length = 0; // Start counting from 0

    // Keep checking elements until we hit undefined (end of array)
    while (arr[length] !== undefined) {
        length++; // Increment length counter
    }

    return length; // Return the total length
}

// Example condition function - check if number is even
function isEven(num) {
    return num % 2 === 0; // Return true if number is even, false if odd
}
let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = groupByConditionManual(test1, isEven);
console.log(result1); // Output: { true: [2, 4, 6, 8, 10], false: [1, 3, 5, 7, 9] }

/*
Explanation :
LOGIC BEHIND (Manual Implementation):
1. No built-in functions like .length, .filter(), .reduce()
2. Manual length calculation using undefined check
3. Create separate arrays for true and false groups
4. Test each element with provided condition function
5. Pure algorithmic approach without any built-in helpers

*/



// SIMPLE OBJECT GROUPING APPROACH
// -------------------------------------------------------------------------
function groupByCondition(arr, conditionFunction) {
    // Step 1: Create object to store grouped results
    let groups = {
        true: [],   // Elements that satisfy condition
        false: []   // Elements that don't satisfy condition
    };

    // Step 2: Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 3: Test current element with the condition function
        let meetsCondition = conditionFunction(currentElement);

        // Step 4: Add element to appropriate group
        if (meetsCondition) {
            groups.true.push(currentElement); // Add to true group
        } else {
            groups.false.push(currentElement); // Add to false group
        }
    }

    // Step 5: Return the grouped object
    return groups;
}

// Example condition function - check if string length is greater than 5
function isLongString(str) {
    return str.length > 5; // Return true if string has more than 5 characters
}

let test2 = ["apple", "banana", "cat", "elephant", "dog", "butterfly"];
let result2 = groupByCondition(test2, isLongString);
console.log(result2); // Output: { true: ["banana", "elephant", "butterfly"], false: ["apple", "cat", "dog"] }

/*
Explanation :
LOGIC BEHIND (Simple Object Grouping):
1. Use object with predefined true/false keys
2. Test each element against condition function
3. Push elements into appropriate array based on condition result
4. Clean and readable approach using built-in push method
5. Time complexity O(n), space complexity O(n)

*/



// MULTI-CATEGORY GROUPING
// ----------------------------------------------------------------------------------
function groupByMultipleConditions(arr, conditionObject) {
    // Step 1: Create object to store groups for each condition
    let groups = {};

    // Step 2: Initialize empty arrays for each condition name
    for (let conditionName in conditionObject) {
        groups[conditionName] = []; // Create empty array for each condition
    }

    // Step 3: Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 4: Test element against each condition
        for (let conditionName in conditionObject) {
            let conditionFunction = conditionObject[conditionName]; // Get condition function

            // Step 5: Test if element meets this condition
            if (conditionFunction(currentElement)) {
                groups[conditionName].push(currentElement); // Add to this group
            }
        }
    }

    // Step 6: Return the grouped object
    return groups;
}

// Example condition functions
function isPositive(num) {
    return num > 0; // Check if number is positive
}

function isNegative(num) {
    return num < 0; // Check if number is negative
}

function isEvenNumber(num) {
    return num % 2 === 0; // Check if number is even
}

let test3 = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
let conditions = {
    positive: isPositive,
    negative: isNegative,
    even: isEvenNumber
};
let result3 = groupByMultipleConditions(test3, conditions);
console.log(result3); // Output: { positive: [1, 2, 3, 4, 5], negative: [-3, -2, -1], even: [-2, 0, 2, 4] }

/*
Explanation :

LOGIC BEHIND VERSION 3 (Multi-Category Grouping):
1. Accept object containing multiple condition functions
2. Create separate group for each condition
3. Each element can belong to multiple groups if it meets multiple conditions
4. Flexible approach for complex grouping scenarios
5. Useful when you need overlapping categories

*/

// GROUP BY PROPERTY VALUE
// ----------------------------------------------------------------------------------
function groupByProperty(arr, propertyName) {
    // Step 1: Create object to store groups
    let groups = {};

    // Step 2: Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]; // Get current element

        // Step 3: Get the value of the specified property
        let propertyValue = currentElement[propertyName];

        // Step 4: Create group key from property value
        let groupKey = propertyValue.toString(); // Convert to string for consistent keys

        // Step 5: Create group array if it doesn't exist
        if (!groups[groupKey]) {
            groups[groupKey] = []; // Initialize empty array for new group
        }

        // Step 6: Add element to appropriate group
        groups[groupKey].push(currentElement);
    }

    // Step 7: Return the grouped object
    return groups;
}

let test4 = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "London" },
    { name: "Charlie", age: 25, city: "New York" },
    { name: "David", age: 35, city: "London" },
    { name: "Eve", age: 30, city: "Paris" }
];
let result4 = groupByProperty(test4, "age");
console.log(result4);
// Output: {
//   "25": [{ name: "Alice", age: 25, city: "New York" }, { name: "Charlie", age: 25, city: "New York" }],
//   "30": [{ name: "Bob", age: 30, city: "London" }, { name: "Eve", age: 30, city: "Paris" }],
//   "35": [{ name: "David", age: 35, city: "London" }]
// }

/*
Explanation :

LOGIC BEHIND VERSION 4 (Group by Property Value):
1. Group objects based on the value of a specific property
2. Dynamically create groups as new property values are encountered
3. Convert property values to strings for consistent object keys
4. Useful for grouping objects by common attributes
5. Common pattern in data analysis and organization

*/
