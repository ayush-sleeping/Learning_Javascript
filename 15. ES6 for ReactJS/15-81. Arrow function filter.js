/* Array Function : Filter() :
    It iterates through the array to create a new array.
    You can decide which elements should be added in the 
    new array based on some conditions.
    
Syntax :
arr.filter(item => {
    //Return tru/false to add/skip the current item 
}) 

*/

console.clear()

const zArr = [1, 2, 3, 4, 5, 6, 7];
const resultzArr = zArr.filter(item => {
    console.log(item);
    return false;
})

console.log('Result Arr => ', resultzArr);


// Only even no.


const xArr = [1, 2, 3, 4, 5, 6, 7];
const resultxArr = xArr.filter(item => {
    //console.log(item);
    return item % 2 === 0;
})

console.log('Result Arr => ', resultxArr);