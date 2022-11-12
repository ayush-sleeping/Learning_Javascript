/* Assignment Operator :
= , += , -= , *= , /= , %= */

console.clear()

//  Lets first assign some variables
var num1 = 10;
var num2 = 15;
var num3 = 20;
var num4 = 25;
var num5 = 30;
var num6 = 40;
var num7 = 50;
var num8 = 60;

// =
num1 = 65;
console.log(num1)

// +=
num2 += 10; // num2 = num2 + 10
num1 += num2
console.log(num2)
console.log(num1)

// -=
num3 -= 5; // num3 = num3 - 5
num4 -= num3 // num4 = num4 - num3
console.log(num3)
console.log(num4)

// *=
num5 *= 10 // num5 = num5 * 10
console.log(num5)

// /=
num6 /= 10 // num6 = num6 / 10
console.log(num6)

// %=
num8 %= 10 // num7 = num7 % 10
console.log(num8)
