// 🚀 Part 1: JavaScript Basics — Age Checker
function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.innerText = "Please enter a valid number.";
  } else if (age >= 18) {
    result.innerText = "You're an adult.";
  } else {
    result.innerText = "You're underage.";
  }
}

// ❤️ Part 2: Functions — Total Calculator
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = calculateTotal(price, quantity);
  document.getElementById("totalResult").innerText = `Total: KES ${total.toFixed(2)}`;
}

// 🔁 Part 3: Loops — Fruit List Generator
function generateList() {
  const fruits = ["Mango", "Banana", "Pineapple", "Avocado"];
  const list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear previous list

  for (let i = 0; i < fruits.length; i++) {
    const item = document.createElement("li");
    item.innerText = `Fruit ${i + 1}: ${fruits[i]}`;
    list.appendChild(item);
  }
}

// 🌐 Part 4: DOM Interactions
// 1. Toggle visibility
document.getElementById("toggleBtn").addEventListener("click", () => {
  const msg = document.getElementById("toggleMessage");
  msg.classList.toggle("hidden");
});

// 2. Create new element dynamically
function addNewElement() {
  const container = document.getElementById("newElements");
  const newDiv = document.createElement("div");
  newDiv.innerText = "New element added!";
  newDiv.style.marginTop = "10px";
  newDiv.style.color = "#007BFF";
  container.appendChild(newDiv);
}

// 3. DOM update via function (already used in Part 1 & 2)


