// Events :
// Example code (Here i am not uploading HTML and CSS file to Github of this code)
console.clear()

var btn = document.getElementById("btn-click");
btn.onclick = function(){
    alert("Button Clicked");
}

// or

function onBtnClick(){
    alert("Button Clicked");
}
btn.onclick = onBtnClick; 
/* or */
btn.addEventListener('click', function(){
    alert('Anonymous Function Called')
})
/* or */
btn.addEventListener('click', onBtnClick)

// Chnaging background Color :
function onBtnClick(){
    mainDiv.style.backgroundColor = "lightcoral"
}

// or randomly change color of bg :
function onBtnClick(){
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random()*255)+ "," +
    Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) * ")" 
}