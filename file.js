// JS file (e.g., script.js)

// 1. Store the HTML string in a variable
const newCardHTML = `
  <div class="product-card">
    <h3>Product Name</h3>
    <p>A description of the product.</p>
    <button onclick="addToCart(this)">Add to Cart</button>
  </div>
`;

// 2. Get the container element where you want to add the HTML
const container = document.getElementById('app-container');

// 3. Insert the HTML string into the container's DOM
container.innerHTML += newCardHTML;
// OR
// container.insertAdjacentHTML('beforeend', newCardHTML);
