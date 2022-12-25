/* Handling HTTP Response :

The "redyState" Property :
    The XMLHTTPRequest object gives us access to another property called readyState.
    The readyState property holds the status of the XMLHttpRequests.
    
These are the available status for the requests.
- UNSENT ( represented by the value 0 )
- OPENED ( represented by the value 1)
- HEADERS RECEIVED (represented by the value 2)
- LOADING ( represented by the value 3)
- DONE (represented by the value 4)


The "onreadystatechange" Property :
XMLHTTPRequest gives us access to another property called onreadystatechange.
The onreadystatechange property defines a function to be excuted when the 
readystate changes . */

// Not adding here all the other code files :

function getToDoListFromBackend(){
    var http = new XMLHttpRequest()
    http.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){             
            console.log(JSON.parse(this.responseText))
            } else{
                console.log('Call Failed')
            }
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    http.send()
}

getToDoListFromBackend()