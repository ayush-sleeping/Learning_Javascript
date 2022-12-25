/* AJAX :
It is a short form for Asynchronous JavaScript and XML,
It allows web pages to be updated asynchronously by exchanging data
with the backend. This makes it possible to update parts 
of a web page, without reloading the whole page.

Initially AJAX was used to send and receive XML because that 
was how the data was received from the backend in old days.
But now it can also be used to send/receive JSON objects,
which is pretty common these days. 

Running code in the background is called Asynchronous Execution.

AJAX uses a browser built-in XMLHttpRequest object to make requests
to the background server. This gave a simple and standard way to make 
HTTP requests from JavaScript to get content and update the HTML page. 

practice it on JSONplaceholder ...
*/


// Not adding here all the other code files :

function getToDoListFromBackend(){
    var http = new XMLHttpRequest()
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    http.send()
}

getToDoListFromBackend()