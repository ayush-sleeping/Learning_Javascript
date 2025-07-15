// For Loop:

console.clear()

var List = [1, 2, 3, 4]
var pos;
for(pos = 0; pos < List.length; pos++){
    console.log('Position => ' + pos + ' Value => ' + List[pos])
}


// Break Keyword :
var vos;
for(vos = 0; vos < List.length; vos++){
    if(vos >= 2) break
    console.log('Position => ' + vos + ' Value => ' + List[pos])
}

// Continue Keyword :
var wos;
for(wos = 0; wos < List.length; wos++){
    if(wos % 2 !== 0) continue
    console.log('Position => ' + wos + ' Value => ' + List[pos])
}