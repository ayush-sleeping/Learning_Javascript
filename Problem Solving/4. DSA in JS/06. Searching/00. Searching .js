// Searching (Linear Search, Binary Search, ... )
/*
WHAT IS SEARCHING?
- Finding a specific element in a collection of data
- Fundamental operation in computer science
- Different algorithms have different time/space trade-offs

TYPES OF SEARCHING:
1. Linear/Sequential Search
2. Binary Search
3. Jump Search
4. Interpolation Search
5. Exponential Search
6. Ternary Search

KEY CONCEPTS:
- Sorted vs Unsorted data
- Time complexity analysis
- Space complexity considerations
- Best, average, and worst cases
*/


// --------------------------------------------------------------------- ::
//                      LINEAR SEARCH - O(n)
// --------------------------------------------------------------------- ::
// Works on both sorted and unsorted arrays

function linearSearch(arr, target) {
    /*
    Time Complexity: O(n) - might check every element
    Space Complexity: O(1) - only uses few variables
    Best Case: O(1) - element is first
    Worst Case: O(n) - element is last or not present
    */

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index of found element
        }
    }
    return -1; // Element not found
}

// Enhanced version with additional info
function linearSearchDetailed(arr, target) {
    let comparisons = 0;

    for (let i = 0; i < arr.length; i++) {
        comparisons++;
        if (arr[i] === target) {
            return {
                found: true,
                index: i,
                comparisons: comparisons,
                value: arr[i]
            };
        }
    }

    return {
        found: false,
        index: -1,
        comparisons: comparisons,
        value: null
    };
}

// Find ALL occurrences of target
function linearSearchAll(arr, target) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}


// --------------------------------------------------------------------- ::
//                      BINARY SEARCH - O(log n)
// --------------------------------------------------------------------- ::
// Only works on SORTED arrays - eliminates half each iteration

