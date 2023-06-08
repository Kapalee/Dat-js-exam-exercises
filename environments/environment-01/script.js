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

// Øvelse 3

"use strict";

window.addEventListener("load", start);

async function start() {
  console.log("virker");
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
    const html = `
  <li>${user.name}, ${user.active}</li>
  `;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}
