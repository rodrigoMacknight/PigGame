/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let score, roundScore, dice, currentPlayer;
currentPlayer = 0;
score  = [0,0];



//get the button from dom
const rollBtn = document.querySelector('.btn-roll');

//get the dice placeholder from the DOM
const diceImage = document.querySelector('.dice');
diceImage.style.display = 'none';
rollBtn.onclick = function rollDice(){
    console.log(diceImage);
    dice = Math.floor(Math.random() * 6) + 1;
    diceImage.style.display = 'block';
    diceImage.src = 'dice-' + dice + '.png';
    
};