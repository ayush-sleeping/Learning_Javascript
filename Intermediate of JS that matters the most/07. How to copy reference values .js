// How to copy references values :
// In JavaScript, when you copy a reference value (like an object or an array), you are copying the reference to the original value, not the value itself. This means that changes made to the copied reference will affect the original value. To create a true copy of an object or array, you need to use methods like `Object.assign()` for objects or the spread operator for arrays.


// -----------------------------------------------::


var a = [1, 2, 3];
var b = [...a]; // Using spread operator to copy array
b.pop(); // Modifying the copied array
console.log(a); // Output: [1, 2, 3] - Original array
console.log(b); // Output: [1, 2] - Copied array after modification



// -----------------------------------------------::


// To copy an object, you can use `Object.assign()` or the spread operator as well.
var obj = {name: 'Ayush', age: 21};
var objCopy = {...obj}; // Using spread operator to copy object
objCopy.age = 22; // Modifying the copied object
console.log(obj); // Output: {name: 'Ayush', age: 21}
console.log(objCopy); // Output: {name: 'Ayush', age: 22
