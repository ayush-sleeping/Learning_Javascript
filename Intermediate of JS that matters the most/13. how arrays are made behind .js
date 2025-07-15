// How arrays are made behind the scenes :
/**
 - In JavaScript, arrays are implemented as objects with special behavior.
 - When you create an array, JavaScript uses a hidden class to optimize access to the elements.
 - Arrays are essentially objects with integer keys and a length property.
 - The array methods (like push, pop, etc.) are implemented as functions that operate on these objects.
 - JavaScript engines use various techniques (like inline caching) to make array operations fast.
 - Understanding this can help you write more efficient code and avoid common pitfalls.
 */

// -----------------------------------------------::

var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5

arr[-1] = 6; // This will not throw an error, but it will not change the array length
console.log(arr.length); // Output: 5
console.log(arr); // Output: [1, 2, 3, 4, 5, -1: 6]
// Note: The array does not have a property for -1, it just shows how arrays can behave like objects.
