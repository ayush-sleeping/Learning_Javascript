// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* Keyboard Events :
The keyboard events are triggered hen the user clicks a key
form the keyboard.

There re 3 keyboard events :
- keydown : It is triggered when any key is pressed on the keyboard.
- keyup : It is triggered when any key is released after it's keydown event.
- keypress  : It is triggered when any key except Shift. Function, CapsLock is in pressed position.
*/

// keydown :

document.body.addEventListener('keydown', function(){
    console.log('A key was clicked');
});


document.body.addEventListener('keydown', function(){
    var keyCode = e.keyCode
    console.log(keyCode + 'A key was clicked');
});


document.body.addEventListener('keydown', function(){
    var keyCode = e.keyCode;
    if(keyCode === 13){
        console.log(keyCode + 'A key was clicked');
    }
});

document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 13){
        console.log('Keydown for =>' + keyCode);
    }
});

// keyup :

document.body.addEventListener('keyup', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 13){
        console.log('keyUp for =>' + keyCode);
    }
});


// keypress :

document.body.addEventListener('keypress', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 13){
        console.log('keyPress for =>' + keyCode);
    }
});