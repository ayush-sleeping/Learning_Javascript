/* ES6 : Arrow Functions: reduce() :- 
    Just like map(), reduce() also iterates through the entire array and it
    accepts a callback function to perform some action on the array element.
    The difference here is that reduce() passes the result of the callback
    from one iteration to the next one. This callback result is called
    accumulator. The accumulator can be pretty much anything (integer, string, objec or even an array)
    and must be instantiated and passed when calling reduce().
    Syntax:
    arr.reduce((acc, item)=> {
        // callback function body
    }, acc_default_valuue)
*/

console.clear()

const Ar = [1, 2, 3, 4, 5];
Ar.reduce((acc, item)=> {
    console.log(item);
    console.log(acc);
    return acc + item;
}, 0)


// Trying something diff.

const A = [1, 2, 3, 4, 5];
const result = A.reduce((acc, item) => {
    return acc + item;
}, 0)

console.log(result);