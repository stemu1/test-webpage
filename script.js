let clicks = 0;
const countEl = document.getElementById("count");
const button = document.getElementById("clickMe");

button.addEventListener("click", () => {
  clicks += 1;
  countEl.textContent = clicks;
});
