const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", async function() {
  // データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // DOM操作
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    ocument.createElement("li");
    list.innerText = user.name;
    lists.appendCh;
  }

  // users.forEach(function(user) {
  //   const list = document.createElement("li");
  //   list.innerText = user.name;
  //   lists.appendChild(list);
  // });
});
