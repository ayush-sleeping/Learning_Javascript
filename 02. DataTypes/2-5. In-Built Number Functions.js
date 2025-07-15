// We will use some inbuilt number functions (JS Numbers - Functions)

console.clear();
var num1 = 10;
var num2 = 20.3;

// tnString() number as Input and returns a string
console.log(num1.toString())
console.log(num2.toString())

var strnum1 = "10";
var strnum2 = "11.5";
var strnum3 = "ABC";

// parseInt() string numeral as Input and returns a number
console.log(parseInt(strnum1));
console.log(parseInt(strnum2));
console.log(parseInt(strnum3));

// parsefloat() string numeral as an input and returns a floating number
console.log(parseFloat(strnum2));
console.log(parseFloat(strnum3));

// toFixed() takes floating number and rounds it off to given position 

var strfloat = 87.23875;
console.log(strfloat.toFixed())
console.log(strfloat.toFixed(2))
console.log(strfloat.toFixed(5))


