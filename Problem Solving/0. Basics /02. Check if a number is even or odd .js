// Check if a number is even or odd :

// Easy way :
let x = 5;
if (x % 2 === 0) {
    console.log(x + " is even");
}
else {
    console.log(x + " is odd");
}


// Another way using functions
function isEvenOrOdd(y) {
    if (y % 2 === 0) {
        return y + " is even";
    }
    else {
        return y + " is odd";
    }
}
console.log(isEvenOrOdd(10)); // 10 is even
console.log(isEvenOrOdd(11)); // 11 is odd


// Yet another way using arrow function
const checkEvenOrOdd = (z) => {
    return z % 2 === 0 ? `${z} is even ` : `${z} is odd`;
}
console.log(checkEvenOrOdd(12)); // 12 is even
console.log(checkEvenOrOdd(13)); // 13 is odd
