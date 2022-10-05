const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const playerChoiceImg = document.querySelector("#playerChoiceImg");
const playerChoiceName = document.querySelector("#playerChoiceName");
const computerChoiceImg = document.querySelector("#computerChoiceImg");
const computerChoiceName = document.querySelector("#computerChoiceName");

const roundResult = document.querySelector("#roundResult");

let wins = 0;
let losses = 0;
let ties = 0;

const playerWinsText = document.querySelector("#playerWins");
const computerWinsText = document.querySelector("#computerWins");
const tiesText = document.querySelector("#ties");

const divResetGame = document.querySelector("#resetGame");
const victoryStatusMessage = document.querySelector("#victoryStatus");
const btnResetGame = document.querySelector("#resetGameBtn");

/* F1 - End game once one player reaches 5 victories */

function endGame() {
    if(wins === 5 | losses === 5) {

        btnRock.setAttribute('disabled', '');
        btnPaper.setAttribute('disabled', '');
        btnScissors.setAttribute('disabled', '');

        if(wins === 5) {
            victoryStatusMessage.textContent = 'Congratulations! You have vanquished the computer!'
        } else if(losses === 5) {
            victoryStatusMessage.textContent = 'Alas! You lost this fight. Maybe next time...'
        }

        divResetGame.removeAttribute('style', 'display: none');
    }
}

/* F2 - Reset the game when "play again" button is pressed */

function resetGame() {
    btnRock.removeAttribute('disabled');
        btnPaper.removeAttribute('disabled');
        btnScissors.removeAttribute('disabled');

    playerChoiceImg.removeAttribute('src');
    playerChoiceImg.removeAttribute('alt');
    playerChoiceName.textContent = '';

    computerChoiceImg.removeAttribute('src');
    computerChoiceImg.removeAttribute('alt');
    computerChoiceName.textContent = '';

    roundResult.textContent = '';

    wins = 0;
    losses = 0;
    ties = 0;
    
    playerWinsText.textContent = wins;
    computerWinsText.textContent = losses;
    tiesText.textContent = ties;

    divResetGame.setAttribute('style', 'display: none');
}

btnResetGame.addEventListener('click', resetGame);

/* F3 - Generate random choice: rock, paper or scissors */

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

/* F4 - Play 1 round when "rock", "paper", or "scissors" button is pressed */

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
        playerWinsText.textContent = wins;
    } else if((playerSelection === 'rock' && computerSelection === 'paper') | (playerSelection === 'scissors' && computerSelection === 'rock') | (playerSelection === 'paper' && computerSelection === 'scissors')) {
        const loseMessage = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        losses += 1;
        roundResult.textContent = loseMessage;
        computerWinsText.textContent = losses;
    } else if (playerSelection === computerSelection) {
        const tieMessage = `It's a tie this round! ${playerSelection} and ${computerSelection}.`;
        ties += 1;
        roundResult.textContent = tieMessage;
        tiesText.textContent = ties;
    } else {
        roundResult.textContent = 'Oops! Something went wrong. Sorry.';
    }

    endGame();
}

btnRock.addEventListener('click', () => playRound("rock"));
btnPaper.addEventListener('click', () => playRound("paper"));
btnScissors.addEventListener('click', () => playRound("scissors"));
