console.clear();

// It gives me individual values :

var str = "9988776655"
var pattern = /[\d]/g

console.log(str.match(pattern))


// To check the pattern (we have to add "+") :

var str = "9988776655"
var pattern = /[\d]+/g

console.log(str.match(pattern))


var str = "998877665544"
var pattern = /^[\d]$/g

console.log(str.match(pattern)) 


var str4 = "919988776655"
var pattern = /^(91)?[\d]{10}$/g

console.log(str4.match(pattern)) 


var str4 = "+919988776655"
var pattern = /^(\+91)?[\d]{10}$/g

console.log(str4.match(pattern)) 


var str = "www.github.com"
var pattern = /www\.[\w]+\.(com|co|in|org)$/g

console.log(str.match(pattern))