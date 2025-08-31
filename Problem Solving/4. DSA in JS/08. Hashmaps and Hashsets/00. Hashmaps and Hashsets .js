// Hash Function (Core Concept)
//     ↓
// Hash Table (Data Structure Implementation)
//     ↓
// Hash Map & Hash Set (High-level abstractions we use)

// Hashmaps and Hashsets ::
/*
WHAT ARE HASH DATA STRUCTURES?
 --------------------------------------------------------------------- ::
Hash data structures use a "hash function" to convert keys into array indices.
This allows for super fast lookups, insertions, and deletions - usually O(1) time!

Think of it like a library with a catalog system:
- Instead of searching every book (O(n)), you use the catalog to find the exact shelf (O(1))
- The catalog number is like a "hash" of the book's title


*/


// --------------------------------------------------------------------- ::
// PART 1: HASH MAPS (Objects & Map)

/*
HASH MAP BASICS:
- Store key-value pairs
- Keys are unique
- Fast lookup by key
- JavaScript has two main ways: Objects and Map class
*/

// METHOD 1: Using Regular JavaScript Objects
console.log("=== HASH MAP USING OBJECTS ===");

// Creating a hash map (object)
let studentGrades = {};

// Adding key-value pairs
studentGrades["Alice"] = 85;
studentGrades["Bob"] = 92;
studentGrades["Charlie"] = 78;

// Alternative syntax
studentGrades.David = 88;

console.log("Student grades:", studentGrades);
// Output: { Alice: 85, Bob: 92, Charlie: 78, David: 88 }

// Accessing values - O(1) time complexity
console.log("Alice's grade:", studentGrades["Alice"]); // 85
console.log("Bob's grade:", studentGrades.Bob); // 92

// Checking if key exists
if ("Alice" in studentGrades) {
    console.log("Alice is in the system");
}

// Alternative way to check
if (studentGrades["Eve"] !== undefined) {
    console.log("Eve found");
} else {
    console.log("Eve not found");
}

// Updating values
studentGrades["Alice"] = 90; // Alice's grade updated to 90

// Deleting entries
delete studentGrades["Charlie"];
console.log("After deleting Charlie:", studentGrades);

// Getting all keys and values
console.log("All students:", Object.keys(studentGrades));
console.log("All grades:", Object.values(studentGrades));

// METHOD 2: Using JavaScript Map Class
console.log("\n=== HASH MAP USING MAP CLASS ===");

// Creating a Map (more powerful than objects)
let inventory = new Map();

// Adding key-value pairs
inventory.set("apples", 50);
inventory.set("bananas", 30);
inventory.set("oranges", 25);

// Maps can use any type as keys (not just strings!)
inventory.set(1, "Product ID 1");
inventory.set(true, "Boolean key example");

console.log("Inventory size:", inventory.size); // 5

// Getting values
console.log("Apples in stock:", inventory.get("apples")); // 50

// Checking if key exists
console.log("Has bananas?", inventory.has("bananas")); // true
console.log("Has grapes?", inventory.has("grapes")); // false

// Iterating through Map
console.log("\nAll inventory items:");
for (let [item, quantity] of inventory) {
    console.log(`${item}: ${quantity}`);
}

// Alternative iteration methods
inventory.forEach((value, key) => {
    console.log(`${key} -> ${value}`);
});

// Deleting from Map
inventory.delete("oranges");
console.log("After deleting oranges, size:", inventory.size);

// Clear all entries
// inventory.clear(); // Uncomment to clear everything


// --------------------------------------------------------------------- ::
// PART 2: HASH SETS (Set Class)

/*
HASH SET BASICS:
- Store unique values only (no duplicates)
- No key-value pairs, just values
- Fast lookup to check if value exists
- Perfect for tracking unique items
*/

console.log("-------------------------------------------- ::");
console.log("\n=== HASH SETS USING SET CLASS ===");

// Creating a Set
let uniqueNumbers = new Set();

// Adding values
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2); // Duplicate - won't be added again!

console.log("Unique numbers:", uniqueNumbers); // Set {1, 2, 3}
console.log("Set size:", uniqueNumbers.size); // 3

// Creating Set from array (removes duplicates automatically)
let duplicateArray = [1, 2, 2, 3, 3, 4, 5, 5];
let uniqueSet = new Set(duplicateArray);
console.log("Original array:", duplicateArray);
console.log("Unique set:", uniqueSet); // Set {1, 2, 3, 4, 5}

// Converting Set back to array
let uniqueArray = Array.from(uniqueSet);
console.log("Back to array:", uniqueArray); // [1, 2, 3, 4, 5]

// Checking if value exists - O(1) time complexity
console.log("Has 3?", uniqueSet.has(3)); // true
console.log("Has 10?", uniqueSet.has(10)); // false

// Iterating through Set
console.log("\nAll values in set:");
for (let value of uniqueSet) {
    console.log(value);
}

