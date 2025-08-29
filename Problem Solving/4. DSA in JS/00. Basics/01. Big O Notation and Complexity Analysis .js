// Big O Notation & Complexity Analysis ::

/*

WHAT IS BIG O NOTATION?
- Big O describes how the runtime or space requirements of an algorithm
  grow as the input size increases
- It helps us compare algorithm efficiency and predict performance
- We focus on the WORST-case scenario and ignore constants/lower terms

COMMON BIG O COMPLEXITIES (Best to Worst):
1. O(1)        - Constant time
2. O(log n)    - Logarithmic time
3. O(n)        - Linear time
4. O(n log n)  - Linearithmic time
5. O(n²)       - Quadratic time
6. O(n³)       - Cubic time
7. O(2^n)      - Exponential time
8. O(n!)       - Factorial time

RULES FOR CALCULATING BIG O:
1. Drop constants: O(2n) becomes O(n)
2. Drop lower-order terms: O(n² + n) becomes O(n²)
3. Consider worst-case scenario
4. Focus on dominant operations as n grows large

SPACE COMPLEXITY:
- Additional memory used by algorithm (excluding input)
- Same notation as time complexity
- Consider: variables, data structures, recursive call stack
*/

// --------------------------------------------------------------------- ::
//                          O(1) - CONSTANT TIME
// --------------------------------------------------------------------- ::
// Runtime doesn't change regardless of input size

function getFirstElement(arr) {
    // Always takes same time whether array has 1 or 1 million elements
    return arr[0];
}

function addTwoNumbers(a, b) {
    // Simple arithmetic is always O(1)
    return a + b;
}

function accessObjectProperty(obj) {
    // Object property access is O(1)
    return obj.name;
}

// Examples:
console.log("=== O(1) Examples ===");
console.log(getFirstElement([1, 2, 3, 4, 5])); // 1
console.log(addTwoNumbers(5, 10)); // 15





//                          O(log n) - LOGARITHMIC TIME
// --------------------------------------------------------------------- ::
// Runtime grows slowly - we eliminate half the problem each step

function binarySearch(sortedArr, target) {
    // Each iteration eliminates half the remaining elements
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArr[mid] === target) {
            return mid; // Found target
        } else if (sortedArr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    return -1; // Not found
}

// Example:
console.log("=== O(log n) Examples ===");
const sortedNumbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedNumbers, 7)); // Returns index 3





//                          O(n) - LINEAR TIME
// --------------------------------------------------------------------- ::
// Runtime grows proportionally with input size

function findMax(arr) {
    // Must check every element once
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function printAllElements(arr) {
    // Visits each element exactly once
    for (let element of arr) {
        console.log(element);
    }
}

function linearSearch(arr, target) {
    // Might need to check every element in worst case
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example:
console.log("=== O(n) Examples ===");
console.log(findMax([3, 7, 2, 9, 1])); // 9





//                        O(n log n) - LINEARITHMIC TIME
// --------------------------------------------------------------------- ::
// Common in efficient sorting algorithms

function mergeSort(arr) {
    // Divide array in half (log n levels) and merge (n operations per level)
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example:
console.log("=== O(n log n) Examples ===");
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90])); // Sorted array






//                          O(n²) - QUADRATIC TIME
// Runtime grows with square of input size - nested loops

