"use strict";

// øvelse 6

/* 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
*/

window.addEventListener("load", start);

const products = [
  {
    name: "peter",
    price: 8,
    inStock: true,
  },
  {
    name: "alladhin",
    price: 2,
    inStock: true,
  },
  {
    name: "al-sheik",
    price: 22,
    inStock: false,
  },
];

function start() {
  console.log("hello");
  showProducts();
  document.querySelector("#create-form").addEventListener("submit", addFormula);
}

function showProducts() {
  document.querySelector("#list-container").innerHTML = "";
  for (const product of products) {
    if (product.inStock === true) {
      const html = `<li>${product.name}, ${product.price}, ${product.inStock}</li>`;
      document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
    }
  }
}

function addProduct(name, price, inStock) {
  const product = { name: name, price: Number(price), inStock: inStock };
  products.push(product);
  console.log(products);
}

function addFormula(event) {
  event.preventDefault();
  const form = event.target;

  const name = form.name.value;
  const price = form.price.value;
  const inStock = form.inStock.checked;

  addProduct(name, price, inStock);
  showProducts();
}
