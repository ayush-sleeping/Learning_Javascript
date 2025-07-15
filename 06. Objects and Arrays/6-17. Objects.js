// Objects in JavaScript

console.clear()

var Cars = {
    "p1" : "350 kmph",
    "gallardo" : '320 kmph',
    "veyron" : '409 kmph' ,
    "agera" : '429 kmph'
}

console.log(Cars)
console.log(typeof(Cars))

var Agera = {
    name : "Agera",
    manufacture : {
        name : "Koenigsegg",
        location : "sweden"
    },
    topspeed: 429,
    color: "Black",
    spoilers: false,
}

console.log(Agera.name)
console.log(Agera.topspeed)
console.log(Agera.manufacture)
console.log(Agera.manufacture.name)
