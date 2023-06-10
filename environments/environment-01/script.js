/*
Øvelse 2

"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("heya");
  const userData = await getUsers();
  showUsers(userData);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers(userData) {
  document.querySelector("#userlist").innerHTML = "";
  for (const user of userData) {
    const html = `<li>${user.name}, ${user.role} </li>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
  countUsers(userData);
}

function countUsers(userData) {
  let adminCount = 0;
  let userCount = 0;
  let guestCount = 0;

  for (const user of userData) {
    if (user.role === "admin") {
      adminCount++;
    } else if (user.role === "user") {
      userCount++;
    } else if (user.role === "guest") {
      guestCount++;
    }
  }
  document.querySelector("#admin-count").textContent = adminCount;
  document.querySelector("#user-count").textContent = userCount;
  document.querySelector("#guest-count").textContent = guestCount;
} */

// Øvelse 4

/* 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
*/

"use strict";

window.addEventListener("load", start);

let userData = [];

async function start() {
  userData = await getUsers();
  showUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers() {
  document.querySelector("#userlist").innerHTML = "";
  for (const user of userData) {
    if (user.active === true) {
      const html = `
      <li> ${user.name} </li>
      `;
      document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
  }
}

function createUsers(name, active, role, id) {
  const newUser = {
    id: id,
    name: name,
    active: active,
    role: role,
  };
  userData.push(newUser);
  console.log(userData);
  return newUser;
}

