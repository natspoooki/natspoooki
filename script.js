const slider = document.getElementById("bpmSlider");
const bpmText = document.getElementById("bpmText");
const heart = document.getElementById("heart");

function updateBPM(bpm) {
  // Since each "badum" is one animation cycle,
  // calculate interval to match bpm (1 beat = 1 badum)
  const duration = (60 / bpm).toFixed(2);
  heart.style.animationDuration = `${duration}s`;
  bpmText.textContent = `BPM: ${bpm}`;
}

slider.addEventListener("input", () => {
  const bpm = slider.value;
  updateBPM(bpm);
});

// Initialize
updateBPM(slider.value);
