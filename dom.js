let inputItem = document.getElementById("inputItem");

let btn = document.getElementById("inputButton");

btn.addEventListener("click", function () {
  console.log(inputItem.value);
  let newLi = document.createElement("li");

  newLi.classList.add("list-group-item");
  //   newLi.textContent = inputItem.value;
  newLi.innerHTML = `${inputItem.value} <button class="btn-danger" onclick="remove(this)">remove</button>`;

  let parentUl = document.getElementById("parentUl");

  parentUl.appendChild(newLi);
});

function remove(event) {
  event.parentElement.remove();
}

let queryCheck = document.querySelectorAll("li");
// console.log(queryCheck);

for (node of queryCheck) {
  console.log(node);
}
