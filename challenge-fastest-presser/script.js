// const { Console } = require("console");
// const { writeHeapSnapshot } = require("v8");

// function startGame() {}

// function keyBoardEvents(e) {
//   if (e.keyCode === 83) {
//     // On 'S' Pressed
//   } else if (e.keyCode === 76) {
//     // On 'L' Pressed
//   }
// }

// document.addEventListener("keypress", keyBoardEvents);

let input = document.getElementById("second-input");
let startGameButton = document.getElementById("start-game-button");
let resetGameButton = document.getElementById("reset-btn");
let timeHeader = document.getElementById("time-header");
let timeRemainingElement = document.getElementById("time-remaining");
let playerS = document.getElementById("player-s");
let playerL = document.getElementById("player-l");

let counterL = 0;
let counterS = 0;

let timeRemaining;

let gameStarts = false;

startGameButton.addEventListener("click", function (event) {
  if (!input.value) {
    return alert("Please pick a game time");
  }
  timeHeader.classList.remove("d-none");

  gameStarts = true;
  let gameTime = input.value * 1000;

  timeRemaining = gameTime;

  //Seconds Units
  timeRemainingElement.innerHTML = `${timeRemaining / 1000}`;

  let countDownInterval = setInterval(function () {
    timeRemaining -= 1000;
    timeRemainingElement.innerHTML = `${timeRemaining / 1000}`;

    if (timeRemaining === 0) {
      clearInterval(countDownInterval);
    }
  }, 1000);

  setTimeout(function () {
    gameStarts = false;

    if (counterL > counterS) {
      alert(`Time's Up! Player L wins, with a score of ${counterL}`);
    } else if (counterL < counterS) {
      alert(`Time's Up! Player S wins, with a score of ${counterL}`);
    } else {
      alert(`It's a draw, with a score of ${counterL}`);
    }

    resetGameButton.classList.remove("d-none");
    startGameButton.classList.remove("d-none");
  }, gameTime);
});

resetGameButton.addEventListener("click", function (event) {
  input.value = "";
  playerL.innerHTML = "Score: 0";
  playerS.innerHTML = "Score: 0";

  resetGameButton.classList.add("d-none");
  startGameButton.classList.remove("d-none");
  timeHeader.classList.add("d-none");
});

document.addEventListener("keypress", onKeypress);

function onKeypress(event) {
  if (!gameStarts) {
    return;
  }

  if (event.key.toLowerCase() === "s") {
    playerS.innerHTML = "Score: " + ++counterS;
    console.log(`S Score: ${counterS}`);
  } else if (event.key.toLowerCase() === "l") {
    playerL.innerHTML = "Score: " + ++counterL;
    console.log(`L Score: ${counterL}`);
  } else {
    console.log("Read the instruction");
  }
}

let confettiSettings = { targer: "my-canvas" };
let confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
