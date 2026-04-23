function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  alert("Registered Successfully!");
  window.location.href = "index.html";
}
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if(user === storedUser && pass === storedPass) {
    window.location.href = "catalog.html";
  } else {
    alert("Invalid Login");
  }
}
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}