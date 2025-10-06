const targetDate = new Date();

targetDate.setDate(targetDate.getDate() + 5);

const daysEl = document.getElementById("timer-days");
const hoursEl = document.getElementById("timer-hours");
const minutesEl = document.getElementById("timer-minutes");
const secondsEl = document.getElementById("timer-seconds");
const countdownContainer = document.querySelector(".countdown-timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownContainer.innerHTML = "Deal Ended";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);
  const formatTime = (time) => String(time).padStart(2, "0");

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(secs);
}

const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown();
