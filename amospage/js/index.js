// script.js

function greetUser() {
  const hour = new Date().getHours();
  let greeting = "Welcome!";
  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  document.getElementById("greeting").textContent = greeting;
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
