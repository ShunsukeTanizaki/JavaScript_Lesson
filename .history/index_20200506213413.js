// async function callApi() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log(users);
// }

function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (users) {
      console.log(users);
    });
}

callApi();