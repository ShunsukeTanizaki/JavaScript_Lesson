const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", function() {
  const res = fetch("https://jsonplaceholder.typicode.com/users");

  console.log(res);
});
