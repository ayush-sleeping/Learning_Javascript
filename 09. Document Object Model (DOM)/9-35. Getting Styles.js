// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* Get Element Styles values using JavaScript : 
There are two ways we can get Element style value:
var selectElement = getElementById('selector')/querySelector('selector')

INLINE STYLES :
Syntax : selectedElement.style.{inline-style-property};
For example : selectElement.style.width

CSS FILE :
Syntax : window.getComputedStyle(selectElement).{style-property-name}
For example : window.getComputedStyle(selectedElement).width*/

console.clear()

var btnIncreaseFont = document.getElementById('btn-increase');
console.log(window.getComputedStyle(btnIncreaseFont).marginRight)
console.log(btnIncreaseFont.style);

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2)));

btnIncreaseFont.onclick = function() {
    initialFontSize += 10
    mainHeading.style.fontSize = initialFontSize + "px";
}