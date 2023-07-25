const btnStart = document.querySelector('button[data-start]');
//console.log(btnStart)
const btnStop = document.querySelector('button[data-stop]');
//console.log(btnStop)

let switchBg = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  switchBg = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(switchBg);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
