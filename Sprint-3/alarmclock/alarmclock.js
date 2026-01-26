let timerId = null;
let remainingSeconds = 0;

function setAlarm() {
  //gathering input vaue
  const input = document.getElementById("alarmSet").value;
  remainingSeconds = Number(input);

  //checking introduced data
  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    return;
  }

  //Update the title immediately
  updateDisplay(remainingSeconds);

  //Clear any existing timer
  if (timerId !== null) {
    clearInterval(timerId);
  }

  //Start countdown
  timerId = setInterval(() => {
    remainingSeconds--;

    updateDisplay(remainingSeconds);

    //When time reaches 0
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      playAlarm();
    }
  }, 1000);
}

// Helper function to update the title
function updateDisplay(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  document.getElementById("timeRemaining").textContent =
    `Time Remaining: ${minutes}:${secs}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
