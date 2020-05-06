const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

async function listUsers() {
  // データのやり取り

  // DOM操作
  users.forEach(function(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
  });
}

button.addEventListener("click", listUsers);

window.addEventListener("load", listUsers);
