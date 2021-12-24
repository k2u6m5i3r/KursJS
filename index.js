// console.log("Hello World!!!");
// XMLHttpRequest загрузка без сервера
//  let myRequests = new XMLHttpRequest();
// myRequests.open("GET", "about.html");
// myRequests.send();
// myRequests.onload = function() {
//     console.log(`Загружено: ${myRequests.status} ${myRequests.response}`);
//   };
// myRequests.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
//     console.log(`Ошибка соединения`);
//   };


// XMLHttpRequest загрузка поиска google.com
let url = new URL('https://google.by/search');
url.searchParams.set('q', 'My name info');
let mySerchGoogle = new XMLHttpRequest();

mySerchGoogle.open("POST", url);
mySerchGoogle.send();
mySerchGoogle.status = function(){
        console.log(`${mySerchGoogle.status}`);
}


//Fetch парсим посты

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => {
//       for(let i in json)
//       console.log(json[i].title);
//   });




