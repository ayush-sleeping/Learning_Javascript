/* ES6 - Rest and spread Operator :
 */

console.clear();

const mSum = (num1, num2) => console.log(num1 + num2);
mSum(1, 2, 3, 4, 5);

// Rewriting it using ES6 and also doing sum :

const Sum = (...args) => {
    let sum = 0;
    for(let i=0; i<args.length; i++){
        sum += args[i]
    }
    console.log(sum);
}
Sum(1, 2, 3, 4, 5, 6, 7, 8);


const nSum = (num1, num2, ...args) => {
    console.log(num1);
    console.log(num2);
    let sum = 0;
    for(let i=0; i<args.length; i++){
        sum += args[i]
    }
    console.log(sum);
}
nSum(1, 2, 3, 4, 5, 6, 7, 8);