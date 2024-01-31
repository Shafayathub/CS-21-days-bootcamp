// calculations
function updateNumberAndPrice(product, price, plusClicked) {
  const input = document.getElementById(product + "-number");
  let inputNumber = parseInt(input.value);

  if (plusClicked == true) {
    console.log("plus a click korechi");
    inputNumber = inputNumber + 1;
  } else if (plusClicked == false && inputNumber > 0) {
    inputNumber = inputNumber - 1;
  }
  input.value = inputNumber;
  const total = document.getElementById(product + "-total");
  total.innerText = inputNumber * price;
  calculateTotal();
}

function getInput(product) {
  const productInput = document.getElementById(product + "-number");
  const productQuantity = parseInt(productInput.value);
  return productQuantity;
}

function calculateTotal() {
  const phonePrice = getInput("phone") * 1219;
  const casePrice = getInput("case") * 59;
  const subtotal = phonePrice + casePrice;
  const tax = parseInt((subtotal * 10) / 100);
  const totalPrice = subtotal + tax;
  document.getElementById("sub-total").innerText = subtotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}

// add remove
function addInputedValue() {
  const input = document.getElementById("inputItem");
  console.log(input.value);
  const newLi = document.createElement("li");
  newLi.classList.add("list-group-item");
  newLi.innerHTML = `${input.value} <button class='btn-danger' onclick="remove(this)">remove</button> `;

  document.getElementById("itemUl").appendChild(newLi);
}

function remove(elm) {
  elm.parentElement.remove();
}

// Phone event
document.getElementById("phone-plus").addEventListener("click", function () {
  updateNumberAndPrice("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateNumberAndPrice("phone", 1219, false);
});

// Phone case event
document.getElementById("case-plus").addEventListener("click", function () {
  updateNumberAndPrice("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateNumberAndPrice("case", 59, false);
});

document.getElementById("inputButton").addEventListener("click", function () {
  addInputedValue();
});

// ad remove

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