function binarySearch(sortedArr, target) {
    /*
    Time Complexity: O(log n) - eliminates half each step
    Space Complexity: O(1) - iterative version
    Prerequisites: Array MUST be sorted
    */

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

// Recursive version of binary search
function binarySearchRecursive(sortedArr, target, left = 0, right = sortedArr.length - 1) {
    /*
    Time Complexity: O(log n)
    Space Complexity: O(log n) - due to recursive call stack
    */

    if (left > right) return -1; // Base case: not found

    let mid = Math.floor((left + right) / 2);

    if (sortedArr[mid] === target) {
        return mid; // Found target
    } else if (sortedArr[mid] < target) {
        return binarySearchRecursive(sortedArr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(sortedArr, target, left, mid - 1);
    }
}

// Binary search with detailed tracking
function binarySearchDetailed(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    let comparisons = 0;
    let steps = [];

    while (left <= right) {
        comparisons++;
        let mid = Math.floor((left + right) / 2);

        steps.push({
            step: comparisons,
            left: left,
            right: right,
            mid: mid,
            midValue: sortedArr[mid],
            action: sortedArr[mid] === target ? "found" :
                sortedArr[mid] < target ? "go right" : "go left"
        });

        if (sortedArr[mid] === target) {
            return {
                found: true,
                index: mid,
                comparisons: comparisons,
                steps: steps
            };
        } else if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        found: false,
        index: -1,
        comparisons: comparisons,
        steps: steps
    };
}

// --------------------------------------------------------------------- ::
//                      JUMP SEARCH - O(√n)
// --------------------------------------------------------------------- ::
// Jumps ahead by √n steps, then linear search in block

function jumpSearch(sortedArr, target) {
    /*
    Time Complexity: O(√n)
    Space Complexity: O(1)
    Works on sorted arrays
    Better than linear, worse than binary for large arrays
    */

    const n = sortedArr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Jump ahead until we find a block where target might be
    while (sortedArr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1; // Element not present
    }

    // Linear search in the identified block
    while (sortedArr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1;
    }

    return sortedArr[prev] === target ? prev : -1;
}

// --------------------------------------------------------------------- ::
//                   INTERPOLATION SEARCH - O(log log n)
// --------------------------------------------------------------------- ::
// Estimates position based on value - works best with uniformly distributed data

function interpolationSearch(sortedArr, target) {
    /*
    Time Complexity: O(log log n) best case, O(n) worst case
    Space Complexity: O(1)
    Best for uniformly distributed sorted arrays
    */

    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right && target >= sortedArr[left] && target <= sortedArr[right]) {
        // If array has only one element
        if (left === right) {
            return sortedArr[left] === target ? left : -1;
        }

        // Estimate position using interpolation formula
        let pos = left + Math.floor(
            ((target - sortedArr[left]) * (right - left)) /
            (sortedArr[right] - sortedArr[left])
        );

        if (sortedArr[pos] === target) {
            return pos;
        } else if (sortedArr[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }

    return -1;
}

// --------------------------------------------------------------------- ::
//                    EXPONENTIAL SEARCH - O(log n)
// --------------------------------------------------------------------- ::
// Find range where element exists, then binary search

function exponentialSearch(sortedArr, target) {
    /*
    Time Complexity: O(log n)
    Space Complexity: O(1)
    Useful when we don't know the size of array
    */

    const n = sortedArr.length;

    // If target is at first position
    if (sortedArr[0] === target) return 0;

    // Find range for binary search by repeated doubling
    let bound = 1;
    while (bound < n && sortedArr[bound] <= target) {
        bound *= 2;
    }

    // Binary search in found range
    return binarySearchInRange(sortedArr, target, bound / 2, Math.min(bound, n - 1));
}

function binarySearchInRange(arr, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// --------------------------------------------------------------------- ::
//                      TERNARY SEARCH - O(log₃ n)
// --------------------------------------------------------------------- ::
// Divides array into 3 parts instead of 2

function ternarySearch(sortedArr, target) {
    /*
    Time Complexity: O(log₃ n) ≈ O(log n)
    Space Complexity: O(1)
    Divides search space into 3 parts
    */

    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        // Two midpoints divide array into 3 parts
        let mid1 = left + Math.floor((right - left) / 3);
        let mid2 = right - Math.floor((right - left) / 3);

        if (sortedArr[mid1] === target) return mid1;
        if (sortedArr[mid2] === target) return mid2;

        if (target < sortedArr[mid1]) {
            right = mid1 - 1; // Search first third
        } else if (target > sortedArr[mid2]) {
            left = mid2 + 1; // Search last third
        } else {
            left = mid1 + 1; // Search middle third
            right = mid2 - 1;
        }
    }

    return -1;
}

// --------------------------------------------------------------------- ::
//                    STRING SEARCHING ALGORITHMS
// --------------------------------------------------------------------- ::

// Naive string search - O(nm) where n = text length, m = pattern length
function naiveStringSearch(text, pattern) {
    const results = [];

    for (let i = 0; i <= text.length - pattern.length; i++) {
        let match = true;
        for (let j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) results.push(i);
    }

    return results;
}

// KMP (Knuth-Morris-Pratt) String Search - O(n + m)
function kmpSearch(text, pattern) {
    // Build failure function (partial match table)
    function buildFailureFunction(pattern) {
        const failure = new Array(pattern.length).fill(0);
        let j = 0;

        for (let i = 1; i < pattern.length; i++) {
            while (j > 0 && pattern[i] !== pattern[j]) {
                j = failure[j - 1];
            }
            if (pattern[i] === pattern[j]) {
                j++;
            }
            failure[i] = j;
        }
        return failure;
    }

    const failure = buildFailureFunction(pattern);
    const results = [];
    let j = 0; // Pattern index

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = failure[j - 1];
        }

        if (text[i] === pattern[j]) {
            j++;
        }

        if (j === pattern.length) {
            results.push(i - j + 1);
            j = failure[j - 1];
        }
    }

    return results;
}

// --------------------------------------------------------------------- ::
//                      SPECIALIZED SEARCHES
// --------------------------------------------------------------------- ::

// Search in rotated sorted array
function searchRotatedArray(nums, target) {
    /*
    Time Complexity: O(log n)
    For arrays like [4,5,6,7,0,1,2] searching for 0
    */

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // Check which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// Find peak element (element greater than neighbors)
function findPeak(arr) {
    /*
    Time Complexity: O(log n)
    Peak: arr[i] > arr[i-1] && arr[i] > arr[i+1]
    */

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            right = mid; // Peak is in left half (including mid)
        } else {
            left = mid + 1; // Peak is in right half
        }
    }

    return left; // Index of peak element
}

// Search for element in 2D matrix
function searchMatrix(matrix, target) {
    /*
    Time Complexity: O(log(m*n))
    Treats 2D matrix as 1D sorted array
    */

    if (!matrix.length || !matrix[0].length) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        let midValue = matrix[row][col];

        if (midValue === target) return true;
        else if (midValue < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
}

// --------------------------------------------------------------------- ::
//                    PERFORMANCE COMPARISON
// --------------------------------------------------------------------- ::

function performanceComparison() {
    console.log("=== SEARCHING ALGORITHMS PERFORMANCE COMPARISON ===\n");

    // Test data
    const smallArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2);
    const target = 15000;

    console.log("Array sizes: Small =", smallArray.length, "Large =", largeArray.length);
    console.log("Searching for:", target, "\n");

    // Linear Search Performance
    console.time("Linear Search (Large)");
    const linearResult = linearSearch(largeArray, target);
    console.timeEnd("Linear Search (Large)");
    console.log("Linear Search Result:", linearResult);

    // Binary Search Performance
    console.time("Binary Search (Large)");
    const binaryResult = binarySearch(largeArray, target);
    console.timeEnd("Binary Search (Large)");
    console.log("Binary Search Result:", binaryResult);

    // Detailed comparison
    console.log("\n=== Detailed Analysis ===");
    const linearDetailed = linearSearchDetailed(smallArray, 15);
    const binaryDetailed = binarySearchDetailed(smallArray, 15);

    console.log("Linear Search:", linearDetailed);
    console.log("Binary Search:", binaryDetailed);
}

// --------------------------------------------------------------------- ::
//                      REAL-WORLD EXAMPLES
// --------------------------------------------------------------------- ::

