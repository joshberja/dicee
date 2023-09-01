// We need a function that generates a random number between 1 and 6
function randomNumberGenerator() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  // We need to return the randomNumber
  return randomNumber;
}

// We need a function that dynamically changes the dice image to the random generated number
function dynamicDiceImage(randomNumber) {
  var diceImageSrc = "./images/dice" + randomNumber + ".png";
  return diceImageSrc;
}

var playerOneNumber = randomNumberGenerator();
var playerTwoNumber = randomNumberGenerator();

// We need to have each player call the dynamicDiceImage source and store it in their respective variables
var playerOneDice = dynamicDiceImage(playerOneNumber);
// console.log("playerOneDice image source: " + playerOneDice);
var playerTwoDice = dynamicDiceImage(playerTwoNumber);
// console.log("playerTwoDice image source: " + playerTwoDice);

// We need to select the dice image tag sources
var playerOneDiceSelect = document.querySelector("img.img1");
var playerTwoDiceSelect = document.querySelector("img.img2");

// We need to change their image sources
playerOneDiceSelect.src = playerOneDice;
// console.log(playerOneDiceSelect.src);
playerTwoDiceSelect.src = playerTwoDice;
// console.log(playerTwoDiceSelect.src);

// We need display the winner
if (playerOneNumber > playerTwoNumber) {
  document.querySelector("h1").innerHTML = "🚩 Player One Wins!";
  console.log("Player One Wins");
} else if (playerOneNumber < playerTwoNumber) {
  document.querySelector("h1").innerHTML = "Player Two Wins! 🚩";
  console.log("Player Two Wins");
} else {
  document.querySelector("h1").innerHTML = "Draw!";
  console.log("Draw");
}