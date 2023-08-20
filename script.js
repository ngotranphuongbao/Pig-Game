"use strict";
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add("hidden");

let scores;
let current;
let player;

//Function Declaration 
const newGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add("hidden");
  scores = [0, 0];
  current = 0;
  player = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
};

const changePlayer = function () {
  document.querySelector(`#current--${player}`).textContent = 0;
  current = 0;
  player = 1 - player;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

//Game Initialization
newGame();

//Roll Dice Functionality
btnRoll.addEventListener("click", function () {
  if (scores[0] < 100 && scores[1] < 100) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      current += diceNumber;
      document.querySelector(`#current--${player}`).textContent = current;
    } else {
      changePlayer();
    }
  }
});

//Hold Functionality
btnHold.addEventListener("click", function () {
  if (scores[0] < 100 && scores[1] < 100) {
    scores[player] += current;
    document.querySelector(`#score--${player}`).textContent = scores[player];
    if (scores[player] >= 100) {
      document
        .querySelector(`.player--${player}`)
        .classList.add("player--winner");
    }
    changePlayer();
  }
});

//New Game Functionality
btnNew.addEventListener("click", newGame);
