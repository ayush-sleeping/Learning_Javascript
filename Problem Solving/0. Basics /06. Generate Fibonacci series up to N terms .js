// Q. Generate Fibonacci series up to N terms :
// ------------------------------------------------------------------------ ::

let n = 10; // Number of terms you want
let a = 0, b = 1; // First two terms of Fibonacci series
console.log("Fibonacci Series up to", n, "terms:");

for (let i = 1; i <= n; i++) {
    console.log(a); // Print the current term
    let next = a + b; // Next term is sum of previous two
    a = b;            // Move to next
    b = next;
}
// Output: Fibonacci Series up to 10 terms:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
