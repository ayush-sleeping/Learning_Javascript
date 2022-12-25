// Working with HTTP Response Data :

// Not adding here all the other code files :

function getToDoListFromBackend(){
    var http = new XMLHttpRequest()
    http.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                var response = JSON.parse(this.responseText)
                for(var i=0; i<response.Length; i++){
                    List.appendChild(createTODODynamically(response[i].id, response[i].title))
                }
            } else{
                console.log('Call Failed')
            }
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    http.send()
}

getToDoListFromBackend()

function createTODOItemAtBackend(){
    var http = new XMLHttpRequest()
    http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
    var obj = JSON.stringify({
        "userId": 1,
        "id": 1,
        "title": currentInputValue
    })
    http.send(obj)
}