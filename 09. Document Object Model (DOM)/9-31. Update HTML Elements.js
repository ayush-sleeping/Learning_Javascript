// Update HTML Elements :
// Example code (Here i am not linking HTML file to js)
console.clear()

console.log('JS Loaded');


var countdownElement =
    document.getElementById
        ('countdown');

console.log(countdownElement.innerHTML);

var initialCountdownVal = countdownElement.innerHHTML;

// to update it :
countdownElement.innerHTML = initialCountdownVal - 1;

setInterval(function () {
    countdownElement.innerHTML = initialCountdownVal - 1;
}, 1000);

// to decrease every second value :
setInterval(function () {
    initialCountdownVal -= 1;
    countdownElement.innerHTML = initialCountdownVal - 1;
}, 1000);

// to stop it at 0 , because it will continuously decrease till infinite 
setInterval(function () {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;

    countdownElement.innerHTML = initialCountdownVal - 1;
}, 1000);

// to change the background :
var bgImageElement = document.getElementById('bg-Image');
setInterval(function () {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;

    countdownElement.innerHTML = initialCountdownVal;
    var backImgPath = initialCountdownVal % 2 === 0 ? '/assets/background-1.jpg' : '/assets/background-1.jpg'

    bgImageElement.src = backImgPath;
    console.log('Interval Running')
}, 1000);