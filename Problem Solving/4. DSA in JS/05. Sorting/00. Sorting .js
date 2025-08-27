// Sorting in DSA with JavaScript

/*
What is Sorting in DSA?
- Sorting is the process of arranging elements of a dataset in a particular order
  (Ascending or Descending).

Why Sorting is Important?
- Makes searching faster (Binary Search requires sorted data).
- Helps in efficient storage, retrieval, and data analysis.
- Used in many real-world applications (ranking, leaderboards, databases, etc.).

Types of Sorting Algorithms:
1. Simple / Basic Sorting Algorithms (Easy but less efficient):
   - Bubble Sort (repeatedly swap adjacent elements)
   - Selection Sort (select minimum/maximum and place in correct position)
   - Insertion Sort (insert elements into their correct place in a sorted part)

2. Efficient / Advanced Sorting Algorithms (Better performance):
   - Merge Sort (Divide & Conquer → O(n log n))
   - Quick Sort (Partition-based → O(n log n) avg)
   - Heap Sort (Binary Heap based → O(n log n))

3. Special Purpose Sorting:
   - Counting Sort (works for integers in a fixed range → O(n + k))
   - Radix Sort (digit by digit sorting)
   - Bucket Sort (works when input is uniformly distributed)

Complexities :
- Bubble Sort → O(n²) worst, O(n) best (already sorted)
- Selection Sort → O(n²) always
- Insertion Sort → O(n²) worst, O(n) best (nearly sorted)
- Merge Sort → O(n log n) always
- Quick Sort → O(n log n) average, O(n²) worst (but rare)
- Heap Sort → O(n log n) always
- Counting/Radix/Bucket → Linear time in special cases

Key Notes:
- Stable Sort: Keeps relative order of equal elements (e.g., Merge Sort, Insertion Sort).
- In-Place Sort: Requires little extra memory (e.g., Quick Sort, Heap Sort).
- Comparison-based vs Non-comparison-based sorting:
  - Comparison: Bubble, Merge, Quick, Heap
  - Non-comparison: Counting, Radix, Bucket
*/

const fruits = ["banana", "apple", "orange", "mango", "grape"];
console.log(fruits.sort()); // Sorts alphabetically


const nums = [29, 1, 14, 3, 14];
console.log(nums.sort()); // Sorts as strings, not numbers (lexicographical order)


const compareFunction = (a, b) => {
    // if number is less then zero -> a comes first
    // if it is equal to zero -> nothing will happen
    // if it is greater then zero -> b comes first
    return a - b;
}
console.log(nums.sort(compareFunction)); // Sorts numerically in ascending order


const users = [
    { name: "Ayush", age: 22 },
    { name: "Sanket", age: 28 },
    { name: "Shivam", age: 24 },
    { name: "Shanu", age: 23 }
];
const compareFunctionForObj = (a, b) => {
    return a.age - b.age;
}
console.log(users.sort(compareFunctionForObj)); // Sorts users by age in ascending order


console.log("-------------------------------------------- ::");
/*
How Bubble Sort works?
- Example: [29, 10, 14, 37, 14]
- Start from the first element and compare it with the next.
- If the current element is greater than the next, swap them.
- Move to the next pair and repeat until the end of the array.
- After one pass, the largest element is at the end.
- Repeat the process for the remaining unsorted part (ignore the last sorted elements).
- Keep bubbling up the largest element in each pass.
- Continue until the array is sorted.
- Bubble Sort Algorithm:

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
*/

// Q.1 : Implement Bubble Sort in js
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29, 10, 14, 37, 14] ---->>>> Output: [10, 14, 14, 29, 37].

const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

console.log(bubbleSort([29, 10, 14, 37, 14])); // Output: [10, 14, 14, 29, 37]

// Best Time Complexity = O(n) (when the array is already sorted)
// Worst Time Complexity = O(n²)
// Average Time Complexity = O((n/2)*n) = O(n²)
// Space Complexity = O(1) (in-place sorting)


console.log("-------------------------------------------- ::");
/*
How Selection Sort works?
- Example: [29, 10, 14, 37, 14]
- Start from the first element, look for the minimum element in the entire array.
- Swap the minimum element with the first element.
- Move to the second element, look for the minimum in the remaining unsorted part.
- Swap the found minimum with the second element.
- Repeat for each position until the array is sorted.
- Selection Sort Algorithm:

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
*/

