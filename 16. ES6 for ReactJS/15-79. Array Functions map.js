/* ES6 - Array Functions : map() -
It iterates the array for us and we can pass a callback
    function to perform some operation on the each array item.
    The updated avlues can be returned  ny the callback function to
    create a new array.
    
    Syntax:
    arr.map((item)=>{
        //CallBack function body.
    }) 
*/

console.clear();

const Arr = [1, 2, 3, 4, 5];
let newArr = [];
for(let i=0; i<Arr.length; i++){
    newArr.push(Arr[i]*2)
}
console.log(newArr);


// This could be function as well :

const mArr = [1, 2, 3, 4, 5];
let mnewArr = [];

const doubleValues = (item) => {
    return item*2
}

for(let i=0; i<mArr.length; i++){
    mnewArr.push(doubleValues(mArr[i]))
}
console.log(mnewArr);

// Using map :

const nArr = [1, 2, 3, 4, 5];
let nnewArr = nArr.map((data, pos)=>{
    console.log('Item at pos: ${pos} is ${data}');
    return data * 2;
})
console.log(nArr)
console.log(nnewArr)