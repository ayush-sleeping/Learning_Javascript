// foreach, forin, forof, dowhile
/* The for...of loop is used to iterate over iterable objects like arrays, strings,
   and other collections. It provides a simple and concise way to access each element
   without needing to manage an index variable.
*/

// -----------------------------------------------::


// foreach :
// The forEach() method executes a provided function once for each array element.
// It is commonly used to iterate over arrays and perform operations on each element.
// array.forEach(function(currentValue, index, array) {
     // code to be executed for each element
// });

const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function(currentValue, index, array) {
    // code to be executed for each element
    console.log(`Index: ${index}, Value: ${currentValue}`);
});
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// Index: 3, Value: 4
// Index: 4, Value: 5
// Index: 5, Value: 6

var a = [ 11, 23, 34, 45, 56 ];
a.forEach(function(val){
    console.log(val+2); // Output: 13, 25, 36, 47, 58
})


// -----------------------------------------------::


// forin :
// The for...in loop is used to iterate over the properties of an object.
// It allows you to access each property name (key) in the object.
const user = {
    name: "Ayush",
    age: 21,
    city: "Mumbai"
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Ayush
// age: 21
// city: Mumbai

var obj = {
    profile: "Web Developer",
    experience_required: "2 years",
    location: "Remote"
};
for(var key in obj){
    console.log(`${key}: ${obj[key]}`);
}


// -----------------------------------------------::


// forof :
// The for...of loop is used to iterate over iterable objects like arrays, strings, and other collections.
// It provides a simple and concise way to access each element without needing to manage an index variable.
const cities = ["Mumbai", "Delhi", "Bangalore"];
for (const city of cities) {
    console.log(city);
}

// Output:
// Mumbai
// Delhi
// Bangalore


// -----------------------------------------------::


// dowhile :
// The do...while loop executes a block of code once, and then repeats the loop as long as a specified condition is true.
// It guarantees that the code block will be executed at least once, even if the condition is false initially.
let entries = 0;
do {
    console.log(`Number of entries: ${entries}`);
    entries++;
} while (entries < 2);
// Output:
// Number of entries: 0
// Number of entries: 1
// Number of entries: 2

var x = 12;
do {
    console.log("Hey");
    x++;
} while (x < 15);


// -----------------------------------------------::
