// Arrays (1D, 2D) DSA :
/*
What is Arrays :
- A collection of elements identified by index or key.
- Arrays in JavaScript are dynamic (resizable) and can hold mixed types.
- So basically Arrays are used to store multiple values in a single variable.
- JavaScript array-copy operations create shallow copies by default. (This means that if you copy an array, the new array will reference the same elements as the original.)

Think of arrays like:
Apartment building: Each apartment has a number (index) and contains residents (elements)
Bookshelf: Books are arranged in order, you can find any book by its position
Playlist: Songs are in sequence, each has a position number

1D Arrays:
- Definition: A linear collection of elements.
- Operations: Insertion, Deletion, Traversal.
- Use Cases: Storing lists, queues, stacks.

2D Arrays:
- Definition: An array of arrays (matrix).
- Operations: Accessing elements via row/column indices.
- Use Cases: Representing grids, images, tables.

Major difference between 1D and 2D arrays:
- 1D arrays are linear, while 2D arrays are hierarchical (matrix-like).
- Accessing elements in 1D is straightforward (single index), while 2D requires two indices (row/column).
- 1D arrays are best for simple lists, while 2D arrays excel in grid-like structures.
- 1D arrays can be easily flattened, while 2D arrays require more complex traversal.

Real life examples of using Arrays 1D and 2D :
- 1D Array: A list of student names in a classroom.
- 1D Array: A collection of temperatures recorded throughout a week.
- 2D Array: A chessboard representation, where each piece's position is tracked.
- 2D Array: A pixel grid for an image, where each pixel's color value is stored.

*/

// ARRAY DECLARATION AND INITIALIZATION
// -------------------------------------------------------------------- ::
// Array Declaration & Initialization

// Method 1: Array Literal (Most Common)
let numbers = [1, 2, 3, 4, 5];
let mixed = [42, "hello", true, null, { name: "John" }];
let empty = [];

// Method 2: Array Constructor
let arr1 = new Array(5); // Creates array with 5 empty slots
let arr2 = new Array(1, 2, 3); // Creates [1, 2, 3]

// Method 3: Array.from() - Creates array from iterable
let fromString = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
let fromRange = Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]

// Method 4: Array.of() - Creates array from arguments
let arrOf = Array.of(1, 2, 3); // [1, 2, 3]

console.log("Numbers array:", numbers);
console.log("Mixed array:", mixed);
console.log("Empty array:", empty);
console.log("Constructor with size:", arr1);
console.log("From string:", fromString);
console.log("From range:", fromRange);





// ACCESSING ARRAY ELEMENTS
// -------------------------------------------------------------------- ::
// Accessing Array Elements

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

console.log("First fruit:", fruits[0]);           // apple
console.log("Last fruit:", fruits[fruits.length - 1]); // elderberry
console.log("Third fruit:", fruits[2]);           // cherry
console.log("Invalid index:", fruits[10]);        // undefined
console.log("Negative indexing (not built-in):", fruits[fruits.length - 2]); // date

// Safe access with bounds checking
function safeAccess(arr, index) {
    if (index >= 0 && index < arr.length) {
        return arr[index];
    }
    return "Index out of bounds";
}

console.log("Safe access fruits[10]:", safeAccess(fruits, 10));
console.log("Safe access fruits[2]:", safeAccess(fruits, 2));





// ARRAY TRAVERSAL METHODS
// -------------------------------------------------------------------- ::
// Array Traversal Methods

let colors = ["red", "green", "blue", "yellow"];

// Method 1: Traditional for loop (Most control, best for DSA)
console.log("Method 1 - Traditional for loop:");
for (let i = 0; i < colors.length; i++) {
    console.log(`Index ${i}: ${colors[i]}`);
}

// Method 2: for...of loop (Clean, when you don't need index)
console.log("\nMethod 2 - for...of loop:");
for (let color of colors) {
    console.log(`Color: ${color}`);
}

// Method 3: for...in loop (Gets indices, not recommended for arrays)
console.log("\nMethod 3 - for...in loop (indices):");
for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}

// Method 4: forEach (Functional approach)
console.log("\nMethod 4 - forEach:");
colors.forEach((color, index) => {
    console.log(`Index ${index}: ${color}`);
});

// Reverse traversal (Important for DSA)
console.log("\nReverse traversal:");
for (let i = colors.length - 1; i >= 0; i--) {
    console.log(`Index ${i}: ${colors[i]}`);
}





