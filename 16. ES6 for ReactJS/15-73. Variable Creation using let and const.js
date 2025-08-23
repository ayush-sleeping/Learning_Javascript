/* ES6 - Variable Creation using "let" and "const" 

    Creating Variables :
    ES6 introduced 2 new ways to create variables.
    
    let: It is like a replacement for var 
    For example,
        let mName = "John";
        let mSum = 100;
    
    const: It is used to create variables with constant values also
    known as constants. The variables created using const cannot
    be updated later in the code.
    For example,
        const API_URL = "https://api.test.com/v1" ;   */


console.clear();

let num1 = 10;
console.log(num1);

let name = "John Lark";
let isOldEnough = false;
let marks = [9, 10, 9.5];
let blogObj = {
    title: 'Blog Title 1',
    description: 'Lorem bfu dkhfsifh'
}

const num2 = 20;
console.log(num2);

num3 = 30;
console.log(num3);
var num3; //let num3; (is not possible)