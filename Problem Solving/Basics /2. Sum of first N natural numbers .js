// Sum of first N natural numbers :
// basic way :
function sumOfFirstNNaturalNumbers(n) {
    let sum = 0;
    for (let x = 1; x <= n; x++) {
        sum = sum + x;
    }
    return sum;
}
console.log(sumOfFirstNNaturalNumbers(6)); // 21


// another way :
function sumOfFirstNNaturalNumbers2(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfFirstNNaturalNumbers2(6)); // 21


// yet another way :
function sumOfFirstNNaturalNumbers3(n) {
    let sum = 0;
    let x = 1;
    while (x <= n) {
        sum = sum + x;
        x++;
    }
    return sum;
}
console.log(sumOfFirstNNaturalNumbers3(6)); // 21


// yet another way :let sum = 0;
let n = 5;
let sum = 0;
let x = 1;
do {
    sum = sum + x;
    x++;
}
while (x <= n);
//return sum;
console.log(sum); // 15