// ESSENTIAL ARRAY METHODS (DSA FOCUSED)
// -------------------------------------------------------------------- ::
// Essential Array Methods

let demoArray = [10, 20, 30];
console.log("Original array:", demoArray);

// Adding elements
console.log("\n--- Adding Elements ---");
demoArray.push(40);                    // Add to end
console.log("After push(40):", demoArray);

demoArray.unshift(0);                  // Add to beginning
console.log("After unshift(0):", demoArray);

// Insert at specific position using splice
demoArray.splice(2, 0, 15);           // Insert 15 at index 2
console.log("After splice(2,0,15):", demoArray);

// Removing elements
console.log("\n--- Removing Elements ---");
let popped = demoArray.pop();         // Remove from end
console.log("Popped element:", popped);
console.log("After pop():", demoArray);

let shifted = demoArray.shift();      // Remove from beginning
console.log("Shifted element:", shifted);
console.log("After shift():", demoArray);

// Remove specific elements using splice
let removed = demoArray.splice(1, 2); // Remove 2 elements starting from index 1
console.log("Removed elements:", removed);
console.log("After splice(1,2):", demoArray);





// SEARCHING IN ARRAYS (Manual Implementation)
// -------------------------------------------------------------------- ::
// Array Searching (Manual DSA Methods)

let searchArray = [64, 34, 25, 12, 22, 11, 90];

// Linear Search - O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index of found element
        }
    }
    return -1; // Not found
}

// Binary Search - O(log n) - Only works on sorted arrays
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArr[mid] === target) {
            return mid;
        } else if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Find all occurrences
function findAllOccurrences(arr, target) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}

// Test searching
console.log("Search array:", searchArray);
console.log("Linear search for 22:", linearSearch(searchArray, 22));
console.log("Linear search for 99:", linearSearch(searchArray, 99));

let sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log("Sorted array:", sortedArray);
console.log("Binary search for 25:", binarySearch(sortedArray, 25));

let duplicateArray = [1, 3, 3, 5, 3, 7];
console.log("Find all 3's in", duplicateArray, ":", findAllOccurrences(duplicateArray, 3));





// ARRAY MANIPULATION (DSA STYLE)
// -------------------------------------------------------------------- ::
// Array Manipulation

// Reversing an array (in-place)
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}

// Rotate array to the right by k positions
function rotateRight(arr, k) {
    k = k % arr.length; // Handle k > array length

    // Helper function to reverse portion of array
    function reversePortion(start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Reverse entire array
    reversePortion(0, arr.length - 1);
    // Reverse first k elements
    reversePortion(0, k - 1);
    // Reverse remaining elements
    reversePortion(k, arr.length - 1);

    return arr;
}

// Remove duplicates from sorted array
function removeDuplicates(sortedArr) {
    if (sortedArr.length <= 1) return sortedArr.length;

    let writeIndex = 1;

    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i - 1]) {
            sortedArr[writeIndex] = sortedArr[i];
            writeIndex++;
        }
    }

    // Truncate array to new length
    sortedArr.length = writeIndex;
    return sortedArr;
}

// Test manipulations
let testArr1 = [1, 2, 3, 4, 5];
console.log("Original:", [...testArr1]);
console.log("Reversed:", reverseArray([...testArr1]));

let testArr2 = [1, 2, 3, 4, 5, 6, 7];
console.log("Original:", [...testArr2]);
console.log("Rotated right by 3:", rotateRight([...testArr2], 3));

let duplicatesArr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
console.log("With duplicates:", [...duplicatesArr]);
console.log("Without duplicates:", removeDuplicates([...duplicatesArr]));





// 2D ARRAYS (MATRICES)
// -------------------------------------------------------------------- ::
// 2D Arrays (Matrices)

// Creating 2D arrays
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Create 2D array dynamically
function create2DArray(rows, cols, defaultValue = 0) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = defaultValue;
        }
    }
    return matrix;
}

let matrix2 = create2DArray(3, 4, 0);
console.log("3x4 Matrix with zeros:");
console.table(matrix2);

// Fill matrix with sequential numbers
function fillSequential(matrix) {
    let num = 1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = num++;
        }
    }
}

fillSequential(matrix2);
console.log("3x4 Matrix filled sequentially:");
console.table(matrix2);

// 2D Array Traversal Methods
console.log("\n--- 2D Array Traversal ---");

