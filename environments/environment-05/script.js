// øvelse 11

/*
"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log("loooggg");
  addNewCourse();
  showCourses();
}

function showCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    const html = `
    <li>${course.name}, ${course.ectsPoints}, ${course.startDate}</li>
    `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function addNewCourse() {
  const newCourse = {
    name: "peter lund",
    startDate: "2024-09-01",
    endDate: "2025-01-31",
    ectsPoints: 20,
    maxStudents: 2,
    teacher: "Peter Lind",
  };

  courses.push(newCourse);
  console.log(courses);
  return newCourse;
}

*/

// øvelse 12

/*
"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log("welcome");
  sortByEctsPoints();
  showCourses();
}

function showCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    const html = `
    <li> ${course.name}, ${course.ectsPoints}</li>
    `;
    document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortByEctsPoints() {
  courses.sort((b, a) => a.ectsPoints - b.ectsPoints);
}

*/

"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);
const listSelector = document.querySelector("#courses¨-list");

function start() {
  document.querySelector("#select-filter-ects").addEventListener("change", filterChanged);
  showCourses(courses);
}

function showCourses(list) {
  listSelector.textContent = "";
  for (const course of courses) {
    const courseHTML = `
  <li>${course.name}, ${course.ectsPoint}</li>
  `;
    listSelector.insertAdjacentHTML("beforeend", courseHTML);
  }
}

function filterChanged(event) {
  console.log(event.target.value);
  showCourses(courses.filter(a => a.ectsPoints === Number(event.target.value)));
}
