let count = localStorage.getItem("cart-count") || 0;
count = parseInt(count); 

document.getElementById("cart-count").textContent = count;

function addToCart() {
  count++;
  localStorage.setItem("cart-count", count);
  document.getElementById("cart-count").textContent = count;
}
