let [seconds, minutes, hours] = [0, 0, 0];
const displayTime = document.querySelector("#displayTime");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const restartBtn = document.querySelector("#restartBtn");
let timer = null;
function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    stopWatch();
  }, 1000);
}
startBtn.addEventListener("click", watchStart);
stopBtn.addEventListener("click", watchStop);

function watchStop() {
  clearInterval(timer);
}

restartBtn.addEventListener("click", watchRestart);

function watchRestart() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime.innerHTML = "00:00:00";
}
