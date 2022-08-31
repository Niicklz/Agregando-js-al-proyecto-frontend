const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu");
const carritoCompra = document.querySelector(".navbar-shopping-cart");
const detallesCompra = document.querySelector(".product-detail");
const detallesCompra2 = document.querySelector(".product-detail2");
const flechita = document.querySelector(".flecha");
const cardsContainer = document.querySelector(".cards-container");
const precioProducto = document.querySelector(".price");
const nombreProducto = document.querySelector(".model");
const cerrarDetalles = document.querySelector(".product-detail-close");

cerrarDetalles.addEventListener("click", closeDetailTab);

function closeDetailTab() {
  detallesCompra2.classList.add("inactive");
}

emailMenu.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  detallesCompra.classList.add("inactive");
  detallesCompra2.classList.add("inactive");
}

menuIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  menuMobile.classList.toggle("inactive");
  detallesCompra.classList.add("inactive");
  detallesCompra2.classList.add("inactive");

  console.log("click");
}

carritoCompra.addEventListener("click", toggleCompras);

function toggleCompras() {
  detallesCompra.classList.toggle("inactive");
  menuMobile.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  detallesCompra2.classList.add("inactive");
}

flechita.addEventListener("click", toggleR);

function toggleR() {
  detallesCompra.classList.add("inactive");

  console.log("clickazo");
}

const productosLista = [];

productosLista.push({
  nombre: "Bici",
  precio: 130,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productosLista.push({
  nombre: "Carro",
  precio: 150,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
  nombre: "Moto",
  precio: 170,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
  nombre: "Camion",
  precio: 330,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
  nombre: "Avion",
  precio: 530,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
  nombre: "Bici",
  precio: 130,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productosLista.push({
  nombre: "Carro",
  precio: 150,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
  nombre: "Moto",
  precio: 170,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
  nombre: "Camion",
  precio: 330,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productosLista.push({
  nombre: "Avion",
  precio: 530,
  imagen:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

console.log(productosLista);

productosLista.forEach((producto) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imgProduct = document.createElement("img");
  imgProduct.setAttribute("src", producto.imagen);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productDetail = document.createElement("div");

  const productName = document.createElement("p");
  productName.innerText = producto.nombre;

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + producto.precio;

  const figureCart = document.createElement("figure");

  const imgCart = document.createElement("img");
  imgCart.setAttribute("src", "/icons/bt_add_to_cart.svg");

  figureCart.appendChild(imgCart);
  productInfo.append(productDetail, figureCart);
  productDetail.append(productPrice, productName);

  productCard.append(imgProduct, productInfo);

  cardsContainer.appendChild(productCard);
  productCard.addEventListener("click", showDetails);

  function showDetails() {
    console.log(producto.nombre);
    detallesCompra2.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    detallesCompra.classList.add("inactive");
    menuMobile.classList.add("inactive");
    precioProducto.innerText = producto.precio;
    nombreProducto.innerText = producto.nombre;
  }
});
