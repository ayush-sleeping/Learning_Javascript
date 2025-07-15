// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* Create  HTML Element part 2 :
*/
var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementsByTagName('add-Item');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('remove-item');

var currentInputValue = '';
inputBox, addEventListener('input', function (e) {
    currentInputValue = e.target.value;
});

inputBox.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        addListItem();
    }
});

function createNewNode (){
    
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (List.childElementCount + 1);

    return newListElement;
}

function addListItem() {
    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        var newListElement = createNewNode();

        list.appendChild(newListElement);
        console.log(list.childElementCount);

        inputBox.value = ''
        currentInputValue = ''
    }else {
        alert('Please enter a valid item')
    }

};

btnAdd.addEventListener('click', addListItem);

btnUpdate.addEventListener('click', function(){
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
});

btnRemove.addEventListener('click', function(){
    var firstElement = List.firstElementChild;

    list.removeChild(firstElement);
})