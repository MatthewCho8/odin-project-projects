function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }


function computerPlay(){
    var num = getRandomInt(3);

    if (num == 0){
        return "Paper"
    }

    if (num == 1){
        return "Rock"
    }

    if (num == 2){
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    var pChoice = playerSelection.toUpperCase()
    var cChoice = computerSelection.toUpperCase()
    
    if (pChoice == cChoice){
        console.log("Draw")
        return 0
    }
    
    if (pChoice == "ROCK" && cChoice == "PAPER"){
        console.log("You lose! Rock loses to paper")
        return 2
    }

    if (pChoice == "ROCK" && cChoice == "SCISSORS"){
        console.log("You win! Rock beats scissors")
        return 1
    }

    if (pChoice == "PAPER" && cChoice == "ROCK"){
        console.log("You win! Paper beats rock")
        return 1
    }

    if (pChoice == "PAPER" && cChoice == "SCISSORS"){
        console.log("You lose! Paper loses to scissors")
        return 2
    }

    if (pChoice == "SCISSORS" && cChoice == "ROCK"){
        console.log("You lose! Scissors lose to rock")
        return 2
    }

    if (pChoice == "SCISSORS" && cChoice == "PAPER"){
        console.log("You win! Scissors beat rock")
        return 1
    }

}

function game(numRounds){
    var numWins = 0
    var numLosses = 0
    var numDraws = 0
    for (let i=0; i<numRounds; i++){
        var pChoice = prompt("Please enter: rock, paper, or scissors?")
        var result = playRound(pChoice, computerPlay())
        if (result == 1){
            numWins = numWins + 1
        }
        else if (result == 2){
            numLosses = numLosses + 1
        }
        else {
            numDraws = numDraws + 1
        }
    }

    if (numWins > numLosses) {
        console.log("User is the winner! Wins: " + numWins + " Losses: " + numLosses)
    }
    else if (numWins < numLosses) {
        console.log("Computer is the winner! Wins: " + numWins + " Losses: " + numLosses)
    }
    else {
        console.log("It's a draw!")
    }

}

game(5)