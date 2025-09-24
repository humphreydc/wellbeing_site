const clock = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  clock.innerText = time;
}

updateClock();
setInterval(updateClock, 1000);

const recentBtn = document.querySelector(".recent-btn");
const nav = document.querySelector(".nav");
let isOn = true;

function openRecent() {
  if (isOn) {
    nav.style.display = "none";
    isOn = false;
  } else {
    nav.style.display = "flex";
    isOn = true;
  }
}

recentBtn.addEventListener("click", openRecent);