function bubbleSort(arr) {
    // Each element compared with every other element
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function findAllPairs(arr) {
    // Print all possible pairs
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}

// Example:
console.log("=== O(n²) Examples ===");
console.log(bubbleSort([64, 34, 25, 12])); // Sorted array
console.log(findAllPairs([1, 2, 3])); // [[1,2], [1,3], [2,3]]





//                          O(2^n) - EXPONENTIAL TIME
// --------------------------------------------------------------------- ::
// Runtime doubles with each additional input - very inefficient!

function fibonacci(n) {
    // Naive recursive approach - recalculates same values multiple times
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateAllSubsets(arr) {
    // Generates all possible subsets of an array
    if (arr.length === 0) return [[]];

    const first = arr[0];
    const rest = arr.slice(1);
    const subsetsWithoutFirst = generateAllSubsets(rest);
    const subsetsWithFirst = subsetsWithoutFirst.map(subset => [first, ...subset]);

    return [...subsetsWithoutFirst, ...subsetsWithFirst];
}

// Example:
console.log("=== O(2^n) Examples ===");
console.log(fibonacci(10)); // 55 (but very slow for large n)
console.log(generateAllSubsets([1, 2, 3])); // All subsets





//                    SPACE COMPLEXITY EXAMPLES
// --------------------------------------------------------------------- ::

// O(1) Space - Constant space
function sumArray(arr) {
    let sum = 0; // Only one variable regardless of input size
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// O(n) Space - Linear space
function reverseArray(arr) {
    const reversed = []; // New array of same size as input
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// O(log n) Space - Logarithmic space (recursive binary search)
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Each recursive call uses stack space, but only log n levels deep
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    return binarySearchRecursive(arr, target, left, mid - 1);
}





//                       PRACTICAL EXAMPLES & COMPARISONS
// --------------------------------------------------------------------- ::

// BAD: O(n²) - checking if array has duplicates
function hasDuplicatesBad(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}

// BETTER: O(n) - using Set for duplicate checking
function hasDuplicatesGood(arr) {
    const seen = new Set();
    for (let item of arr) {
        if (seen.has(item)) return true;
        seen.add(item);
    }
    return false;
}

// Performance comparison function
function timeComplexityDemo() {
    const smallArray = [1, 2, 3, 4, 5];
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);

    console.log("=== Performance Comparison ===");

    // O(1) operation
    console.time("O(1) - Array access");
    largeArray[500];
    console.timeEnd("O(1) - Array access");

    // O(n) operation
    console.time("O(n) - Find max");
    findMax(largeArray);
    console.timeEnd("O(n) - Find max");

    // O(n log n) operation
    console.time("O(n log n) - Merge sort");
    mergeSort([...largeArray].reverse()); // Copy and reverse for worst case
    console.timeEnd("O(n log n) - Merge sort");
}






//                           TIPS FOR ANALYSIS
// --------------------------------------------------------------------- ::

/*
ANALYZING YOUR CODE:

1. COUNT THE LOOPS:
   - One loop = O(n)
   - Nested loops = O(n²), O(n³), etc.
   - Independent loops = add complexities

2. RECURSIVE FUNCTIONS:
   - How many recursive calls?
   - What's the depth of recursion?
   - Use recurrence relations: T(n) = aT(n/b) + f(n)

3. COMMON PATTERNS:
   - Array/string iteration = O(n)
   - Binary search = O(log n)
   - Sorting = usually O(n log n)
   - Hash table operations = O(1) average case

4. BUILT-IN METHOD COMPLEXITIES:
   - Array.push() = O(1)
   - Array.pop() = O(1)
   - Array.shift() = O(n)
   - Array.unshift() = O(n)
   - Array.slice() = O(n)
   - Array.sort() = O(n log n)
   - String.indexOf() = O(n)

OPTIMIZATION STRATEGIES:
- Use hash tables/objects for fast lookups
- Avoid nested loops when possible
- Consider divide-and-conquer approaches
- Cache results to avoid recalculation
- Choose appropriate data structures
*/






//                              EXERCISES
// --------------------------------------------------------------------- ::

// Exercise 1: What's the time complexity?
function mysteryFunction1(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }
}
// Answer: O(n) - two separate O(n) loops = O(n) + O(n) = O(n)

// Exercise 2: What's the time complexity?
function mysteryFunction2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
// Answer: O(n²) - nested loops

// Exercise 3: What's the time complexity?
function mysteryFunction3(n) {
    if (n <= 1) return 1;
    return mysteryFunction3(n - 1) + mysteryFunction3(n - 1);
}
// Answer: O(2^n) - exponential due to duplicate recursive calls

// Run the examples
timeComplexityDemo();

// Test the duplicate checking functions
console.log("=== Duplicate Checking Comparison ===");
const testArray = [1, 2, 3, 4, 5, 3];
console.log("Has duplicates (O(n²)):", hasDuplicatesBad(testArray));
console.log("Has duplicates (O(n)):", hasDuplicatesGood(testArray));

/*
KEY TAKEAWAYS:
1. Big O helps us understand algorithm scalability
2. Lower complexity = better performance for large inputs
3. Sometimes trading space for time complexity is worth it
4. Always consider both time AND space complexity
5. Real-world performance depends on constants, hardware, and implementation
6. Choose the right algorithm for your specific use case and constraints

*/


// const funnyNumber = (array) => { // 4 operations
//     for (let i = 0; i < array.length; i++) {
//         if (i === 3) return array[i];
//     }
// };


// const nums = [420, 96, 12, 69, 77];
// console.time("funnyNumber");
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber");

// output :
// 69
// funnyNumber: 9.481ms



const funnyNumber = (array) => { // 1 operation
    return array[3];
};

const nums = [420, 96, 12, 69, 77];
console.time("funnyNumber");
console.log(funnyNumber(nums));
console.timeEnd("funnyNumber");

// output :
// 69
// funnyNumber: 2.236ms
