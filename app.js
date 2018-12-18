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
roundScore = 0;



const player0Score = document.querySelector('#score-0');
const player1Score = document.querySelector('#score-1');


//get the button from dom
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const newGameBtn = document.querySelector('.btn-new');

//get the dice placeholder from the DOM
const diceImage = document.querySelector('.dice');
diceImage.style.display = 'none';
//onClick handler
rollBtn.onclick = function rollDice(){
    //roll number and set dice image
    dice = Math.floor(Math.random() * 6) + 1;
    diceImage.style.display = 'block';
    diceImage.src = 'dice-' + dice + '.png';
    
    if(dice==1){
            //zerando o score do turno atual
            const playerScore  = document.querySelector("#current-" + currentPlayer);
            playerScore.textContent = 0;
            //pass turn
            passTurn();
            //reset score
           
    }else{
        //add dice value to current score
        roundScore+=dice;
        const playerScore  = document.querySelector("#current-" + currentPlayer);
        let currentPlayerScore = Number(playerScore.textContent);
        
        
        playerScore.textContent = currentPlayerScore + dice;
    }
    
};


holdBtn.onclick = function hold(){
    //add amount to current player score
    score[currentPlayer] +=roundScore;

     //update player score
     if(currentPlayer===0){
        player0Score.textContent =score[currentPlayer];
    }else{
        player1Score.textContent =score[currentPlayer];
    }
    const playerScore  = document.querySelector("#current-" + currentPlayer);
    playerScore.textContent = 0;
    
    //pass turn
    passTurn();

    verifyWinCondition();
}

function verifyWinCondition(){
    if(score[0]>=40){
        window.alert('player' + 0 + 'has won');
        newGame();
    }else if(score[1]>=40){
        window.alert('player' + 1 + 'has won');
    }

}

function passTurn(){
   
    if(currentPlayer===0){
        currentPlayer = 1;
        console.log('currentplayer=1');
    }else {
        currentPlayer = 0;
        console.log('currentplayer=0');
    }
    roundScore = 0 ;
}

 function newGame(){
    
    currentPlayer = 0;
    score  = [0,0];
    roundScore = 0;

    const player0CurrentScore  = document.querySelector("#current-0");
    const player1CurrentScore  = document.querySelector("#current-1");


    player0CurrentScore.textContent = 0;
    player1CurrentScore.textContent = 0;

    player0Score.textContent = 0 ;

    player1Score.textContent = 0 ;


}
newGameBtn.onclick  = newGame;