// Q.2 : Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29, 10, 14, 37, 14] ---->>>> Output: [10, 14, 14, 29, 37]

const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};
console.log(selectionSort([29, 10, 14, 37, 14])); // Output: [10, 14, 14, 29, 37]

// Best Time Complexity = O(n²) (when the array is already sorted)
// Average Time Complexity = O(n²)
// Worst Time Complexity = O(n²)
// Space Complexity = O(1)

console.log("-------------------------------------------- ::");
/*
How Insertion Sort works?
- Example: [29, 10, 14, 37, 14, 33, 8, 11]
- Start from the second element (index 1).
- Compare it with elements before it and insert it into its correct position in the sorted part.
- Shift larger elements one position to the right to make space.
- Repeat for each element until the array is sorted.
- The left part of the array is always sorted.
- Insertion Sort Algorithm:

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
*/

// Q.3 : Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29, 10, 14, 37, 14, 33, 8, 11] ---->>>> Output: [8, 10, 11, 14, 14, 29, 33, 37]


const insertionSort = (arr) => {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11])); // Output: [8, 10, 11, 14, 14, 29, 33, 37]s
// All Time Complexity :
// Best Time Complexity = O(n) (when the array is already sorted)
// Worst Time Complexity = O(n²)
// Average Time Complexity = O(n²)
// Space Complexity = O(1)


console.log("-------------------------------------------- ::");
/*
How Merge Sort works ?
- In ex. we have [ 8, 3, 5, 4, 7, 6, 1, 2]
- We divide the array into two halves: [ 8, 3, 5, 4] and [ 7, 6, 1, 2]
    - [ 8, 3, 5, 4]
        - [8, 3] , [5, 4]
            - [8] , [3]
                - [3, 8]
                    - [3, 4, 5, 8]
    - [ 7, 6, 1, 2] -> [ 1, 2, 6, 7]
- We recursively sort each half
- Finally, we merge the two sorted halves back together
- Merge Sort Algorithm :

        function merge(left, right) {
            let sortedArr = []
            while (left.length > 0 && right.length > 0) {
                if (left[0] < right[0]) {
                    sortedArr.push(left.shift())
                } else {
                    sortedArr.push(right.shift())
                }
            }
            // Concatenate any remaining elements from either array
            return sortedArr.concat(left).concat(right)
        }
*/
// Q.4 : Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [8, 3, 5, 4, 7, 6, 1, 2] ---->>>> Output: [1, 2, 3, 4, 5, 6, 7, 8]


function mergeSort(arr) {
    // base case
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid)); // Sort left half
    let right = mergeSort(arr.slice(mid)); // Sort right half

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    // Concatenate any remaining elements from either array
    return [...sortedArr, ...left, ...right];
}
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// All Time Complexity :
// Best Time Complexity = O(n log n)
// Worst Time Complexity = O(n log n)
// Average Time Complexity = O(n log n)
// Space Complexity = O(n)


// Q.4 (b): Implement Merge Sort in JavaScript WITHOUT using any built-in array methods
// No slice, shift, concat, or spread operator
// Input: nums = [8, 3, 5, 4, 7, 6, 1, 2] ---->>>> Output: [1, 2, 3, 4, 5, 6, 7, 8]

function mergeSortManual(arr) {
    // base case
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length / 2);

    // copy left half
    var left = [];
    for (var i = 0; i < mid; i++) {
        left[left.length] = arr[i];
    }
    // copy right half
    var right = [];
    for (var i = mid; i < arr.length; i++) {
        right[right.length] = arr[i];
    }

    var sortedLeft = mergeSortManual(left);
    var sortedRight = mergeSortManual(right);

    return mergeManual(sortedLeft, sortedRight);
};

function mergeManual(left, right) {
    var sortedArr = [];
    var i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr[sortedArr.length] = left[i];
            i++;
        } else {
            sortedArr[sortedArr.length] = right[j];
            j++;
        }
    }
    // Add remaining elements from left
    while (i < left.length) {
        sortedArr[sortedArr.length] = left[i];
        i++;
    }
    // Add remaining elements from right
    while (j < right.length) {
        sortedArr[sortedArr.length] = right[j];
        j++;
    }
    return sortedArr;
}

