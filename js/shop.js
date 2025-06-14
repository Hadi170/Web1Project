document.addEventListener("DOMContentLoaded", () => {
  const categories = ["T-Shirts", "Jeans", "Shorts"];
  let currentIndex = 0;

  const categoryName = document.getElementById("category-name");
  const prevBtn = document.getElementById("prev-category");
  const nextBtn = document.getElementById("next-category");

  const productGrid = document.querySelector(".product-grid");
console.log(window.location.pathname);

  const products = {
    "T-Shirts": `
      <div class="row justify-content-center">
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div class="product-card">
          <img src="../images/shirt1.jpg" alt="Shirt 1" />
          <p class="brand">adidas</p>
          <h4>Cartoon Astronaut T-Shirts</h4>
          <div class="rating">⭐⭐⭐⭐⭐</div>
          <p class="price">$99</p>
          <button class="cart-btn" onclick="addToCart()">🛒</button>
        </div>
        </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/shirt2.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$78</p>
            <button class="cart-btn" onclick="addToCart()">🛒</button>
          </div>
          </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/shirt3.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$105</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/shirt4.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$150</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
          <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
              <img src="../images/shirt4.jpg" alt="Shirt 2" />
              <p class="brand">adidas</p>
              <h4>Cartoon Astronaut T-Shirts</h4>
              <div class="rating">⭐⭐⭐⭐⭐</div>
              <p class="price">$150</p>
              <button class="cart-btn"onclick="addToCart()">🛒</button>
            </div>
            </div>
            </div>
    `,
    "Jeans": `
       <div class="row justify-content-center">
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div class="product-card">
          <img src="../images/jeans1.jpg" alt="Shirt 1" />
          <p class="brand">adidas</p>
          <h4>Cartoon Astronaut T-Shirts</h4>
          <div class="rating">⭐⭐⭐⭐⭐</div>
          <p class="price">$99</p>
          <button class="cart-btn"onclick="addToCart()">🛒</button>
        </div>
        </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/jeans2.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$78</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/jeans3.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$105</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/jeans1.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$150</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/jeans1.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$150</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/jeans1.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$150</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="product-card">
            <img src="../images/jeans1.jpg" alt="Shirt 2" />
            <p class="brand">adidas</p>
            <h4>Cartoon Astronaut T-Shirts</h4>
            <div class="rating">⭐⭐⭐⭐⭐</div>
            <p class="price">$150</p>
            <button class="cart-btn"onclick="addToCart()">🛒</button>
          </div>
          </div>
          
            </div>
            </div>
    `,
    "Shorts": `
      <div class="row justify-content-center">
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div class="product-card">
                <img src="../images/shorts1.jpg" alt="Shorts 1" />
                <p class="brand">Nike</p>
                <h4>Sport Shorts</h4>
                <div class="rating">⭐⭐⭐⭐</div>
                <p class="price">$55</p>
                <button class="cart-btn"onclick="addToCart()">🛒</button>
            </div>
        </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div class="product-card">
                <img src="../images/shorts2.jpg" alt="Shorts 1" />
                <p class="brand">Nike</p>
                <h4>Sport Shorts</h4>
                <div class="rating">⭐⭐⭐⭐</div>
                <p class="price">$55</p>
                <button class="cart-btn"onclick="addToCart()">🛒</button>
            </div>
        </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div class="product-card">
                <img src="../images/shorts3.jpg" alt="Shorts 1" />
                <p class="brand">Nike</p>
                <h4>Sport Shorts</h4>
                <div class="rating">⭐⭐⭐⭐</div>
                <p class="price">$55</p>
                <button class="cart-btn"onclick="addToCart()">🛒</button>
            </div>
        </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div class="product-card">
                <img src="../images/shorts4.jpg" alt="Shorts 1" />
                <p class="brand">Nike</p>
                <h4>Sport Shorts</h4>
                <div class="rating">⭐⭐⭐⭐</div>
                <p class="price">$55</p>
                <button class="cart-btn"onclick="addToCart()">🛒</button>
            </div>
        </div>
        <div class="col-auto col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
            <div class="product-card">
                <img src="../images/shorts5.jpg" alt="Shorts 1" />
                <p class="brand">Nike</p>
                <h4>Sport Shorts</h4>
                <div class="rating">⭐⭐⭐⭐</div>
                <p class="price">$55</p>
                <button class="cart-btn"onclick="addToCart()">🛒</button>
            </div>
        </div>
      </div>
    `
  };

  function updateCategory() {
    categoryName.textContent = categories[currentIndex];
    productGrid.innerHTML = products[categories[currentIndex]];
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + categories.length) % categories.length;
    updateCategory();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % categories.length;
    updateCategory();
  });
});