// Row-wise traversal
function traverseRowWise(matrix) {
    console.log("Row-wise traversal:");
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            process.stdout.write(matrix[i][j] + " ");
        }
        console.log(); // New line after each row
    }
}

// Column-wise traversal
function traverseColumnWise(matrix) {
    console.log("Column-wise traversal:");
    if (matrix.length === 0) return;

    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            process.stdout.write(matrix[i][j] + " ");
        }
        console.log(); // New line after each column
    }
}

// Diagonal traversal
function traverseDiagonals(matrix) {
    if (matrix.length !== matrix[0].length) {
        console.log("Not a square matrix!");
        return;
    }

    console.log("Main diagonal:");
    for (let i = 0; i < matrix.length; i++) {
        process.stdout.write(matrix[i][i] + " ");
    }
    console.log();

    console.log("Anti-diagonal:");
    for (let i = 0; i < matrix.length; i++) {
        process.stdout.write(matrix[i][matrix.length - 1 - i] + " ");
    }
    console.log();
}

traverseRowWise(matrix1);
traverseColumnWise(matrix1);
traverseDiagonals(matrix1);





// REAL-WORLD EXAMPLES
// -------------------------------------------------------------------- ::
// Real-World Examples

// Example 1: Student Grade Management System
console.log("--- Student Grade Management ---");

class GradeBook {
    constructor() {
        this.students = [];
        this.subjects = ["Math", "Science", "English"];
    }

    addStudent(name) {
        this.students.push({
            name: name,
            grades: [0, 0, 0] // Initialize with zeros
        });
    }

    setGrade(studentIndex, subjectIndex, grade) {
        if (this.isValidIndex(studentIndex, subjectIndex)) {
            this.students[studentIndex].grades[subjectIndex] = grade;
        }
    }

    getAverage(studentIndex) {
        if (studentIndex < 0 || studentIndex >= this.students.length) {
            return 0;
        }

        let grades = this.students[studentIndex].grades;
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        return sum / grades.length;
    }

    isValidIndex(studentIndex, subjectIndex) {
        return studentIndex >= 0 &&
            studentIndex < this.students.length &&
            subjectIndex >= 0 &&
            subjectIndex < this.subjects.length;
    }

    displayGrades() {
        console.log("\n📊 Grade Report:");
        console.log("Student".padEnd(15) + this.subjects.join("\t") + "\tAverage");
        console.log("-".repeat(50));

        for (let i = 0; i < this.students.length; i++) {
            let student = this.students[i];
            let gradeStr = student.grades.join("\t");
            let avg = this.getAverage(i).toFixed(2);
            console.log(student.name.padEnd(15) + gradeStr + "\t" + avg);
        }
    }
}

// Test the grade book
let gradeBook = new GradeBook();
gradeBook.addStudent("Alice");
gradeBook.addStudent("Bob");
gradeBook.addStudent("Charlie");

// Set grades
gradeBook.setGrade(0, 0, 85); // Alice, Math
gradeBook.setGrade(0, 1, 90); // Alice, Science
gradeBook.setGrade(0, 2, 78); // Alice, English

gradeBook.setGrade(1, 0, 88); // Bob, Math
gradeBook.setGrade(1, 1, 92); // Bob, Science
gradeBook.setGrade(1, 2, 85); // Bob, English

gradeBook.setGrade(2, 0, 90); // Charlie, Math
gradeBook.setGrade(2, 1, 87); // Charlie, Science
gradeBook.setGrade(2, 2, 93); // Charlie, English

gradeBook.displayGrades();

// Example 2: Tic-Tac-Toe Game Board
console.log("\n--- Tic-Tac-Toe Game ---");

class TicTacToe {
    constructor() {
        this.board = this.createBoard();
        this.currentPlayer = 'X';
    }

    createBoard() {
        let board = [];
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = '-';
            }
        }
        return board;
    }

    displayBoard() {
        console.log("\nCurrent Board:");
        for (let i = 0; i < 3; i++) {
            console.log(this.board[i].join(' | '));
            if (i < 2) console.log("---------");
        }
    }

    makeMove(row, col) {
        if (row < 0 || row > 2 || col < 0 || col > 2) {
            return false;
        }

        if (this.board[row][col] !== '-') {
            return false;
        }

        this.board[row][col] = this.currentPlayer;
        return true;
    }

    checkWinner() {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === this.board[i][1] &&
                this.board[i][1] === this.board[i][2] &&
                this.board[i][0] !== '-') {
                return this.board[i][0];
            }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
            if (this.board[0][j] === this.board[1][j] &&
                this.board[1][j] === this.board[2][j] &&
                this.board[0][j] !== '-') {
                return this.board[0][j];
            }
        }

        // Check diagonals
        if (this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2] &&
            this.board[0][0] !== '-') {
            return this.board[0][0];
        }

        if (this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0] &&
            this.board[0][2] !== '-') {
            return this.board[0][2];
        }

        return null;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Test the game
