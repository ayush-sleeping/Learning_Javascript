/* Spread Operator : 

It allows arrays and objects to be expanded into :
- elements in case of array.
- key-value pairs in case of object. */

console.clear();

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1]
arr1.push(6);

console.log(arr1)
console.log(arr2)


// 2nd example -

let arr3 = [1, 2, 3, 4, 5];
let arr4 = [6, 7, 8]
 
// let arr5 = arr3.concat(arr4)
let arr5 = [0, ...arr3, ...arr4]

console.log(arr5)
console.log(arr4)


// 3rd example :
let obj1 = {
    name: 'John',
    lastname: 'Lark'
}
let obj2 = {
    age: 21
}
let obj3 = {...obj1, ...obj2}
console.log(obj3);