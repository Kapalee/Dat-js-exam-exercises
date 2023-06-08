"use strict";

// øvelse 14

import { courses } from "./courses.js";

const listSelector = document.querySelector("#course-list");
window.addEventListener("load", start);

function start() {
  sortByStartDate();
  showCourses();
}

function showCourses() {
  listSelector.textContent = "";
  courses.forEach(showCourse);
}

function showCourse(courses) {
  const courseHTML = `<li> ${courses.name}, ${courses.startDate}, ${courses.ectsPoints} pts</li>`;
  listSelector.insertAdjacentHTML("#beforeend", courseHTML);
}

function sortByStartDate() {
  courses.sort((a, b) => a.startDate.localeCompare(b.startDate));
}
