const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// ---------- DOM ----------
const img = document.getElementById("carousel-img");

const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

// ---------- STATE ----------
let currentIndex = 0;
let intervalId = null;

// ---------- HELPERS ----------
function updateImage() {
  img.src = images[currentIndex];
}

function disableAutoButtons() {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
}

function enableAutoButtons() {
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
}

// ---------- LEVEL 1 ----------
forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

backwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// ---------- LEVEL 2 ----------
autoForwardBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  disableAutoButtons();

  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, 2000);
});

autoBackBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  disableAutoButtons();

  intervalId = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, 2000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  enableAutoButtons();
});
