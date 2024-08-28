function replaceName() {
  let name = prompt("What is your name?", "");
  document.getElementById("nama-user").innerHTML = name + ", ";
}
replaceName();
