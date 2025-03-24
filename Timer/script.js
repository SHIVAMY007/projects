const timer = document.querySelector(".timer")
// timer.textContent="00:00:03"

const hrs = document.querySelector("#hours")
const mns = document.querySelector("#minutes")
const sec = document.querySelector("#seconds")

const startBtn = document.querySelector("#start-btn")
const addBtn = document.querySelectorAll(".add-buttons button")

const editBtn = document.querySelector("#Edit")
const resetBtn = document.querySelector("#Reset")
const stopBtn = document.querySelector("#Stop")


const upper = document.querySelector(".upper")

function checkUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

let intervalId;

function startTimer() {
    
    let currentHr = +hrs.value;
    let currentMin = +mns.value;
    let currentSec = +sec.value;
   
     intervalId =setInterval(() => {
        if(currentHr===0 && currentMin===0 && currentSec===0){
            clearInterval(intervalId);
            // timer.textContent = "00:00:00";
            // timer.style.display="flex"

            timer.style.fontSize="10vw";
            timer.style.color="red";
            upper.style.visibility="visible";
            addBtn.forEach(button => {
                button.style.visibility = "hidden";

            });

            timer.textContent = "Time Over";
            // alert("Time's Up!");
            return;
        }
        else{
                    if (currentSec > 0) {
                         currentSec--;
                     
                        // var mins = checkUnit(mns.value)
                        //  timer.textContent = `${hour}:${mins}:${newSec}`
                        }
                    else{
                             currentSec = 59;
                            //  newSec = checkUnit(currentSec);
                             
                             if(currentMin > 0){
                                 currentMin--;
                                //  newMin = checkUnit(currentMin)
                                // timer.textContent = `${hour}:${newmin}:${newSec}`
                                }
                            else{
                                    currentMin = 59;
                                    // newMin = checkUnit(currentMin)
                                    // timer.textContent = `${hour}:${newmin}:${newSec}`
                                    if(currentHr > 0){
                                        currentHr--;
                                        // newHr = checkUnit(currentHr)
                                        // timer.textContent = `${newHr}:${newmin}:${newSec}`
                                        }
                                    else{
                                            currentHr = 0;
                                            // newHr = checkUnit(currentHr)
                                            // timer.textContent = `${newHr}:${newmin}:${newSec}`
                                            }
                                }
                         }
                        let  newSec = checkUnit(currentSec);  
                        let newMin = checkUnit(currentMin);
                        let newHr = checkUnit(currentHr) 
                     
                    timer.textContent = `${newHr}:${newMin}:${newSec}`
                        //  startTimer();
                       
                    
                }
                            }, 1000);
    
    
}





startBtn.addEventListener('click', function () {
    // alert(hrs.value);
    let hour = checkUnit(+hrs.value);
    let mins = checkUnit(+mns.value);
    let secs = checkUnit(+sec.value);
    timer.style.color="#2cf629";
    timer.textContent = `${hour}:${mins}:${secs}`
    startTimer();
    upper.style.visibility="hidden";
    addBtn.forEach(button => {
        button.style.visibility = "visible";
    });
    // addBtn.style.visibility="visible";

});
function stopTimer(){
    clearInterval(intervalId);
}
stopBtn.addEventListener('click', function () { 
    stopTimer();
    stopBtn.style.backgroundColor="#3abc3a";
    stopBtn.textContent="Start";
     });

resetBtn.addEventListener('click', function () {
    stopTimer();
    // alert(hrs.value);
    let hour = checkUnit(+hrs.value);
    let mins = checkUnit(+mns.value);
    let secs = checkUnit(+sec.value);
    timer.textContent = `${hour}:${mins}:${secs}`
    startTimer();
    // upper.style.visibility="hidden";
    // addBtn.forEach(button => {
    //     button.style.visibility = "visible";
    // });
    // addBtn.style.visibility="visible";

});
editBtn.addEventListener('click', function () {
    stopTimer();
    // alert(hrs.value);
    upper.style.visibility="visible";
    addBtn.forEach(button => {
                button.style.visibility = "hidden";

            });
    // startTimer();
   

});


