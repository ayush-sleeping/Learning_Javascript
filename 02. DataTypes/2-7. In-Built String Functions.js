// JS In Built String Function 

console.clear()

var myyfirststring = "This is a string for Javascript string functions, JavaScript"

// Returns the length of the string
console.log(myyfirststring.length)

// Find index of a string inside another string
console.log(myyfirststring.indexOf('Javascript'))
console.log(myyfirststring.indexOf('This'))

// What if we want the last occurence of Javascript
// Find LAST index of a string inside another string

console.log(myyfirststring.lastIndexOf('JavaScript'))
console.log(myyfirststring.lastIndexOf('This'))

// get a part of your string  slice(start, end)
console.log(myyfirststring.slice(0, 4))
console.log(myyfirststring.slice(21, 31))
console.log(myyfirststring.slice(-10))
console.log(myyfirststring.slice(5))

// Get sub string functions -  substr(startPos, length)
console.log(myyfirststring.substring(0, 4))
console.log(myyfirststring.substring(21, 10))
console.log(myyfirststring.substring(21))