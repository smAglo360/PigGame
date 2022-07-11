'use strict';
const score0Elem = document.getElementById('score--0');
const score1Elem = document.getElementById('score--1');
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');

const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');

const score = [0, 0];

let currentScore = 0;
let activePlayer = 0;

const changeActivePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElem.classList.remove('hidden');
  console.log((diceElem.src = `dice-${dice}.png`));

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    changeActivePlayer();
  }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 0) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer === 0 ? 1 : 0}`)
      .classList.add('hidden');
    document.querySelector('.current-label').textContent = 'Congratulations!';
    document.getElementById(`current--${activePlayer}`).textContent = `Win!`;
    diceElem.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
  } else {
    changeActivePlayer();
  }
});

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector('.current-label').textContent = 'Current';
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;
  currentScore = 0;
  activePlayer = 0;

  player0Elem.classList.remove('hidden');
  player1Elem.classList.remove('hidden');
  player0Elem.classList.add('player--active');
  score[(0, 1)] = 0;
  diceElem.classList.remove('hidden');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
});
