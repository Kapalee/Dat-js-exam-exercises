//                                       øvelse 9
/*
"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  console.log("hello");
  showTeachers();
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachers) {
    const html = `
  <li> ${teacher.name}, ${teacher.email}</li>
  `;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortByName() {
  teachers.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByEmail() {
  teachers.sort((a, b) => a.email.localeCompare(b.email));
}
*/

//                                        øvelse 10

"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  console.log("godmorgen");
  addNewTeacher();
  showTeachers();
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachers) {
    const html = `
    <li> ${teacher.name}, ${teacher.email}</li>
    `;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

function addNewTeacher() {
  const newTeacher = {
    name: "peter",
    email: "søren@hotmail.com",
  };

  teachers.push(newTeacher);
  console.log(teachers);
  return newTeacher;
}
