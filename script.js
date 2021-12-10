'"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!";
document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = 20;
document.querySelector(".guess").value = "";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const newScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When no input number
  if (!guess) {
    // document.querySelector(".message").textContent = "😈No number!";
    showMessage("😈No number!");
    // When player wins
  } else if (guess === secretNumber) {
    showMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // showMessage = document.querySelector(".message").textContent = message <- input is what we pass into the function
      showMessage(guess > secretNumber ? "🤷‍♂️ Too high!" : "🤦‍♂️ Too low!");
      score--;
      // newScore = document.querySelector('.score).textContent = score <- input is what we pass into the function
      newScore(score);
    } else {
      showMessage("💔 You lost the game!");
      newScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
