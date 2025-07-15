// How to delete object properties :
/*
 - You can use the `delete` operator to remove a property from an object.
 - If the property exists, it will be removed, and the operation will return `true`.
 - If the property does not exist, the operation will return `true` as well (no error will be thrown).
 - However, if the property is non-configurable (e.g., a built-in property), the operation will return `false`.
 - Deleting a property does not affect the object's prototype chain.
 - Basically, the `delete` operator is used to remove properties from objects, including arrays.
 - Note that deleting properties from arrays can lead to sparse arrays, which may affect performance.
 */

 // -----------------------------------------------::

 var profile = {
    name: "Ayush",
    age: 22,
 }

 delete profile.age;
 console.log(profile); // Output: { name: "Ayush" }

 // -----------------------------------------------::

var arr = [1, 2, 3, 4, 5];
delete arr[2]; // This will remove the element at index 2
console.log(arr); // Output: [1, 2, <1 empty item>, 4, 5]
console.log(arr.length); // Output: 5
