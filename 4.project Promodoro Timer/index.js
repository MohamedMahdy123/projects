const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const restEl = document.getElementById("rest")
const timerEl = document.getElementById("timer")

let interval
let timeLeft = 1500

function updatetimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(() =>{
        timeLeft --;
        updatetimer();
        if(timeLeft == 0){
            clearInterval(interval);
            alert("Time is out");
            timeLeft = 1500;
            updatetimer
        }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function restTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updatetimer();
}



startEl.addEventListener("click",startTimer)
stopEl.addEventListener("click",stopTimer)
restEl.addEventListener("click",restTimer)