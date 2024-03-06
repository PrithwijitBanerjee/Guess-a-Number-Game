// Targeting the DOM Elements...
const bodyEle = document.body;
const scoreEle = document.querySelector(".score-val");
const highestScoreVal = document.querySelector(".highest-score-val");
const displayEle = document.querySelector(".display-hidden-num");
const submitBtn = document.querySelector(".submit-btn");
const replayBtn = document.querySelector(".again-btn");
const inputEle = document.getElementById("num");
const msgEle = document.querySelector(".output");

// Declaration of variable.....
let score, highestScore, displayValue, secretValue;

const resetValFn = () => {
    // Initialization of variable.....
    score = 20;
    highestScore = 0;
    bodyEle.style.backgroundColor = "rgb(167, 113, 113)";
    displayValue = '?';
    secretValue = Math.trunc(Math.random() * 20) + 1; // generate random number between 1 to 20
    scoreEle.innerText = `${score}`; // DOM Manipulation
    highestScoreVal.innerText = `${highestScore}`; // DOM Manipulation
    displayEle.innerText = displayValue; // DOM Manipulation
    msgEle.innerText = "Guess the Number?";
    msgEle.style.color = "white";
}

// Page refresh or when the page first time loads ...
document.addEventListener("DOMContentLoaded", resetValFn);

replayBtn.addEventListener("click", resetValFn);


submitBtn.addEventListener("click", event => {
    event.preventDefault(); //prevent page refresh ...
    const guess = +(inputEle.value);

    //if user does not enter any guess number ...
    if (!guess) {
        msgEle.innerText = "Please give a number to play!";
        msgEle.style.color = "red";
    } else if (guess === secretValue) {
        msgEle.innerText = "winner! you guess the correct value";
        bodyEle.style.backgroundColor = "green";
        displayEle.innerText = guess;
        if (score > highestScore) {
            highestScore = score;
            highestScoreVal.innerText = score;
        }
    } else if (guess < secretValue) {
        msgEle.innerText = "Too low value! you entered";
        if(score > 1)
        {
            score --;
            scoreEle.innerText = score;
        }else{
            inputEle.value = " ";
            resetValFn();
        }
    } else if (guess > secretValue) {
        msgEle.innerText = "Too high value! you entered";
        if(score > 1)
        {
            score --;
            scoreEle.innerText = score;
        }else{
            inputEle.value = " ";
            resetValFn();
        }
    }else{
        msgEle.innerText = "Sorry you lost!";
    }

})




