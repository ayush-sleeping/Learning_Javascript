console.clear()

var num1 = 1 + 5;
var num2 = num1 / 4;
var num3 = 1 + 5;
var num4 = num3 / 4;
console.log(num2 +""+ num4);

//------------------------------------------------

var a = 1;
var b = 2;
var c;
var d;

c = ++b;
d = a++;
c++;
b++;
++a;

console.log(a+""+b+""+c);

//------------------------------------------------

var input = 7;
var output1 = ++input + ++input + ++input;
var output2 = input++ + input++ + input++;
var output3 = input++ + ++input + input++;

console.log(output1 + '' + output2 + '' +output3);

