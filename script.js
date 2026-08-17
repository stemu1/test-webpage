let clicks = 0;
const countEl = document.getElementById("count");
const button = document.getElementById("clickMe");
const resetButton = document.getElementById("resetCount");

button.addEventListener("click", () => {
  clicks += 1;
  countEl.textContent = clicks;
});

resetButton.addEventListener("click", () => {
  clicks = 0;
  countEl.textContent = clicks;
});
