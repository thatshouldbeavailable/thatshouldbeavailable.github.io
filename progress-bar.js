// Check if global variables are defined; if not, set defaults
const effectiveLaunchDate = typeof launchDate !== 'undefined' ? launchDate : new Date("2024-10-14T00:00:00");
const effectiveArrivalDate = typeof arrivalDate !== 'undefined' ? arrivalDate : new Date("2030-04-01T00:00:00");

// Calculate the total time from launch to arrival
const totalTime = effectiveArrivalDate - effectiveLaunchDate;

// Update the progress bar and timer
function updateProgressAndTimer() {
  const now = new Date();

  // Calculate elapsed time
  const elapsedTime = now - effectiveLaunchDate;

  // Calculate progress percentage
  const progressPercentage = Math.min((elapsedTime / totalTime) * 100, 100).toFixed(2);

  // Update progress bar
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.textContent = `${progressPercentage}%`;

  // Calculate remaining time
  const remainingTime = effectiveArrivalDate - now;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Update timer
    const timer = document.getElementById("timer");
    timer.textContent = `Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  } else {
    const timer = document.getElementById("timer");
    timer.textContent = "Mission has arrived!";
  }
}

// Update every second
setInterval(updateProgressAndTimer, 1000);

// Initial update
updateProgressAndTimer();
