/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice, lastDice1, lastDice2, dice1, dice2, totalDice;


init();


function twoSixCheck(){
    // lastDice1 = dice1;
    // lastDice2 = dice2;
    //
    // if((dice1 === 6 && lastDice1 === 6) || (dice2 === 6 && lastDice2 === 6)){
    //     //Player loses score
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     nextPlayer();
    // }else
    if(dice1 !== 1 && dice2 !== 1){
      //Add score
      roundScore += totalDice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
      //nextPlayer
      nextPlayer();
    }
     // lastDice = totalDice;
}

document.querySelector('.btn-roll').addEventListener('click' ,function(){
    if(gamePlaying){
    //1. Random number
      dice1 = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. display the result
     var diceDOM = document.querySelector('.dice1');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice1 + '.png';

     var diceDOM = document.querySelector('.dice2');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice2 + '.png';

     totalDice = (dice1 + dice2);

    //3. Update the round score only if the rolled # was NOT a 1
      twoSixCheck();
  }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){

    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

     var input = document.getElementById('winningNum').value;
     var winningScore;
    //undefined, 0, null or == are COERCED to false
    //anything else is COERCED to true
    if(input){
         winningScore = input;
    }else{
      winningScore = 100;
    }

    // Check if player won the game
    if(scores[activePlayer] >= winningScore){
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice1').style.display = 'none';
      document.querySelector('.dice2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }else{
      //nextPlayer
      nextPlayer();
    }
  }
});


function nextPlayer(){
  //Next player goes
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');


  //document.querySelector('.player-0panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  winningScore =  document.getElementById('winningNum').value = "";

  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player1';
  document.getElementById('name-1').textContent = 'Player2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}
// document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x =  document.querySelector('#score-0').textContent;
