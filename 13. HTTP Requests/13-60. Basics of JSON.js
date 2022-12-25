/*
Introduction to JSON:

It is basically a text format that makes it easy to share data
between Clients and Servers. Its origin is based on how JavaScript object works 
so that's why it looks like a JavaScript Object.

It is widely used across many Languages like C, Ruby, Python, PHP etc.

*/

// JavaScript :
var mObj = {
    name: 'John',
    age: 30
}


// JSON :
var nObj = {
    "name": 'John',
    "age": 30
}


// one of the biggest benefits of using Json object is that it can be converted to a string.

var strJSON = JSON.stringify(nObj)
console.log(JSON.stringify(nObj))
console.log(JSON.parse(strJSON))