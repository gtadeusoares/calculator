/* 
AJAX is the term that we use to represent what you do when a website requests more 
information from a server after the page has loaded.

We're going to use AJAX to request data from an API.
An API is application programming interface, but what we mean we say API in this context 
is it's a public server that will allow us to make AJAX calls and it will respond.

There are many public APIs
https://github.com/toddmotto/public-apis

The API we're going to use is dog.ceo. It's a simple, silly API that will give you back random pictures of dogs. 

*/

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(DOG_URL);

// promise
//     .then(function(response) {
//         const processingPromise = response.json();
//         return processingPromise;
//     })
//     .then(function(processedResponse) {
//         console.log(processedResponse);
//     })

// console.log("This will log first");

/* 
We're using a browser function here called fetch.
What fetch returns is called a promise and it's similar to a callback that we used before.
A promise, like callbacks, allows you to deal with things that don't happen immediately, things that are asynchronous.
In this case, we're waiting for the API to respond with the information we asked for.
It takes to request more information over the Internet and we don't want to hold up the rest of our code.
With a promise, it's an object that represents the future answer to whatever you asked. 
So, we have this promise, and with it we call the then method on it and give it a function to run once that asynchronous 
action (the API request) finishes.

The response will look something like:

{
  "status": "success",
  "message": "https://images.dog.ceo/breeds/affenpinscher/n02110627_11783.jpg"
}


.then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
    })
If that looks like JavaScript it's because it's technically valid JavaScript! 
It makes it really easy to use with JavaScript.
We know this blob is actually given to us in a special format called JSON
JSON stands for JavaScript Object Notation, and it's a very common way to exchange data 
over the Internet because it's machine readable but also pretty readable to humans. 
Because we know this response will be in JSON (we know that because the documentation say so) 
we can say process this blob into a JavaScript object we can use.

However processing this into JSON is not always trivial. 
If you have a lot stuff to process, it can take a lot of time and computer processing to do so. 
As such, this made asynchronous as well and it returns a promise.
That's why we do the return processingPromise; line. This is called promise chaining. 
The next then will be called once this processing is finished.

.then(function(processedResponse) {
        console.log(processedResponse);
    })
Once finished, it's a normal JavaScript we can access normally. So try (inside of the function with processedResponse): 
console.log(processedResponse.status). It should log out "success". Cool, right?



So now what I want to do make an image on the page of a random doggo.
This API happens to do just that! So, let's make it happen. 
*/

const doggos = document.querySelector(".doggos")

// promise 
//     .then(function(response) {
//         const processingResponse = response.json();
//         return processingResponse;
//     })
//     .then(function(processedResponse) {
//         const img = document.createElement("img");
//         img.src = processedResponse.message
//         img.alt = "a dog";
//         doggos.appendChild(img);
//     });


/* 
Here we create an <img /> tag and append it into the DOM via appendChild. 
Wouldn't it be cool if we could do it multiple times? Let's do it!!


*/

function addNewDog() {
    const promise = fetch(DOG_URL);
    promise 
        .then(function(response) {
            const processingResponse = response.json();
            return processingResponse;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "a dog";
            doggos.appendChild(img);
        });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDog);