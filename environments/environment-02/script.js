"use strict";

/* 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.
*/
/*
window.addEventListener("load", start);

const animals = [];

function start() {
  console.log("hello");
  document.querySelector("#create-form").addEventListener("submit", formClicked);
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: Number(age),
  };
  animals.push(animal);
  return animal;
}

function formClicked(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;
  createAnimal(name, type, age);
  showAnimal();
  console.log(animals);
}

function showAnimal() {
  document.querySelector("#list-container tbody").innerHTML = "";
  animals.sort((a, b) => a.name.localeCompare(b.name));
  for (const animal of animals) {
    const html = `
    <tr>
    <td>${animal.name}</td>
    <td>${animal.type}</td>
    <td>${animal.age}</td>
    </tr>
    `;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}
*/

// øvelse 5

/* 1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
*/

"use strict";

window.addEventListener("load", start);

const animals = [
  {
    name: "peter",
    type: "cat",
    age: 20,
  },
  {
    name: "søren",
    type: "horse",
    age: 40,
  },

  {
    name: "bendte",
    type: "ulv",
    age: 22,
  },
];
function start() {
  console.log("hello");
  showAnimals();
  document.querySelector("#create-form").addEventListener("submit", formClicked);
}

function showAnimals() {
  document.querySelector("#list-container tbody").innerHTML = "";
  animals.sort((a, b) => a.age - b.age);
  for (const animal of animals) {
    const html = `
  <tr>
  <td> ${animal.age}, ${animal.name}, ${animal.type},  </td>
  </tr>
  `;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}

function formClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;

  const newAnimal = { name, type, age };
  animals.push(newAnimal);
  showAnimals();
}
