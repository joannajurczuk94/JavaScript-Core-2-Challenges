let randomNumber = Math.floor(Math.random() * 100 + 1);

let finalOutput = document.querySelector(".final-output");
let triesOutput = document.querySelector(".Tries-output");
let newGameButton = document.querySelector(".btnNewGame");
let inputsValues = document.querySelector(".inputs-Values");

triesOutput.innerHTML = "Available number of tries: 7";
let i = 7;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  function decrement() {
    i--;
    triesOutput.innerHTML = "Number of tries left: " + i;

    // The number of tries exceeded
    if (i === 0) {
      triesOutput.innerHTML = "You lose, the number was: " + randomNumber;
      finalOutput.classList.add("d-none");
    }
  }
  decrement();

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess <= 0 || guess > 100 || guess === "") {
    finalOutput.innerHTML = "Please enter a number between 1 and 100";
  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess > randomNumber) {
    finalOutput.innerHTML = "Number is too high, try again";
  }

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    finalOutput.innerHTML = "Number is too low, try again";
  }

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else {
    triesOutput.innerHTML = "It took you " + (7 - i) + " tries.";
    finalOutput.innerHTML = "Guess is Correct. You win!";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  location.reload();
  //Reset users input field
  inputsValues.value = "";
  //Reset tries, and triesTaken by the user
  triesOutput.innerHTML = "Available number of tries: 7";
  finalOutput.innerHTML = "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
