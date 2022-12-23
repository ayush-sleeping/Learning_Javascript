// Form Validation using Regrex :
// Example code (Here i am not linking HTML file to js, while uploading on GitHub.)

var username = document.getElementById('username');
var loginForm = document.getElementById('login-form');
var usernameErrPara = document.getElementById('username-err');

username.addEventListener('input', function (e) {
    var pattern = /^[\w]{6,8}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);

    if (valid) {
        usernameErrPara.style.display = 'block'

    } else {
        usernameErrPara.style.display = 'none'
    }
})
