

                                                                            //øvelse 21
/* 
1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
2. Lav en anden funktion til at vise listen på websiden, men undlad eventuelle students der er under 18 år.
3. Sortér listen alfabetisk efter `name`.*/

"use strict";


window.addEventListener("load", start)

const students = []

function start(){
    console.log("herro");
    document.querySelector("#create-student-form").addEventListener("submit", formSubmitted)
    showStudens()
}


function createNewStudent(name, email, age){
    const newStudent = {
        name: name,
        email: email,
        age: Number(age),
    }

    students.push(newStudent)
    return newStudent;
}

function formSubmitted(event){
event.preventDefault()
const form = event.target
const name = form.name.value
const email = form.email.value
const age = form.age.value

createNewStudent(name, email, age)
showStudens()
console.log(students);
}


function showStudens(){
    document.querySelector("#students-table-body").innerHTML=""
    //const filteredStudents = filterByAge()
    for(const student of students){
    if (student.age >= 18){
        const html = 
        `
        <li>${student.name}, ${student.email}, ${student.age} <button> Slet </button></li>
        `
        document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html)
    }
}
}

//function filterByAge(){
   // return students.filter((student) => student.age >= 18)
    
//}