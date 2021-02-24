const key = document.getElementById("key");
const which = document.getElementById("which");
const code = document.getElementById("code");

const insert = document.getElementById("insert");

document.addEventListener("keydown", (event) => {
  insert.innerHTML = event.which;
  insert.innerHTML = event.code;
  insert.innerHTML = event.key;
});
