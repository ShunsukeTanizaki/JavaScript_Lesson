// async await を使った書き方（主流）

async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}

// function callApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (users) {
//       console.log(users);
//     });
//   }

callApi();