const playerScoreBox = document.getElementById('playerScore');
const computerScoreBox = document.getElementById('computerScore');
const resultBox = document.getElementById('result');
const options = document.getElementsByClassName("option");
const main = document.getElementById('main');
const scoreBoard = document.getElementById('scoreboard');
const landingScreen = document.getElementById('landing-screen');
const gameScoreBoard = document.getElementById('gameScore');
const choices = ["rock", "paper", "scissors"];
var playerChoice = null;
var computerChoice = null;
var computerScore = 0;
var playerScore = 0;
var playerName = null;
var rounds = 10;
var scores = new Array();
if (localStorage['scores']) {
    scores = JSON.parse(localStorage.getItem("scores"));
}

function init() {
    playerName = document.getElementById('name').value;
    if (playerName == '') {
        document.getElementById('error').parentNode.style.display = 'block';
        document.getElementById('error').innerHTML = "Please Enter a Valid Name!";
    } else {
        landingScreen.style.display = 'none';
        document.getElementById('playerName').innerHTML = playerName + " : ";
        main.style.display = 'block';
    }

}

function play() {
    let userInput = document.getElementsByClassName('option');
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].style.borderColor == 'red') {
            playerChoice = userInput[i].id;
            computeResults();
            return;
        }
    }
}

var selectedOption = function () {
    resetRound();
    this.style.borderColor = 'red';
    this.style.boxShadow = '0 0 10px rgb(255, 0, 0)';
    play();
};

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', selectedOption, false);
}

function computeResults() {
    getComputerChoice();
    resultBox.parentNode.style.display = 'block';
    if (computerChoice === playerChoice) {
        resultBox.innerHTML = "Game Drawn!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            resultBox.innerHTML = "Computer \"" + computerChoice + "\" Wins!";
            computerScoreBox.innerHTML = ++computerScore;
        } else {
            resultBox.innerHTML = "Player \"" + playerChoice + "\" Wins!";
            playerScoreBox.innerHTML = ++playerScore;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            resultBox.innerHTML = "Computer \"" + computerChoice + "\" Wins!";
            computerScoreBox.innerHTML = ++computerScore;
        } else {
            resultBox.innerHTML = "Player \"" + playerChoice + "\" Wins!";
            playerScoreBox.innerHTML = ++playerScore;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            resultBox.innerHTML = "Computer \"" + computerChoice + "\" Wins!";
            computerScoreBox.innerHTML = ++computerScore;
        } else {
            resultBox.innerHTML = "Player \"" + playerChoice + "\" Wins!";
            playerScoreBox.innerHTML = ++playerScore;
        }
    }
    --rounds;

    if (rounds > 0) {
        document.getElementById('round').innerHTML = rounds;
    } else {
        document.getElementById('round').innerHTML = rounds;
        scores.push(new Array(playerName, playerScore, computerScore));
        localStorage.setItem("scores", JSON.stringify(scores));
        showScores();
    }
}