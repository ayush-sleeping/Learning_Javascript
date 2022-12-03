/*  Function Hositing :
Always ensure to declare a variable before using them, it will help you to avoid
lots of silent error .
because its a bad habit to use this hositing, it a feature of JavaScript*/

console.clear()

sum(5, 10)
sum(30, 22)
function sum(num1, num2){ // It treats sum as a Assignment not an Declaration.
    console.log(num1 + num2)
}

sum(90, 8)

//-------------------------------------------------------

var sum = function(num3, num4){
    total = num3 + num4;
    var total
    console.log(total)
}
sum(88, 9)

//-------------------------------------------------------

var sum = function(num3, num4){   
    var total = undefined
    total = num3 + num4;
    console.log(total)
}
sum(88, 9)

// ------------------------------------------------

var total = 10;
var sum = function(num5, num6){   
    console.log(total);
    total = num5 + num6;
    var total
    console.log(total)
}
sum(88, 9)

// ------------------------------------------------
