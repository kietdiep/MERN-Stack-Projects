"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

function secretNum() {
  const number = Math.trunc(Math.random() * 20) + 1;
  return number;
}

function gameLost() {
  document.querySelector(".message").textContent = "You have lost the game";
  document.querySelector("body").style.backgroundColor = "#FF0000";
  document.querySelector(".score").textContent = 0;
}

function decScore() {
  score--;
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === number) {
    highscore = highscore + 10;
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      decScore();
    } else {
      gameLost();
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      decScore();
    } else {
      gameLost();
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Guess My Number!";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  number = secretNum();
  console.log(number);
});
