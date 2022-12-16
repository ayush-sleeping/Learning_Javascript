// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* The modern Browsers give us access to a properly called "ClassList"
holds all the classes of an HTML element . 

ADD CLASS :
We can use the method add() 

var selectElement = getElementById('selector')/querySelector('Selector')
Syntax : selectElement.classList.add('MyClass'); */

console.clear()

var mainHeding = document.getElementById("main-heading");
console.log(mainHeading.classList);
mainHeading.classList.add('big');

setTimeout(function(){
    mainHeding.classList.remove('big')
}, 1500);

