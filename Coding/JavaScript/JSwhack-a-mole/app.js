//Program using timer events:
//timerName = setInterval(func, milliseconds) and clearInterval(timerName)
//Sets 6 moles bouncing each with a interval of molePeepInterval
//Adds eventlistener to mole to see when it's wehacked (clicked)
//
//I want to make it more difficult by decreasing aniationDuration but can't interogate DOM. 
//Always seems null.
//
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mrbump');
var molePeepInterval = 1000; //ms interval between peeping moles too short and just stack lots of moles
var peepIntervalTimer //name of interval timer

//bounce a random mole
let bounceMole = () => {
    console.log('bounceMole')
    let mole = ((Math.floor(Math.random() * 6 )))
    //clear Mole classlist as if it fills up it stops - needs a delay
    //longer than animation duration?
    //setTimeout( () => {moles[mole].classList.remove('bounce')}, 6000) 
    moles[mole].classList.add('bounce')   
    console.log("Mole dom = ", moles[mole])
    moles[mole].addEventListener("click", moleWhacked)
}

let speedUpMoles = () => {
    console.log("speeding up mole")
    score = Number(scoreBoard.innerHTML)
    console.log("speed up score = ", score)
    
    if(score == 2 && molePeepInterval > 1000) {
        clearInterval(peepIntervalTimer)
        //document.getElementById("mrbump bounce").style.animationDuration = "1s"
        //mrbump.bounce.animationDuration = "2s" //double speed of Moles peeping
        //molePeepInterval = molePeepInterval/2
        molePeepInterval = 1000
        peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
    }
    if(score == 10 && molePeepInterval > 500) {
        clearInterval(peepIntervalTimer)
        //document.getElementById("mrbump bounce").style.animationDuration = "1s"
        //bounce.animationDuration = "2s" //double speed of Moles peeping
        molePeepInterval = 500
        peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
    }
}

// detect a mole is whacked and add to score
let moleWhacked = () => {
    console.log(`mole whacked`)
    let score = Number(scoreBoard.innerHTML)
    score += 1
    scoreBoard.innerHTML = score
    console.log(`score = ${score}`)
  //  speedUpMoles()
}

//MAIN - start/stop game by clicking on Start Game button defined in HTML
let startGame = () => {
    if (document.getElementById("startButton").innerHTML == "START GAME") {
        console.log ('game started')
        //bounce a mole with an interval
        peepIntervalTimer = setInterval(bounceMole, molePeepInterval)
        document.getElementById("startButton").innerHTML = "STOP GAME"
    } else {
        console.log ('game stopped')
        //stop bouncing the moles
        clearInterval(peepIntervalTimer)
        document.getElementById("startButton").innerHTML = "START GAME"
    }   
}
