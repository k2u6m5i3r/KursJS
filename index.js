// console.log("Hello World!!!");
// XMLHttpRequest
// let myRequests = new XMLHttpRequest();

//

// Fetch парсим посты

// let myFetch;
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
      for(let i in json)
      console.log(json[i].title);
  });