console.log(mergeSortManual([8, 3, 5, 4, 7, 6, 1, 2])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



console.log("-------------------------------------------- ::");
/*
How Quick Sort works?
- Example: [8, 3, 5, 4, 7, 6, 1, 2]
- Pick a "pivot" element (commonly the last element).
- Partition the array so that:
    - All elements less than the pivot go to the left.
    - All elements greater than the pivot go to the right.
- Recursively apply the same process to the left and right subarrays.
- Combine the sorted left part, pivot, and sorted right part for the final sorted array.

Quick Sort Algorithm (with comments):

function quickSort(arr, low, high) {
    if (low < high) {
        // Partition the array and get the pivot index
        let pi = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high]; // Choose the last element as pivot
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Swap arr[i+1] and arr[high] (pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1; // Return the partition index
}

// Usage example:
let arr = [8, 3, 5, 4, 7, 6, 1, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
*/

// Q.5 : Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [8, 3, 5, 4, 7, 6, 1, 2] ---->>>> Output: [1, 2, 3, 4, 5, 6, 7, 8]

function quickSort(arr, low, high) {
    if (low < high) {
        var pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    var pivot = arr[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

// Creating the array and calling quickSort on it, then printing the array itself.
var arr = [8, 3, 5, 4, 7, 6, 1, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



console.log("-------------------------------------------- ::");
/*
How Heap Sort works?
- Example: [8, 3, 5, 4, 7, 6, 1, 2]
- Build a max heap from the array (largest value at the root).
- Swap the root (largest) with the last element.
- Reduce the heap size by one and heapify the root again.
- Repeat until the heap size is 1.
- The array is sorted in ascending order.

Heap Sort Algorithm (with comments):

function heapSort(arr) {
    var n = arr.length;

    // Step 1: Build max heap
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements from heap one by one
    for (var i = n - 1; i > 0; i--) {
        // Swap root (max) with last element
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Heapify reduced heap
        heapify(arr, i, 0);
    }
}

// Heapify subtree rooted at index i, size n
function heapify(arr, n, i) {
    var largest = i; // Initialize largest as root
    var left = 2 * i + 1;
    var right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

// Usage example:
var arr = [8, 3, 5, 4, 7, 6, 1, 2];
heapSort(arr);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
*/

// Q.6 : Implement Heap Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [8, 3, 5, 4, 7, 6, 1, 2] ---->>>> Output: [1, 2, 3, 4, 5, 6, 7, 8]

function heapSort(arr) {
    var n = arr.length;

    // Build max heap
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap
    for (var i = n - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}

function heapify(arr, n, i) {
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

// Usage example:
var arr = [8, 3, 5, 4, 7, 6, 1, 2];
heapSort(arr);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



console.log("-------------------------------------------- ::");
/*
How Counting/Radix/Bucket Sort works?

1. Counting Sort:
- Works for integers in a fixed, small range (e.g., 0 to 100).
- Counts how many times each value appears.
- Places each value in the output array according to its count.
- Not comparison-based, so it can be faster than O(n log n) for small ranges.
- Stable and efficient for small integer ranges.
Counting Sort Algorithm:
1. Find the maximum value in the array.
2. Create a count array of size (max + 1), initialized to 0.
3. For each number in the input array, increment its count in the count array.
4. Build the sorted output by placing each number according to its count.



2. Radix Sort:
- Works for numbers (integers, sometimes strings).
- Sorts numbers digit by digit (from least significant to most significant).
- Uses a stable sort (like counting sort) for each digit.
- Efficient for large numbers with limited digits.
Radix Sort Algorithm:
1. Find the maximum number to know the number of digits.
2. For each digit (from least significant to most significant):
   a. Use a stable sort (like counting sort) to sort numbers by the current digit.
   b. Repeat for all digit places.
3. The array is sorted after processing all digits.



3. Bucket Sort:
- Works best when input is uniformly distributed over a range.
- Divides the input into several buckets.
- Sorts each bucket individually (often with another sort).
- Concatenates all buckets for the final sorted array.
Bucket Sort Algorithm:
1. Create several empty buckets (arrays).
2. Distribute the input numbers into buckets based on their value/range.
3. Sort each bucket individually (often using another sorting algorithm).
4. Concatenate all buckets to get the final sorted array.

*/
