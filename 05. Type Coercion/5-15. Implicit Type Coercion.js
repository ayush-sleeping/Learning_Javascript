// Implicit Type Coercion in JS :

console.clear()

var mstr = 'Hello'
var mnum = 5
var msum = mstr + mnum

console.log(msum)
console.log(typeof(msum))

console.log('Hola' + true)
console.log(typeof(null + 'hola'))

console.log(50 + 'hola')
console.log(typeof(50 + 'hola'))

var mvalue1 = +'2'
console.log(mvalue1)
console.log(typeof(mvalue1))

var mvalue2 = -'20'
console.log(mvalue2)
console.log(typeof(mvalue2))

var mvalue3 = -'Apple'
console.log(mvalue3)
console.log(typeof(mvalue3))

var mvalue4 = 2>='2'
console.log(mvalue4)
console.log(typeof(mvalue4))

if(0){ // 0, null, undefined treated as false
    console.log('True')
}else{
    console.log('False')
}

if(5){
    console.log('True')
}else{
    console.log('False')
}

if('Rocket'){
    console.log('True')
}else{
    console.log('False')
}

