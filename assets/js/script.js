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
if(localStorage['scores']){
    scores = JSON.parse(localStorage.getItem("scores"));
}

function init(){
    playerName = document.getElementById('name').value;
    if (playerName==''){
        document.getElementById('error').parentNode.style.display='block';
        document.getElementById('error').innerHTML="Please Enter a Valid Name!";
    }
    else{
        landingScreen.style.display='none';
        document.getElementById('playerName').innerHTML=playerName+" : ";
        main.style.display='block';
    }
    
}