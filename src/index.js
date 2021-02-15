import './styles.css';


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action=start]');
const stopBtn = document.querySelector('button[data-action=stop]');

let timerIsActive = false;
let timerId = null; 

startBtn.addEventListener('click', () => {
  if (timerIsActive) {
      
        return
  };
  startBtn.setAttribute('disabled', 'disabled')
    timerIsActive = true;
    timerId = setInterval(() => {
    const random = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = colors[random];
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
  timerIsActive = false;
  startBtn.removeAttribute('disabled');
});


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



