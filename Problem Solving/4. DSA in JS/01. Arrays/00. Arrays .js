// Arrays (1D, 2D) DSA :
/*
What is Arrays :
- A collection of elements identified by index or key.
- Arrays in JavaScript are dynamic (resizable) and can hold mixed types.
- So basically Arrays are used to store multiple values in a single variable.
- JavaScript array-copy operations create shallow copies by default. (This means that if you copy an array, the new array will reference the same elements as the original.)

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

// Declaration and Initialization :
// ----------------------------------------------------------------------------
const myArr = [0, 1, 2, 3, 4, 5, true, "ayush"];
console.log(myArr[4]); // indexes start from 0

const myHeroes = ["Superman", "Batman", "Wonder Woman", "Spider-Man", "Iron Man"];
console.log(myHeroes[2]); // Wonder Woman

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[0]); // 1

// Methods :
// ----------------------------------------------------------------------------
// Methods are functions that are associated with an object. In the context of arrays, methods are built-in functions that allow you to perform various operations on array elements.
myArr.push(6);
console.log(myArr); // [0, 1, 2, 3, 4, 5, true, "ayush", 6]

myArr.pop();
console.log(myArr); // [0, 1, 2, 3, 4, 5, true, "ayush"]

myArr.unshift(-1);
console.log(myArr); // [-1, 0, 1, 2, 3, 4, 5, true, "ayush"]

myArr.shift();
console.log(myArr); // [0, 1, 2, 3, 4, 5, true, "ayush"]

myArr.splice(2, 1); // Removes 1 element at index 2
console.log(myArr); // [0, 1, 3, 4, 5, true, "ayush"]

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(3)); // 2

const newArr = myArr.join();
console.log(newArr); // "0,1,3,4,5,true,ayush"
console.log(typeof newArr); // string

// example1 of 1D array :
// ----------------------------------------------------------------------------
// A list of student names in a classroom.
const studentNames = ["Alice", "Bob", "Charlie", "David"];
console.log(studentNames[2]); // Charlie

// example2 of 1D array :
// A collection of temperatures recorded throughout a week.
const weeklyTemperatures = [22, 24, 19, 23, 25, 21, 20];
console.log(weeklyTemperatures[3]); // 23

// example1 of 2D array :
// ----------------------------------------------------------------------------

const studentGrades = [
    [85, 90, 78],
    [88, 92, 80],
    [90, 85, 88],
    [70, 75, 80]
];
console.log(studentGrades[2][1]); // why 85 ? because it's the second element of the third array

// example2 of 2D array :
const employeeSalaries = [
    [50000, 55000, 60000],
    [52000, 58000, 62000],
    [54000, 60000, 64000]
];
console.log(employeeSalaries[1][2]); // 62000

// Slice vs Splice
// ----------------------------------------------------------------------------
// Slice:
// - Returns a shallow copy of a portion of an array into a new array object.
// - Does not modify the original array.
// - Can take two arguments: the start index and the end index (exclusive).
// Splice:
// - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// - Modifies the original array.
// - Can take three arguments: the start index, the delete count, and the elements to add (if any).

// examples of slice :
const sliced = myArr.slice(1, 4);
console.log(sliced); // [1, 3, 4]
console.log(myArr); // [0, 1, 3, 4, 5, true, "ayush"]

// examples of splice :
const spliced = myArr.splice(1, 4);
console.log(spliced); // [1, 3, 4]
console.log(myArr); // [0, 5, true, "ayush"]
