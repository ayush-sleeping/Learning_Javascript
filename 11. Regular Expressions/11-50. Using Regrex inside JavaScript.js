/* Regrex in JavaScript
To define a regular expression in JavaScript there are two ways :

First, is the one we have learnt so far.
Syntax : /[pattern]/[flags]

Second, is the inbuilt Regular Expressions class.
Syntax: new RegExp("pattern", "flags")


Regrex Mathods in JavaScript :
The regular expression class also provides us with some methods
to perform search on the string based on some patterns.

These are the available methods :
str.search(pattern) - Itreturns the string position of the first match,
pattern.test(str) - It returns true if there is match and returns false
    if there is no match.
str.match(pattern) - It returns the matched string. If the flag is 
    not set to global then it returns only the first match, But if the
    flag is set to global then it returns an array of matches.
    
*/

console.clear();

var str = "This is black ball pen. This pen is really Good";
var pattern = /pen/;

console.log(str.search(pattern))
console.log(pattern.test(str))
console.log(str.match(pattern))

// another way :

var str2 = "This is black ball pen. This pen is really Good";
var pattern = new RegExp('This', 'gi');

console.log(str2.search(pattern))
console.log(pattern.test(str2))
console.log(str2.match(pattern))

// Lets check the numbers :

var str3 = "This 101 is black ball pen. This 234 pen is really Good";
var pattern = new RegExp('[0-9]', 'gi');

console.log(str3.search(pattern))
console.log(pattern.test(str3))
console.log(str3.match(pattern))

// Lets select all :

var str4 = "This 101 is black ball pen. This 234 pen is really Good";
var pattern = /./gi;

console.log(str4.match(pattern))