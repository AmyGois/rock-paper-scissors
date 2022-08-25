
/* Generate random choice: rock, paper or scissors */
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * (4-1) + 1);

    if(randomNumber === 1) {
        return 'rock';
    } else if(randomNumber === 2) {
        return 'paper';
    } else if(randomNumber === 3) {
        return 'scissors';
    }
}

/* Get player's choice: rock, paper or scissors. Disallow other inputs */
function getPlayerChoice() {
    let choice = prompt('Pick: rock, paper or scissors', '').toLowerCase();
    
    if(choice === 'rock' | choice === 'paper' | choice === 'scissors') {
        return choice;
    } else {
        while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
            choice = prompt('Invalid choice. Choose rock, paper or scissors.', '').toLowerCase();
        }
        return choice;
    }
}

/* Play 1 round of rock, paper, scissors. Return victory, loss or tie */
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function playRound() {
    
    if((playerSelection === 'rock' && computerSelection === 'scissors') | (playerSelection === 'scissors' && computerSelection === 'paper') | (playerSelection === 'paper' && computerSelection === 'rock')) {
        const winMessage = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return winMessage;
    } else if((playerSelection === 'rock' && computerSelection === 'paper') | (playerSelection === 'scissors' && computerSelection === 'rock') | (playerSelection === 'paper' && computerSelection === 'scissors')) {
        const loseMessage = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        return loseMessage;
    } else if (playerSelection === computerSelection) {
        const tieMessage = `It's a tie this round! ${playerSelection} and ${computerSelection}.`;
        return tieMessage;
    }
}

console.log(playRound());