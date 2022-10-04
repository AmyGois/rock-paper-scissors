const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const playerChoiceImg = document.querySelector("#playerChoiceImg");
const playerChoiceName = document.querySelector("#playerChoiceName");
const computerChoiceImg = document.querySelector("#computerChoiceImg");
const computerChoiceName = document.querySelector("#computerChoiceName");

const roundResult = document.querySelector("#roundResult");


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

/* F2 - Get player's choice: rock, paper or scissors. Disallow other inputs

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
} */

/* F3 - Play 1 round of rock, paper, scissors. Return victory, loss or tie
    Requires F1 and F2 */
let wins = 0;
let losses = 0;
let ties = 0;

function playRound(choice) {
    const computerSelection = getComputerChoice();
    const playerSelection = choice;

    if(playerSelection === 'rock') {
        playerChoiceImg.setAttribute('src', './images/my_rock.png');
        playerChoiceImg.setAttribute('alt', 'rock');
        playerChoiceName.textContent = 'Rock';
    } else if(playerSelection === 'paper') {
        playerChoiceImg.setAttribute('src', './images/my_paper.png');
        playerChoiceImg.setAttribute('alt', 'paper');
        playerChoiceName.textContent = 'Paper';
    } else if(playerSelection === 'scissors') {
        playerChoiceImg.setAttribute('src', './images/my_scissors.png');
        playerChoiceImg.setAttribute('alt', 'scissors');
        playerChoiceName.textContent = 'Scissors';
    }

    if(computerSelection === 'rock') {
        computerChoiceImg.setAttribute('src', './images/pc_rock.png');
        computerChoiceImg.setAttribute('alt', 'rock');
        computerChoiceName.textContent = 'Rock';
    } else if(computerSelection === 'paper') {
        computerChoiceImg.setAttribute('src', './images/pc_paper.png');
        computerChoiceImg.setAttribute('alt', 'paper');
        computerChoiceName.textContent = 'Paper';
    } else if(computerSelection === 'scissors') {
        computerChoiceImg.setAttribute('src', './images/pc_scissors.png');
        computerChoiceImg.setAttribute('alt', 'scissors');
        computerChoiceName.textContent = 'Scissors';
    }

    if((playerSelection === 'rock' && computerSelection === 'scissors') | (playerSelection === 'scissors' && computerSelection === 'paper') | (playerSelection === 'paper' && computerSelection === 'rock')) {
        const winMessage = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        wins += 1;
        roundResult.textContent = winMessage;
        //return winMessage;
    } else if((playerSelection === 'rock' && computerSelection === 'paper') | (playerSelection === 'scissors' && computerSelection === 'rock') | (playerSelection === 'paper' && computerSelection === 'scissors')) {
        const loseMessage = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        losses += 1;
        roundResult.textContent = loseMessage;
        //return loseMessage;
    } else if (playerSelection === computerSelection) {
        const tieMessage = `It's a tie this round! ${playerSelection} and ${computerSelection}.`;
        ties += 1;
        roundResult.textContent = tieMessage;
        //return tieMessage;
    } else {
        roundResult.textContent = 'Oops! Something went wrong. Sorry.';
        //return 'Oops! Something went wrong. Sorry.';
    }
}

btnRock.addEventListener('click', () => playRound("rock"));
btnPaper.addEventListener('click', () => playRound("paper"));
btnScissors.addEventListener('click', () => playRound("scissors"));

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
/* function game() {
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

console.log(game()); */