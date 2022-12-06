// Update Styles :
// Example code (Here i am not uploading HTML and CSS file to Github of this code)
console.clear()

/* selectedElement.style.{prpertyName} = value; */

selectedElement.style.width = '300px' ;

var countdownElement = document.getElementById("countdown");
var initialCountdownVal = countdownElement.innerHTML;
setInterval (function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
    countdownElement.innerHTML = initialCountdownVal -= 1;
    countdownElement.style.fontSize = "500px"
}, 1000);