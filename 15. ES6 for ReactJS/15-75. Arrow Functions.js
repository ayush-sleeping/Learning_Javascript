/* ES6 - Arrow Functions :

    ES6 gives us a new syntax for defining functions using a fat arrow.
    Arrow functions bring a lot of charity & code reduction.
    
    Syntax:
        function greetings(name){
            return('Welcome' + name);
        } 
        const greetings = (name) => {
            return('Welcome ${name}')
        }
*/

console.clear();

function greetings(name){
    return 'Welcome ${name}'
}

const mGreetings = name => 'Welcome ${name}'

console.log(greetings('John'));
console.log(mGreetings('John'));