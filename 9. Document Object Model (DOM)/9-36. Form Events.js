// Example code (Here i am not uploading HTML and CSS file to Github of this code)

/* Form Events :
- change : The change event is triggered when the content of an input field 
is changed or when the user selects a value from the dropdown etc.

- focus : The focus event is triggered when the input field is focused by the user.

- blur : The blur event is triggered when the input field loses focus.

- submit :  The submit event is triggered when the submit button is clicked by the user
*/
console.clear()

// - change :
var username = document.getElementById('username');
username.addEventListener('change',function(){
    console.log('Value Changed');
});
// another event listener : "input"
var username = document.getElementById('username');
username.addEventListener('input',function(){
    console.log('Value Changed');
});
// for uppercase :
var username = document.getElementById('username');
username.addEventListener('input',function(event){
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
});


// - focus :
username.addEventListener('focus', function(){
    console.log('Element Fcussed');
});


// - blur :
username.addEventListener('blur', function(){
    console.log('Element Lost Focus');
});


// - submit :
var loginForm = document.getElementById('login-form');


loginForm.addEventListener('submit', function(){
    alert('Submit Button Clicked')
});

// or

loginForm.addEventListener('submit', function(){
    alert('Submit Button Clicked')
    e.preventDefault();
});