// Search in array of objects
function searchUsers(users, searchTerm, searchBy = 'name') {
    /*
    Practical example: searching user database
    */

    return users.filter(user =>
        user[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Binary search for insertion point
function searchInsertPosition(sortedArr, target) {
    /*
    Find position where target should be inserted to maintain sorted order
    Used in insertion algorithms
    */

    let left = 0;
    let right = sortedArr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

// Search in array with duplicates - find first/last occurrence
function findFirstOccurrence(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching left for first occurrence
        } else if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

function findLastOccurrence(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArr[mid] === target) {
            result = mid;
            left = mid + 1; // Continue searching right for last occurrence
        } else if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// --------------------------------------------------------------------- ::
//                         DEMONSTRATIONS
// --------------------------------------------------------------------- ::

console.log("=== LINEAR SEARCH EXAMPLES ===");
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Array:", unsortedArray);
console.log("Linear search for 22:", linearSearch(unsortedArray, 22));
console.log("All occurrences of 22:", linearSearchAll([22, 11, 22, 64, 22], 22));

console.log("\n=== BINARY SEARCH EXAMPLES ===");
const sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log("Sorted Array:", sortedArray);
console.log("Binary search for 25:", binarySearch(sortedArray, 25));
console.log("Binary search for 99:", binarySearch(sortedArray, 99));

console.log("\n=== ADVANCED SEARCH EXAMPLES ===");
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
console.log("Rotated array:", rotatedArray);
console.log("Search for 0:", searchRotatedArray(rotatedArray, 0));

const peakArray = [1, 3, 20, 4, 1, 0];
console.log("Peak array:", peakArray);
console.log("Peak element at index:", findPeak(peakArray), "value:", peakArray[findPeak(peakArray)]);

// String searching
console.log("\n=== STRING SEARCH EXAMPLES ===");
const text = "hello world hello universe";
const pattern = "hello";
console.log(`Text: "${text}"`);
console.log(`Pattern: "${pattern}"`);
console.log("Naive search:", naiveStringSearch(text, pattern));
console.log("KMP search:", kmpSearch(text, pattern));

// User search example
const users = [
    { name: "Alice Johnson", email: "alice@email.com", age: 25 },
    { name: "Bob Smith", email: "bob@email.com", age: 30 },
    { name: "Alice Brown", email: "alice.b@email.com", age: 28 }
];
console.log("\n=== USER SEARCH EXAMPLE ===");
console.log("Users:", users);
console.log("Search for 'Alice':", searchUsers(users, "Alice"));

// Array with duplicates
const duplicateArray = [1, 2, 2, 2, 3, 4, 5];
console.log("\n=== DUPLICATE HANDLING ===");
console.log("Array:", duplicateArray);
console.log("First occurrence of 2:", findFirstOccurrence(duplicateArray, 2));
console.log("Last occurrence of 2:", findLastOccurrence(duplicateArray, 2));

// Run performance comparison
performanceComparison();

/*
------------------------------------------------
                     ALGORITHM COMPARISON CHART
------------------------------------------------

Algorithm          | Time Complexity | Space | Prerequisites    | Best Use Case
-------------------|-----------------|-------|------------------|------------------
Linear Search      | O(n)           | O(1)  | None            | Unsorted data, small arrays
Binary Search      | O(log n)       | O(1)  | Sorted array    | Large sorted arrays
Jump Search        | O(√n)          | O(1)  | Sorted array    | When binary search overhead is concern
Interpolation      | O(log log n)   | O(1)  | Uniformly sorted| Uniformly distributed data
Exponential        | O(log n)       | O(1)  | Sorted, unbounded| Unknown array size
Ternary Search     | O(log₃ n)      | O(1)  | Sorted array    | Academic interest

------------------------------------------------
                          WHEN TO USE WHAT?
------------------------------------------------

LINEAR SEARCH:
✅ Unsorted arrays
✅ Small datasets (< 100 elements)
✅ When simplicity is preferred
✅ One-time searches

BINARY SEARCH:
✅ Large sorted arrays
✅ Frequent searches on same dataset
✅ When O(log n) performance is needed
✅ Most common choice for sorted data

JUMP SEARCH:
✅ When binary search has too much overhead
✅ Cache-friendly searching
✅ Alternative to binary search

INTERPOLATION SEARCH:
✅ Uniformly distributed numerical data
✅ When data distribution is predictable
✅ Better than binary for specific datasets



// --------------------------------------------------------------------- ::
                          PRACTICE PROBLEMS
// --------------------------------------------------------------------- ::

Try implementing these variations:
1. Search in infinite sorted array
2. Find element in bitonic array (increases then decreases)
3. Search in row-wise and column-wise sorted matrix
4. Find minimum in rotated sorted array
5. Search for range of target values
6. Implement fuzzy string searching
7. Search in nested arrays/objects

OPTIMIZATION TIPS:
- Use built-in Array.indexOf() for simple linear searches
- Consider Array.includes() for existence checking
- Use Map/Set for O(1) lookups when possible
- Profile your specific use case
- Consider caching for repeated searches
*/
