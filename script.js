

var dice = document.querySelector(".dice");
var rollbtn = document.querySelector(".btn-roll");
var btnHold = document.querySelector(".btn-hold");
var finalScoreInput = document.querySelector(".final-score");

var currentScore = 0;
var activePlayer = 0;
var activePlayerPanel =  document.querySelector(".player-0-panel");
var score = [0,0]
var finalscore;
var gameStatus = false;

function next(){
    currentScore = 0;
        activePlayerPanel.querySelector(".player-current-score").textContent = 0;
        activePlayerPanel.classList.remove("active");
        activePlayer = activePlayer ? 0 : 1;

        activePlayerPanel = document.querySelector(".player-"+ activePlayer+"-panel");
        activePlayerPanel.classList.add("active");
}

rollbtn.addEventListener("click", function(){
    finalscore = finalScoreInput.value;
    if (finalscore){
        gameStatus = true;
        finalScoreInput.disabled = true;
        var randomNum = Math.floor(Math.random()*6)+1;
    dice.src = "img/dice-" + randomNum +".png";

        if (randomNum !== 1){
            currentScore += randomNum;
            activePlayerPanel.querySelector(".player-current-score").textContent = currentScore;
        }else{
        //next
        next()
        }
    }else{
        finalScoreInput.focus();
        finalScoreInput.placeholder = "Please Insert Winner Score"
    }

    
}); 

btnHold.addEventListener("click",function(){
    if(gameStatus){
        score[activePlayer]+= currentScore;
        activePlayerPanel.querySelector(".player-score").textContent = score[activePlayer];
        if(score[activePlayer]>=20){
            //winner
            activePlayerPanel.classList.remove("active");
            activePlayerPanel.classList.add("winner");
            activePlayerPanel.querySelector(".player-name").textContent = "winner!!!"
            gameStatus = false;
        }else{  
            //next
            next()
        }

    }else{

    }
    })