// Using forEach
uniqueSet.forEach(value => {
    console.log(`Value: ${value}`);
});

// Deleting from Set
uniqueSet.delete(5);
console.log("After deleting 5:", uniqueSet);


// --------------------------------------------------------------------- ::
// PART 3: PRACTICAL EXAMPLES
console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Counting Character Frequency (Hash Map)
function countCharacters(str) {
    let charCount = {};

    for (let char of str) {
        // If character exists, increment. Otherwise, start at 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

let text = "hello world";
let frequency = countCharacters(text);
console.log("Character frequency in 'hello world':", frequency);
console.log("-------------------------------------------- ::");
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }





// Example 2: Finding Duplicates (Hash Set)
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.add(item); // It's a duplicate!
        } else {
            seen.add(item); // First time seeing this item
        }
    }

    return Array.from(duplicates);
}

let numbers = [1, 2, 3, 2, 4, 5, 1, 6];
let dupes = findDuplicates(numbers);
console.log("Original array:", numbers);
console.log("Duplicates found:", dupes); // [2, 1]
console.log("-------------------------------------------- ::");




// Example 3: Two Sum Problem (Hash Map)
function twoSum(nums, target) {
    let numMap = new Map(); // number -> index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        // Check if complement exists in our map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        // Store current number and its index
        numMap.set(nums[i], i);
    }

    return []; // No solution found
}

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(`Two numbers that sum to ${target}:`, result); // [0, 1] (indices)
console.log(`The numbers are: ${nums[result[0]]} and ${nums[result[1]]}`); // 2 and 7
console.log("-------------------------------------------- ::");




// Example 4: Anagram Checker (Hash Map)
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let charCount = {};

    // Count characters in first string
    for (let char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract characters from second string
    for (let char of str2.toLowerCase()) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}

console.log("Are 'listen' and 'silent' anagrams?", areAnagrams("listen", "silent")); // true
console.log("Are 'hello' and 'world' anagrams?", areAnagrams("hello", "world")); // false
console.log("-------------------------------------------- ::");





// --------------------------------------------------------------------- ::
// PART 4: WHEN TO USE WHAT?

/*
WHEN TO USE OBJECTS:
- Simple key-value storage
- Keys are always strings
- Need to work with JSON easily
- Most common choice for hash maps in JavaScript

WHEN TO USE MAP:
- Need non-string keys (numbers, objects, etc.)
- Need to maintain insertion order
- Need the size property
- Need to iterate frequently
- More methods available (has, delete, clear, etc.)

WHEN TO USE SET:
- Need to store unique values only
- Want to remove duplicates from arrays
- Need to check membership quickly
- Mathematical set operations
*/


// --------------------------------------------------------------------- ::
// PART 5: TIME COMPLEXITY SUMMARY

/*
HASH MAP TIME COMPLEXITIES:
- Insertion: O(1) average, O(n) worst case
- Deletion: O(1) average, O(n) worst case
- Search/Lookup: O(1) average, O(n) worst case
- Space: O(n)

HASH SET TIME COMPLEXITIES:
- Insertion: O(1) average, O(n) worst case
- Deletion: O(1) average, O(n) worst case
- Search/Lookup: O(1) average, O(n) worst case
- Space: O(n)

Why O(n) worst case?
- Hash collisions can occur (multiple keys hash to same index)
- In worst case, all keys collide and we get linear search
- But this is very rare with good hash functions!
*/


// --------------------------------------------------------------------- ::
// PART 6: COMMON PATTERNS & TRICKS




// Pattern 1: Frequency Counter
function findMostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
}

let items = ["apple", "banana", "apple", "orange", "apple", "banana"];
console.log("Most frequent item:", findMostFrequent(items)); // "apple"
console.log("-------------------------------------------- ::");




// Pattern 2: Grouping with Hash Map
function groupByLength(words) {
    let groups = {};

    for (let word of words) {
        let length = word.length;

        if (!groups[length]) {
            groups[length] = [];
        }

        groups[length].push(word);
    }

    return groups;
}

let words = ["cat", "dog", "elephant", "bird", "fish"];
console.log("Words grouped by length:", groupByLength(words));
// Output: { 3: ['cat', 'dog'], 4: ['bird', 'fish'], 8: ['elephant'] }
console.log("-------------------------------------------- ::");




// Pattern 3: Set Operations
function setUnion(set1, set2) {
    return new Set([...set1, ...set2]);
}

function setIntersection(set1, set2) {
    return new Set([...set1].filter(x => set2.has(x)));
}

function setDifference(set1, set2) {
    return new Set([...set1].filter(x => !set2.has(x)));
}

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

console.log("Set A:", setA);
console.log("Set B:", setB);
console.log("Union:", setUnion(setA, setB)); // {1, 2, 3, 4, 5, 6}
console.log("Intersection:", setIntersection(setA, setB)); // {3, 4}
console.log("Difference (A - B):", setDifference(setA, setB)); // {1, 2}
