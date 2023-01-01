/* ES6 - Template Strings :

    It is just a string which allows embedding expressions inside it.
    To create a templet string you don't use single or double
    quotes, you use back tick. The expressions are embedded by 
    wrapping them inside ${}.
    
    For example: 
    const mFreetings = 'Hello ${name}'
    here, the expression is a variable.
    
    const moreGreetings = 'Hello ${fullName()}'
    here, the expression is a function call.
    
*/

console.clear();

const firstName = 'John'
const lastName = 'Lark'

function getFullName(firstName, lastName){
    return '${firstName} ${lastName}';
}

const mGreetings = 'Hello ${getFullName(firstname, lastname) + 100}';

console.log(mGreetings);



// rgba(red, green, blue, aplha)

let red = 200;
let green = 155;
let blue = 100;
let aplha = 0.8;

const rgbaExp = 'rgba(${red}, ${green}, ${blue}, ${aplha})' ;

console.log(rgbaExp);