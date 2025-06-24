// Arrays in js :
// Arrays are used to store multiple values in a single variable.
// They are useful for storing lists of items, such as numbers, strings, or objects.
// Arrays can be created using square brackets [] and can hold any type of data.


// -------------------------------------------------------------------------------


// Example of an array:
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]


// -------------------------------------------------------------------------------


// Accessing elements in an array:
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"


// -------------------------------------------------------------------------------


// Modifying elements in an array:
fruits[2] = "orange";
console.log(fruits); // Output: ["apple", "banana", "orange"]


// -------------------------------------------------------------------------------


// Adding elements to an array:
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]


// -------------------------------------------------------------------------------


// Removing elements from an array:
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]


// -------------------------------------------------------------------------------


// shift in arrays:
fruits.shift();
console.log(fruits); // Output: ["banana", "orange"]


// -------------------------------------------------------------------------------


// unshift in arrays:
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "banana", "orange"]


// -------------------------------------------------------------------------------


// Looping through an array:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// "apple"
// "banana"
// "orange"
