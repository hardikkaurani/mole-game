const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');

let activeMole = null;
let score = 0;
let gameInterval = null;

function startGame() {
  score = 0;
  scoreDisplay.textContent = 'Score: ' + score;
  message.textContent = '';
  clearInterval(gameInterval);
  if (activeMole) activeMole.classList.remove('active');
  activeMole = null;

  gameInterval = setInterval(() => {
    if (activeMole) activeMole.classList.remove('active');
    const randomIndex = Math.floor(Math.random() * moles.length);
    activeMole = moles[randomIndex];
    activeMole.classList.add('active');
  }, 1000);
}

function winGame() {
  clearInterval(gameInterval);
  message.textContent = '🎉 You win!';
  if (activeMole) activeMole.classList.remove('active');
  activeMole = null;
}

moles.forEach(mole => {
  mole.addEventListener('click', () => {
    if (mole === activeMole) {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
      mole.classList.remove('active');
      activeMole = null;
      if (score === 5) winGame();
    }
  });
});

restartBtn.addEventListener('click', startGame);

// start automatically when page loads
startGame();
