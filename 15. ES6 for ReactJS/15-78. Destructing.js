/* ES6 - Destructing : 

It allows us to "unpack" arrays or objects into a bunch of 
    variables which makes working with arrays and objects a bit
    more convenient. 
    
    Syntax:
    let [a, b] = [1, 2, 3, 4, 5];
    let {name, age} = {firstName: 'John', lastname: 'Wick', age: 54}; 
     */

console.clear();

const name = "John Wick";
const nameArr = name.split(' ');

console.log(nameArr);
// let firstName = nameArr[0];
// let middleName = nameArr[1];

let [firstName, middleName] = nameArr;

console.log(firstName);
console.log(middleName);

// 2nd example :

let FirstName = 'John';
let LastName = 'Wick';
let Age = 54;

const personObj ={
    FirstName,
    LastName,
    Age
}

console.log(personObj);