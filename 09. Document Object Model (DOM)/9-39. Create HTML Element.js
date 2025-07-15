// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* Create  HTML Element :
*/

var list = document.getElementById('todo-list');
var btnAdd = document.getElementsByTagName('add-Item');

btnAdd.addEventListener('click', function () {
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode('List Item' + (list.childElementCount + 1));
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (List.childElementCount + 1);


    var firstItem = list.firstElementChild
    console.log(firstItem);

    // list.appendChild(newListElement);
    list.insertBefore(newListElement, firstItem)
    console.log(list.childElementCount);
});