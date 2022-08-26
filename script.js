
/* F1 - Generate random choice: rock, paper or scissors */

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

/* F2 - Get player's choice: rock, paper or scissors. Disallow other inputs */

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

/* F3 - Play 1 round of rock, paper, scissors. Return victory, loss or tie
    Requires F1, F2 and F5 */

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    if((playerSelection === 'rock' && computerSelection === 'scissors') | (playerSelection === 'scissors' && computerSelection === 'paper') | (playerSelection === 'paper' && computerSelection === 'rock')) {
        const winMessage = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        wins += 1;
        return winMessage;
    } else if((playerSelection === 'rock' && computerSelection === 'paper') | (playerSelection === 'scissors' && computerSelection === 'rock') | (playerSelection === 'paper' && computerSelection === 'scissors')) {
        const loseMessage = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        losses += 1;
        return loseMessage;
    } else if (playerSelection === computerSelection) {
        const tieMessage = `It's a tie this round! ${playerSelection} and ${computerSelection}.`;
        ties += 1;
        return tieMessage;
    } else {
        return 'Oops! Something went wrong. Sorry.'
    }
}

/* F4 - Reset and restart the game
    Requires F5 */
function resetGame() {
    alert('Play again?');
    wins = 0;
    losses = 0;
    ties = 0;

    game();
}

/* F5 - Play a 5 round game. Return final victory, loss or tie. Restart game
    Requires F3 and F4 */
function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let result;

    
    for(let i = 0; i < 5; i++) {

        console.log(playRound());

    }

    if(wins > losses) {
        console.log(result = `You Won! Yay!
        Games won: ${wins}
        Games lost: ${losses}
        Games tied: ${ties}`);
        
    } else if(wins < losses) {
        console.log(result = `You Lost! Maybe next time...
        Games won: ${wins}
        Games lost: ${losses}
        Games tied: ${ties}`);
        
    } else if(wins === losses) {
        console.log(result = `You tried, you tied!
        Games won: ${wins}
        Games lost: ${losses}
        Games tied: ${ties}`);
        
    } else {
        console.log('Oops! Something went wrong. Sorry.');
    }

    resetGame();
}

console.log(game());