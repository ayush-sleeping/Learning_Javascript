// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* Mouse Events :
The Mouse Events are triggered when the different mouse keys are presses
and/or released.
These are the mouse events available:
- mousedown : event is triggered when either the left or right (or middle) mouse key is pressed on the HTML element.
- mouseup : event is triggered when eitherthe left or right (or middle) mouse key is released after the mousedown event.
- click : event is triggered when the left mouse button is pressed and released on the same HTML element, it requires 
the mousedown and mouseup event to happen before click event.
- dblclick : event is triggered when the left mouse button is clicked twice on the same HTML element.
- mouseover : event is triggered when the mouse pointer enters the HTML element and its child elements.
- mouseenter : event is triggered when the mouse pointer enters the HTML element.
- mousemove  : event is triggered every time the mouse pointer is moved over the HTML element.
*/

// - mousedown :
var btn = document.getElementById('top-btn');

btn.addEventListener('mousedown', function () {
    console.log('Mouse Down Event');
});


// - mouseup :
var btn = document.getElementById('top-btn');

btn.addEventListener('mouseup', function () {
    console.log('Mouse Up Event');
});


// - click :
var btn = document.getElementById('top-btn');

btn.addEventListener('click', function () {
    console.log('Click Event');
});


// - dblclick :
var btn = document.getElementById('top-btn');

btn.addEventListener('dblclick', function () {
    console.log('Double Click Event');
});


// - mouseover :
// every time the event is triggered the countdown will increase .
var over = document.getElementById('over');

var overCount = 0;
over.addEventListener('mouseover', function () {
    var countElement = document.querySelector('#over > p');
    overCount += 1;
    countElement.innerHTML = overCount;
});


// - mouseenter :
var enter = document.getElementById('enter');
var eneterCount = 0;
enter.addEventListener('mouseenter', function () {
    var countElement = dcument.querySelector('#enter > p');
    enterCount += 1;
    countElement.innerHTML = enterCount;
});


// - mousemove :
var moveElement = document.getElementById('move');
var moveCount = 0;
moveElement.addEventListener('mousemove', function () {
    var countElement = document.querySelector('#move > p');
    moveCount += 1;
    countElement.innerHTML = moveCount;
    console.log('Mouse Move Evenet')
});
