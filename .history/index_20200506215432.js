// ＊async await を使った書き方（主流）

async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}


// ＊async await を使わない書き方
// function callApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (users) {
//       console.log(users);
//     });
//   }


// ＊昔の書き方　アップロードの進捗がわかる
// function callApi() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = function () {
//     console.log(xhr.response);
//   }
// }

// ＊対応ブラウザ注意（babel、typescript）

callApi();