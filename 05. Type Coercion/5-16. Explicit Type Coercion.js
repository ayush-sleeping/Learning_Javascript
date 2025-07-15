// Explicit Type Coercion

console.clear()

var mNum = 15
console.log(typeof(String(mNum)))
console.log(typeof(String(true)))
console.log(typeof(String(-50.10)))
console.log(typeof(String(null)))
console.log(typeof(String(undefined)))

// To Number 
console.log(typeof(Number('2')))
console.log(Number(true), typeof(Number(true)))
console.log(Number(false), typeof(Number(false)))
console.log(Number('-90.54'), typeof(Number('-90.54')))
console.log(Number('apple'), typeof(Number('apple')))

// To Boolean
console.log(Boolean(true), typeof(Boolean(true)))
console.log(Boolean(2), typeof(Boolean(2)))
console.log(Boolean(0), typeof(Boolean(0)))
console.log(Boolean('apple'), typeof(Boolean('apple')))
console.log(Boolean(null), typeof(Boolean(null)))
console.log(Boolean(''), typeof(Boolean('')))