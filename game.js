function getComputerChoice(){
    randomNumber = Math.random()

    if(randomNumber < 1/3){
        return 'rock'
    } else if(randomNumber > 2/3){
        return 'scissors'
    } else {
        return 'paper'
    }
}

function getHumanChoice(){
    const humanChoice = prompt('Rock, paper or scissors?')

    if(humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors'){
        return humanChoice.toLowerCase();
    } else {
        alert('Incorrect input')

        getHumanChoice()
    }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){

        if(humanChoice === computerChoice){
            console.log('Draw!')
        } else if(humanChoice === 'rock' && computerChoice === 'paper'){
            console.log('You lose, Paper beats Rock')
            computerScore++;
        } else if(humanChoice === 'paper' && computerChoice === 'scissors'){
            console.log('You lose, scissors beats paper')
            computerScore++;
        } else if(humanChoice === 'scissors' && computerChoice === 'rock'){
            console.log('You lose, rock beats scissors')
            computerScore++;
        } else if(humanChoice === 'rock' && computerChoice === 'scissors'){
            console.log('You win, rock beats scissors')
            humanScore++;
        } else if(humanChoice === 'paper' && computerChoice === 'rock'){
            console.log('You win, paper beats rock')
            humanScore++;
        } else if(humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log('You win, scissors beats paper')
            humanScore++;
        }
    
        console.log(`${humanChoice} vs ${computerChoice}`)
        console.log(humanScore + '   ' + computerScore)
    }

    while(humanScore < 5 || computerScore < 5){

        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
    }
}

playGame();