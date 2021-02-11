


//roll a dice, return reesult and display dice face
let rollDice = () => { 
    console.log('rollDice')
    diceRoll = ((Math.floor(Math.random() * 6 )) + 1)
    //display correct dice face
    switch (diceRoll) {
        case 1: Dice.src="./img/dice1.png"; break
        case 2: Dice.src="./img/dice2.png"; break
        case 3: Dice.src="./img/dice3.png"; break
        case 4: Dice.src="./img/dice4.png"; break
        case 5: Dice.src="./img/dice5.png"; break
        case 6: Dice.src="./img/dice6.png"; break
        default: console.log('rollDice default error'); break
    }//end switch
    //access element diceFace and set up with dice face image
    diceFace.src = Dice.src
    diceFace.appendChild(Dice)
} //end rollDice

let indicateWhosTurn = (whosTurn) => {
    switch (whosTurn) {
        case 1: 
            player1.style.color = "red"; 
            player2.style.color = "green"; 
            break;
        case 2: 
            player2.style.color = "red"; 
            player1.style.color = "green";
            break                    
    } //end switch
} // end indicateWhosTurn

let playerLost = (whosTurn) => {
    diceFace.removeEventListener("click", playGame)
    if (whosTurn == 1) {
        document.getElementById("p1score").innerHTML = "LOST"
    } else {
        document.getElementById("p2score").innerHTML = "LOST"
    } //end if
    document.getElementById("startButton").innerHTML = "START GAME"
    console.log(`${whosTurn} lost`)
}
let playerWon = (whosTurn) => {
    diceFace.removeEventListener("click", playGame)
    if (whosTurn == 1) {
        document.getElementById("p1score").innerHTML = "LOST"
    } else {
        document.getElementById("p2score").innerHTML = "LOST"
    } //end if
    document.getElementById("p2score").innerHTML = "WON"
    document.getElementById("startButton").innerHTML = "START GAME"
    console.log(`${whosTurn} won`)
}
//MAIN 
const Dice = new Image() //set up an image object for the dice face
let diceRoll
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let p1Score = document.getElementById("p1score")
let p2Score = document.getElementById("p2Score")
let diceFace = document.getElementById("diceFace")
let player1Score = 0
let player2Score = 0
let whosTurn = ((Math.floor(Math.random() * 2 )) + 1)   //randomly select player to start

let playGame = () => {
    console.log ('playgame', whosTurn)
    rollDice()
    switch (whosTurn) {
        case 1: 
            if (diceRoll == 1) {playerLost(whosTurn); break}
            player1Score += diceRoll
            if (player1Score > 20) {playerWon(whosTurn); break}
            document.getElementById("p1score").innerHTML = player1Score
            // p1Score.innerHTML = player1Score
            console.log(`${whosTurn} ${player1Score}`)  
            whosTurn = 2
            break
        case 2:
            if (diceRoll == 1) {playerLost(whosTurn); break};
            player2Score += diceRoll
            if (player2Score > 20) {playerWon(whosTurn); break};
            document.getElementById("p2score").innerHTML = player2Score
            // p2Score.innerHTML = player2Score
            console.log(`${whosTurn} ${player2Score}`)
            whosTurn = 1
            break
    } // end switch
    indicateWhosTurn(whosTurn)
} // end playGame

 let startGame = () => {
    player1Score = 0;document.getElementById("p1score").innerHTML = player1Score
    player2Score = 0;document.getElementById("p2score").innerHTML = player2Score
    indicateWhosTurn(whosTurn)
    console.log ('start')

    if (document.getElementById("startButton").innerHTML == "START GAME") {
        console.log ('game started')
        diceFace.addEventListener("click", playGame)
        document.getElementById("startButton").innerHTML = "STOP GAME"
     } else {
        console.log ('game stopped')
        diceFace.removeEventListener("click", playGame)
        document.getElementById("startButton").innerHTML = "START GAME"
     }   
}

