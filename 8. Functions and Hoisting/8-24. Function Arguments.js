// Functions Arguments :
console.clear()

function greetings(){
    console.log('Welcome');
}

greetings();

// -------------------------------------------------------

function greetings(personName){
    console.log('Welcome ' + personName);
}

greetings('Qaifi');

// -------------------------------------------------------

function totalSum(num1, num2){
    console.log('num1 => ' + num1);
    console.log('num2 => ' + num2);
    console.log(num1 + num2)
}
totalSum();

// -------------------------------------------------------

function totalSum2(num1, num2){
    console.log('num1 => ' + num1);
    console.log('num2 => ' + num2);
    console.log(num1 + num2)
}
totalSum2(2, 7);

// -------------------------------------------------------

function totalSum3(num3, num4, num5=40){
    console.log('num3 => ' + num3);
    console.log('num4 => ' + num4);
    console.log('num5 => ' + num5);
    console.log(num3 + num4 + num5);
}
totalSum3(2, 7);

//-------------------------------------------------------

function totalSum4(num6, num7, num8){
    console.log('num6 => ' + num6);
    console.log('num7 => ' + num7);
    console.log('num8 => ' + num8);
    if(num8 !== undefined){
        console.log(num6 + num7 + num8)
    } else {
        console.log(num6 + num7);
    }
}

totalSum4(2, 7);