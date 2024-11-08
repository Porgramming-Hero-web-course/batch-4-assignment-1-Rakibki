Asynchronous programming is important when you want to perform tasks like fetching data from the internet, reading files, or working with databases without stopping the rest of your program from running. In TypeScript (and JavaScript), you can handle these tasks in different ways: using callbacks, promises, or async

Today, async/await is popular because it makes handling asynchronous tasks simpler. With callbacks, code can quickly become messy and hard to read. Promises are an improvement, but they still need chaining with .then() and .catch().

Async/await, however, allows you to write asynchronous code that looks more like regular code. This makes it easier to read, understand, and fix if something goes wrong.


Example:
A function that returns a promise with .then() and .catch()
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true; ----> You can change this to false to simulate an error
    if (success) {
      resolve("Data received");
    } else {
      reject("Error occurred");
    }
  });
}

-----Using .then() and .catch() to handle the promise
fetchData()
  .then((data) => {
    console.log(data); ---> Prints "Data received"
  })
  .catch((error) => {
    console.error(error); ---> Prints "Error occurred" if rejected
  });
