let score = [0,0];
let activePlayer = 0;
let current = 0;
init();

document.querySelector(".btn-roll").addEventListener("click",rollDice);
document.querySelector(".btn-new").addEventListener("click",init);

document.querySelector(".btn-hold").addEventListener("click",holdEventHandler);
function holdEventHandler(){
//if hold is pressed change the active state and add current to score
//also check value of score
//if greater or equal to 100 return the winner state by activatin 
//winner class and also calling the init function
    
}


function rollDice(){
    //generate random number
    let randNum = Math.floor((Math.random()*6)+1);
    
    //change the dice image plus unhide it
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src=`dice-${randNum}.png`
    
    //get current score of both players
    
    let current1 = document.getElementById("current-1");
    
    if(randNum !== 1){
        current += randNum;
//        document.getElementById("current-0").textContent = current;
    }else{
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
//        activePlayer = 1;
//        console.log(activePlayer);
    }
    current0 = document.getElementById("current-0");
//    console.log(current0.textContent+randNum);


}

function init(){
    //hide the dice
    document.querySelector(".dice").style.display ="none";
    //get current and scores
    let current0 = document.getElementById("current-0");
    let current1 = document.getElementById("current-1");
    let score0 = document.getElementById("score-0");
    let score1 = document.getElementById("score-1");
    //set current and scores to zero
    current0.textContent = '0';
    current1.textContent = '0';
    score0.textContent = '0';
    score1.textContent = '0';
}