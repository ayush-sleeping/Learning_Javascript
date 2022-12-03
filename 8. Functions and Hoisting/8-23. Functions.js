// Functions :
console.clear()

/*
function functionName(param1, param2, ......,paramN){
    ... Block of code ...
} 
*/

function Sum(){
    var num1 = 10
    var num2 = 20
    var Sum2 = num1 + num2
    console.log(Sum2)
}

Sum()

//-------------------------------------------------------

function Sum3(){
    var num3 = 10
    var num4 = 30
    var Sum4 = num3 + num4
    
    return Sum4
}

console.log(Sum3())

//-------------------------------------------------------

function Sum5(){
    var num5 = 20
    var num6 = 30
    var Sum6 = num5 + num6
    
    console.log('Im a print statement')
}

console.log(Sum5())

//-------------------------------------------------------

function Sum7(){
    var num7 = 20
    var num8 = 30
    var Sum8 = num7 + num8
    return Sum8
    console.log('Im a print statement')
}

var totalSum = 100 + Sum7()
console.log(totalSum)

//-------------------------------------------------------