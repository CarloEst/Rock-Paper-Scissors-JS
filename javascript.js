humanScore = 0
computerScore = 0


function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    let reply = ""
    if (choice == 0){
        reply = "rock"
    } else if (choice == 1) {
        reply = "paper"
    } else if (choice == 2) {
        reply = "scissors"
    }
    return reply
}


function getHumanChoice(){
    let input = prompt("What's your move: rock, paper or scissors?")
    return input
}





function playGame(){
    for(i=0; i<5; i++){
        let humanChoice = getHumanChoice().toLowerCase()
        let computerChoice = getComputerChoice().toLowerCase()

        function playRound(humanChoice, computerChoice) {
            let round = i+1
            console.log("Round "+ round+ " Computer picked "+ computerChoice)
            if (humanChoice == computerChoice) {
                humanScore++
                computerScore++
                console.log("This round is a draw. | Current Score: you("+humanScore +") vs Computer("+computerScore+").")
            } else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock"
                       || humanChoice == "scissors" && computerChoice== "paper") {
        
                humanScore++
                console.log("You win this round, "+ humanChoice +" beats "+ computerChoice +". | Current Score: you("+humanScore +") vs Computer("+computerScore+").")
        
            } else if(computerChoice  == "rock" && humanChoice == "scissors" || computerChoice  == "paper" && humanChoice == "rock"
            || computerChoice  == "scissors" && humanChoice== "paper"){
        
                computerScore++
                console.log("You lose this round, "+ computerChoice + " beats "+ humanChoice +". | Current Score: you("+humanScore +") vs Computer("+computerScore+").")
            } else{
                console.log("Invalid answer, try again")
                i--
            }
          
        
        }
        playRound(humanChoice, computerChoice)

    }
    if (humanScore > computerScore){
        return "You won."
    } else if(humanScore == computerScore) {
        return "You drew."
    } else{
        return "You lose."
    }
}

playGame()