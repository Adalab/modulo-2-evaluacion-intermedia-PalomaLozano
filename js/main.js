'use strict';

const numberX = document.querySelector('.js_number');

const button = document.querySelector('.js_button');

const clue = document.querySelector('.js_clue');

const attempsEl = document.querySelector('.js_chances');

let attemps = 0;

const numberResult = getRandomNumber(100);

const form = document.querySelector('.js-form');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(numberResult);

function writeClue(message) {
  clue.innerHTML = message;
}

function game() {
  const numberUser = parseInt(numberX.value);

  if (numberUser <= 0 || numberUser > 100) {
    writeClue('👁‍🗨 The number must be between 1 and 100 👁‍🗨');
  } else if (numberUser > numberResult) {
    writeClue('👆 Too high 👆');
  } else if (numberUser < numberResult) {
    writeClue('👇 Too low 👇');
  } else if (numberUser === numberResult) {
    writeClue('🥇 You win, champion!!! 🥇');
  } else {
    writeClue('👽 Must put a number 👽');
  }
}

function counter() {
  attemps = attemps + 1;
  attempsEl.value = `Number of attemps: ${attemps}`;
}

function handleButton(ev) {
  game();
  counter();
  btnRandom();
}

function handleSubmit(ev) {
  ev.preventDefault();
}

button.addEventListener('click', handleButton);

form.addEventListener('submit', handleSubmit);

//randomColor

const btn = document.querySelector('.randomColor');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function btnRandom() {
  const rndCol =
    'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
