/* ES6 - Callbacks and Promises :

    Callbacks and Async Operation :
    In JavaScript the code is excuted line-by-line in a sequence
    so when we run a parallel operation or asynchronous operation
    like fetching data from backend, JavaScript doesn't waits for the
    response it simpley excutes a function to call when it is completed.
    This function is called a Callback Function.

    */

let list = [];
$.get('https://jsonplaceholder.typicode.com/posts', (response) => {
    console.log(response);

    const id = 1;
    $.get('https://jsonplaceholder.typicode.com/posts/${id}', (response) => {
        console.log(response);

        $.get('https://jsonplaceholder.typicode.com/posts/${id}/comments', (response) => {
            console.log(response);
        }).fail(err => {
            console.log(err);
        })
    }).fail(err => {
        console.log(err);
    })
}).fail(err => {
    console.log(err);
})

/* Introduction to Promises :
    A promise is used to handle the asunchronous result of an operation.
    It defers the excution of a code block until an asynchronous request
    is completed. This way, Other operation can keep running without
    interruption.
    
A promises has 3 stages :
    - Pending: It means the operation is going on.
    - FulFilled: It means the operation was completed.
    - Rejected: It means the operation did not complete and an error can be thrown. 

 
Syntax to create Promises :
const mPromise = new Promise((resolve, reject)=> {
    // Promise body
    // call resolve() when the operation is complete.
    // call reject() when the operation is failed.
})
   */

const postListPromise = new Promise((resolve, reject) => {
    $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
        console.log('Get Posts List Response =>', data);
        resolve(data);
    }).fail(err => {
        reject(new Error('call failed for get post list request with status ${err.status'))
    })
})


/* "then() and catch()" Methods :

    then() method is called when the resolve() is excuted.
    It receives data passed in the resolve() methods as arguments. 
    
    catch() method is called when the reject() method is
    excuted. It receives the data passed in the reject() method
    as arguments.

    */


// Chaining Promises :
const postDeatilsPromise = (data) => new Promise((resolve, reject) => {
    $.get('https://jsonplaceholder.typicode.com/posts/${data[0].id}', (data) => {
        resolve(data);
    }).fail(err => {
        reject('Details call failed and status ${data.status}')
    })
})

postListPromise
.then(postDeatilsPromise)
.then(response => {
    console.log('Post Details Response =>', response)
})
.catch(() => {
    console.log('Call Failed');
})