let game = new TicTacToe();
game.displayBoard();

// Simulate some moves
game.makeMove(1, 1); // X in center
game.switchPlayer();
game.makeMove(0, 0); // O in top-left
game.switchPlayer();
game.makeMove(0, 1); // X in top-center
game.switchPlayer();
game.makeMove(2, 2); // O in bottom-right
game.switchPlayer();
game.makeMove(2, 1); // X in bottom-center

game.displayBoard();
let winner = game.checkWinner();
console.log(winner ? `Winner: ${winner}!` : "Game continues...");





// SLICE VS SPLICE (DETAILED COMPARISON)
// -------------------------------------------------------------------- ::
// Slice vs Splice Detailed

let originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Original array:", originalArray);

// SLICE - Creates new array, doesn't modify original
console.log("\n--- SLICE (Non-destructive) ---");
let sliced1 = originalArray.slice(2, 5);        // Elements from index 2 to 4
let sliced2 = originalArray.slice(3);           // From index 3 to end
let sliced3 = originalArray.slice(-3);          // Last 3 elements
let sliced4 = originalArray.slice(-5, -2);      // From 5th last to 3rd last

console.log("slice(2, 5):", sliced1);           // [2, 3, 4]
console.log("slice(3):", sliced2);              // [3, 4, 5, 6, 7, 8, 9]
console.log("slice(-3):", sliced3);             // [7, 8, 9]
console.log("slice(-5, -2):", sliced4);         // [5, 6, 7]
console.log("Original after slice:", originalArray); // Unchanged

// SPLICE - Modifies original array
console.log("\n--- SPLICE (Destructive) ---");
let testArray1 = [...originalArray]; // Create copy
let spliced1 = testArray1.splice(2, 3);         // Remove 3 elements starting at index 2
console.log("splice(2, 3) removed:", spliced1); // [2, 3, 4]
console.log("Array after removal:", testArray1); // [0, 1, 5, 6, 7, 8, 9]

let testArray2 = [...originalArray];
let spliced2 = testArray2.splice(3, 0, 'A', 'B'); // Insert 'A' and 'B' at index 3
console.log("splice(3, 0, 'A', 'B') removed:", spliced2); // []
console.log("Array after insertion:", testArray2); // [0, 1, 2, 'A', 'B', 3, 4, 5, 6, 7, 8, 9]

let testArray3 = [...originalArray];
let spliced3 = testArray3.splice(2, 2, 'X', 'Y', 'Z'); // Replace 2 elements with 3 new ones
console.log("splice(2, 2, 'X', 'Y', 'Z') removed:", spliced3); // [2, 3]
console.log("Array after replacement:", testArray3); // [0, 1, 'X', 'Y', 'Z', 4, 5, 6, 7, 8, 9]






// COMMON DSA PROBLEMS WITH ARRAYS
// -------------------------------------------------------------------- ::
// Common DSA Problems

// Problem 1: Two Sum
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Problem 2: Maximum Subarray (Kadane's Algorithm)
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Problem 3: Move Zeros to End
function moveZeros(nums) {
    let writeIndex = 0;

    // Move all non-zero elements to front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }

    // Fill remaining positions with zeros
    while (writeIndex < nums.length) {
        nums[writeIndex] = 0;
        writeIndex++;
    }

    return nums;
}

// Problem 4: Find Missing Number
function findMissingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}

// Test the problems
console.log("--- Problem Solutions ---");
console.log("Two Sum [2,7,11,15], target 9:", twoSum([2, 7, 11, 15], 9));
console.log("Max Subarray [-2,1,-3,4,-1,2,1,-5,4]:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("Move zeros [0,1,0,3,12]:", moveZeros([0, 1, 0, 3, 12]));
console.log("Missing number [3,0,1]:", findMissingNumber([3, 0, 1]));
