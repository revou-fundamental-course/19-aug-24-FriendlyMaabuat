function promptForName() {
  let name = localStorage.getItem("userName");
  if (!name) {
    name = prompt("What is your name?", "");
    if (name) {
      localStorage.setItem("userName", name);
    } else {
      name = "Guest";
    }
  }
  document.getElementById("nama-user").textContent = name + ", ";
}

function updateDateTime() {
  const now = new Date();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = dayNames[now.getDay()];
  const day = String(now.getDate()).padStart(2, "0");
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  document.getElementById(
    "current-time"
  ).textContent = `${dateString} ${timeString}`;
}

setInterval(updateDateTime, 1000);

window.onload = function () {
  updateDateTime();
  promptForName();
};

function validateForm(event) {
  event.preventDefault();

  const form = document.forms["message-form"];
  const name = form["full-name"].value;
  const birthDate = form["dob"].value;
  const gender = form["gender"].value;
  const message = form["message"].value;

  if (name === "" || birthDate === "" || gender === "" || message === "") {
    alert("Please fill out all the form fields.");
    return false;
  }

  setSenderUI(name, birthDate, gender, message);

  return false;
}

function setSenderUI(name, birthDate, gender, message) {
  document.getElementById("sent-full-name").textContent = name;
  document.getElementById("sent-dob").textContent = birthDate;
  document.getElementById("sent-gender").textContent = gender;
  document.getElementById("sent-message").textContent = message;
}

document.forms["message-form"].addEventListener("submit", validateForm);
