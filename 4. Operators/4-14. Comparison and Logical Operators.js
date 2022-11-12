// Comparison and Logical Operator 

console.clear()

// ==
if(10 == 10){
    console.log(true)
}
if(10 == '10'){
    console.log(true)
}

// ===
if(10 === 10){
    console.log(true)
} else{
    console.log(false)
}

/* != */
if(10 != 5){
    console.log(true)
} else{
    console.log(false)
}
if(10 != '10'){
    console.log(true)
} else{
    console.log(false)
}

/* !== */
if(10 !== 10){
    console.log(true)
} else{
    console.log(false)
}
if(10 !== '10'){
    console.log(true)
} else{
    console.log(false)
}

/* < */
if(15 < 10){
    console.log(true)
} else{
    console.log(false)
}

/* <= */
if(10 <= 10){
    console.log(true)
} else{
    console.log(false)
}

/* > */
if(10 > 10){
    console.log(true)
} else{
    console.log(false)
}

/* >= */
if(10 >= 10){
    console.log(true)
} else{
    console.log(false)
}

// Logical Operator = &&, ||, !

// &&
if(5 > 10 && 10 < 15){
    console.log(true)
} else{
    console.log(false)
}

// ||
if(5 > 10 || 10 < 15){
    console.log(true)
} else{
    console.log(false)
}

/* ! */
if(!(5 > 10)){
    console.log(true)
} else{
    console.log(false)
}

// Ternary Operator {expression} ? a : b
20 < 3 ? console.log(true) : console.log(false)
