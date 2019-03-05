let score = [0,0];  //score[0] is player1 and score[1] is player 2
let activePlayer = 0;   // can be 0 or 1
let current = 0;

//method to start the game
init();
//handler for roll btn
document.querySelector(".btn-roll").addEventListener("click",rollDice);
//handler for new btn
document.querySelector(".btn-new").addEventListener("click",function(){
    location.reload();
});
//hold btn handler
document.querySelector(".btn-hold").addEventListener("click",holdEventHandler);

function holdEventHandler(){
    //if hold is pressed change the active state and add current to score
    updateScore();
    current = 0;
    //if greater or equal to 100 return the winner state by activatin 
    if(score[activePlayer] >= 20){
        console.log(activePlayer +"wins");
        //remove active class
        document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
        //change player name to 'Winner!'
        document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
        //add winner class
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        //hide dice
        document.querySelector(".dice").style.display ="none";
        //remove handlers
        removeHandler();
        
    }else{
        toggleActiveClass();
    }
    //set current to zero    
    currentToZero();
    
}

function updateScore(){
    //update score array with respective player
        score[activePlayer] += current;
     //update the score of the current player
        document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];
}
function rollDice(){
    //generate a random number
    let randNum = Math.floor((Math.random()*6)+1);
    
    //change the value of current of the active player to zero
    document.getElementById(`current-${activePlayer}`).textContent = '0';
    
    //change the dice image plus display(unhide) it
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src=`dice-${randNum}.png`
    
    //if dice number is other than 1 add it to current score
    if(randNum !== 1){
        current += randNum;
        document.getElementById(`current-${activePlayer}`).textContent = current;
    }else{
        toggleActiveClass();
    }
}

function init(){//start new game from here
    //hide the dice
    document.querySelector(".dice").style.display ="none";
    //set current to zero
    currentToZero();
    //set scores of both players to zero
     document.getElementById("score-0").textContent = '0'; 
     document.getElementById("score-1").textContent = '0';
}
function currentToZero(){
    //set current to zero
    document.getElementById("current-0").textContent = '0';
     document.getElementById("current-1").textContent = '0';
}
function toggleActiveClass(){
    //change the active state
        activePlayer == 0 ?activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}
function removeHandler(){
    //remove event handler from roll dice
        document.querySelector(".btn-roll").removeEventListener("click",rollDice);
        // remove event handler from hold btn
        document.querySelector(".btn-hold").removeEventListener("click",holdEventHandler);
}
