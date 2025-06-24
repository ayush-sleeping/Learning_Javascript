// Conditionals in js :
// if, else if, else, switch

// ----------------------------------------------------------

// if (condition) {
// code to be executed if condition is true

// } else if (condition) {
// code to be executed if the first condition is false and this condition is true

// } else {
// code to be executed if the first condition is false and the second condition is false

// } switch (expression) {
// case value1:
// code to be executed if expression equals value1
// break; // optional, but usually used to exit the switch block
// case value2:
// code to be executed if expression equals value2
// break; // optional, but usually used to exit the switch block
// default:
// code to be executed if expression doesn't match any case
// }

// ----------------------------------------------------------

// if examples :
if(true){
    console.log("This is true");
}

if(12 > 10){
    console.log("12 is greater than 10");
}

if(12 < 10){
    console.log("12 is less than 10");
}

if("Hello" === "Hello"){
    console.log("Strings are equal");
}


// else if examples :
let age = 18;
if(age < 18){
    console.log("You are a minor");
}
else if(age >= 18 && age < 60){
    console.log("You are an adult");
}


// else examples :
else if(age >= 60){
    console.log("You are a senior citizen");
}
else{
    console.log("Invalid age");
}

if(11>12){
    console.log("11 is greater than 12");
}
else if(11<12){
    console.log("11 is less than 12");
}
else{
    console.log("11 is equal to 12");
}

let score = 85;
if(score >= 90){
    console.log("You got an A");
}
else if(score >= 80){
    console.log("You got a B");
}
else if(score >= 70){
    console.log("You got a C");
}
else if(score >= 60){
    console.log("You got a D");
}
else{
    console.log("You failed");
}

// switch examples :
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
