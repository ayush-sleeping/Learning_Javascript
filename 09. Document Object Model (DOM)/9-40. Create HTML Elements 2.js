// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* Create  HTML Element part 2 :
*/

var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementsByTagName('add-Item');

var currentInputValue = '';
inputBox, addEventListener('input', function (e) {
    currentInputValue = e.target.value;
});

btnAdd.addEventListener('click', function () {
    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        var newListElement = document.createElement('li')
        var textNode = document.createTextNode(currentInputValue);
        newListElement.appendChild(textNode);
        newListElement.id = "item" + (List.childElementCount + 1);


        list.appendChild(newListElement);
        console.log(list.childElementCount);

        inputBox.value = ''
        currentInputValue = ''
    }else {
        alert('Please enter a valid item')
    }

});