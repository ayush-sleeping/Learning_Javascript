console.clear()

var examplestring = "This is Javascript tutorial"

// toUpperCase() =  It converts our string to Uppercase characters
console.log(examplestring.toUpperCase())

// toLowercase()
console.log(examplestring.toLowerCase())

// concat() = It merges two or more strings
var firstName = "Javascript"
var lastName = "Learning"
console.log(examplestring.concat(firstName))
console.log(examplestring.concat(firstName, lastName))
console.log(examplestring.concat(' ', firstName, ' ', lastName))

// + operator is also can be used to concat
console.log(firstName+ ' ' + lastName + ' ' + examplestring)

// trim() = It removes extra spaces
var extraspacestring = "          mystring     "
console.log(extraspacestring)
console.log(extraspacestring.trim())

var extraspacestringexample2 = "          my string     "
console.log(extraspacestringexample2.trim())

// charAt() = this take a positon as an arg. and returns the character at that positon
var charAtexamplestring  = "This is my test string"
console.log(charAtexamplestring.charAt(5))
console.log(charAtexamplestring.charAt(9))

// split() = splits our string on the basis of the arguments passed

var sampleString = "This is my sample string"
console.log(sampleString.split( ))
console.log(sampleString.split(' '))

var sampleStringexample2 = "This,is,my,sample,string"
console.log(sampleStringexample2.split(','))

var sampleStringexample3 = "This is Javascript"
console.log(sampleStringexample3.split())