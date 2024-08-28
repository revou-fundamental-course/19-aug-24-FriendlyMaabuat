function replaceName() {
  let name = prompt("What is your name?", "");
  document.getElementById("nama-user").innerHTML = name + ", ";
}
replaceName();

function updateDateTime() {
  const now = new Date();

  // Format day, date, month, and year
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

  // Format time
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  const dateString = `${dayName}, ${day} ${month} ${year}`;

  document.getElementById(
    "current-time"
  ).textContent = `${dateString} ${timeString}`;
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initialize the date and time when the page loads
window.onload = updateDateTime;
