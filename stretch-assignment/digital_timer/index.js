const timerElement = document.querySelector(".digits"); 
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");
const timerButton = document.getElementById("start-timer");

let totalMiliseconds = 0;
let milisecondsTens = 0;
let milisecondsHundreds = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;
    function startTimer(){
    let timer = window.setInterval(()=>{
        if(totalMiliseconds >= 10000) {
            clearInterval(timer);
            timerElement.style.color = "red";
            return;
        }
        if(milisecondsTens >= 9){
            milisecondsTens = 0;
            milisecondsHundreds++;
        }else  ++milisecondsTens;
        if(milisecondsHundreds >= 10){
            milisecondsHundreds = 0;
            secondOnesCounter++;
        }
        if(secondOnesCounter >= 10){
            secondOnesCounter = 0;
            secondTensCounter++;
        }
        msTens.textContent = milisecondsTens;
        msHundreds.textContent = milisecondsHundreds;
        secondOnes.textContent = secondOnesCounter;
        secondTens.textContent = secondTensCounter;
        totalMiliseconds += 10;
    }, 10);
}

timerButton.addEventListener("click", startTimer)