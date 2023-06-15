const dateInput = document.getElementById("date");
const dateTimeInput = document.getElementById("date-time");
const output = document.getElementById("output");
const birthdayButton = document.getElementById("birthday-button");

init();

function showBirthday() {
    e.preventDefault();
}

function init() {
    dateInput.addEventListener("blur", getDate);
}

function getDate(e) {
    let dateString = e.target.value;
    output.innerHTML += `${dateString} <br>`;
    output.innerHTML += `${new Date(dateString)} <br>`;
}