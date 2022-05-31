const cart = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
const closeBtn = document.querySelector("#close-btn");
const addToCart = document.getElementsByClassName("add-to-cart");
const productRows = document.getElementsByClassName("product-row");

//APERTURA DE CARRITO
cart.addEventListener("click", () => {
  cartModalOverlay.classList.add("open");
});

//CIERRE CARRITO
closeBtn.addEventListener("click", () => {
  cartModalOverlay.classList.remove("open");
});
cartModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-modal-overlay")) {
    cartModalOverlay.classList.remove("open");
  }
});

for (let i = 0; i < addToCart.length; i++) {
  let boton = addToCart[i];
  boton.addEventListener("click", agregarCarrito);
}

function agregarCarrito(e) {
  let boton = e.target;
  let cartItem = boton.parentElement;
  let prodId = cartItem.getAttribute("id");
  let prodName = cartItem.querySelector("h3").innerText;
  let price = cartItem.querySelector(".product-price").innerText;
  let imageSrc = cartItem.querySelector(".product-image").src;

  agregarElem(prodId, prodName, price, imageSrc);
}

function agregarElem(prodId, prodName, price, imageSrc) {
  let productRow = document.createElement("div");
  let productRows = document.querySelector(".product-rows");
  let prodArray = document.getElementsByClassName("product-row");

  for (let i = 0; i < prodArray.length; i++) {
    if (prodArray[i].getAttribute("id") == prodId) {
      alert("Este producto ya existe en el carrito");
      return;
    }
  }

  //INCORPORAR HTML
  let cartRowItem = `
      <div class="product-row" id="${prodId}">
          <img class="cart-image" src="${imageSrc}">
          <span>${prodName}</span>
          <span class="cart-price">${price}</span>
          <input class="product-quantity" type="number" value="1">
          <button class="remove-btn">Borrar</button>
      </div>
  `;
  productRow.innerHTML = cartRowItem;
  productRows.append(productRow);
  productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
  productRow
    .querySelector(".product-quantity")
    .addEventListener("change", cambiarCantidad);
  updatePrice();
}

function removeItem(e) {
  let btnCliked = e.target;
  btnCliked.parentElement.parentElement.remove();
  updatePrice();
}

function cambiarCantidad(e) {
  let cantidad = e.target.value;
  if (isNaN(cantidad) || cantidad <= 0) {
    cantidad = 1;
  }
  updatePrice();
}

function updatePrice() {
  let total = 0;
  for (const producto of productRows) {
    let price = parseFloat(
      producto.querySelector(".cart-price").innerText.replace("$", "")
    );
    let cantidad = producto.querySelector(".product-quantity").value;
    total += price * cantidad;
  }
  document.querySelector(".total-price").innerText = "$" + total;
  document.querySelector(".cart-quantity").textContent = productRows.length;
}
