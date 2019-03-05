let score = [0,0];
let activePlayer = 0;
let current = 0;
init();

document.querySelector(".btn-roll").addEventListener("click",rollDice);
document.querySelector(".btn-new").addEventListener("click",function(){
    location.reload();
});
//document.getElementById('score-0').addEventListener('change',function(){
//   console.log('score changed'); 
//});
//console.log(document.getElementsByClassName('player-score'));

document.querySelector(".btn-hold").addEventListener("click",holdEventHandler);
function holdEventHandler(){
    //if hold is pressed change the active state and add current to score
    updateScore();
    current = 0;
    toggleActiveClass();
//        document.getElementById(`current-${activePlayer}`).textContent = '0';

     document.getElementById("current-0").textContent = '0';
     document.getElementById("current-1").textContent = '0';
    
}

function updateScore(){
    //update score array
//        console.log(activePlayer);
//        console.log(current);
//        console.log(score[activePlayer]);
        score[activePlayer] += current;
     //update the score of the current player
        document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];
     //also check value of score
    
    //if greater or equal to 100 return the winner state by activatin 
    if(score[activePlayer] >= 100){
        console.log(activePlayer +"wins");
        document.querySelector('.player-0-panel').classList.add('winner');
        //do the winnings
        document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
        //hide dice
        document.querySelector(".dice").style.display ="none";
        //remove event handler from roll dice
        document.querySelector(".btn-roll").removeEventListener("click",rollDice);
        // remove event handler from hold btn
        document.querySelector(".btn-hold").removeEventListener("click",holdEventHandler);

    }
    
    
}
function rollDice(){
    //generate random number
    let randNum = Math.floor((Math.random()*6)+1);
    document.getElementById(`current-${activePlayer}`).textContent = '0';
    //change the dice image plus unhide it
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src=`dice-${randNum}.png`
    //if dice number is other than 1 add it to current score
    if(randNum !== 1){
        current += randNum;
        document.getElementById(`current-${activePlayer}`).textContent = current;
    }else{
        updateScore();
        current = 0;
        toggleActiveClass();
    }
    

}

function init(){//start new game from here
    //hide the dice
    document.querySelector(".dice").style.display ="none";
    //get current to zero
     document.getElementById("current-0").textContent = '0';
     document.getElementById("current-1").textContent = '0';
    //set scores of both players to zero
     document.getElementById("score-0").textContent = '0'; 
     document.getElementById("score-1").textContent = '0';
    //set current and scores to zero
}
function toggleActiveClass(){
    //change the active state
        activePlayer == 0 ?activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}
