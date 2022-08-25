
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

/* Get player's choice: rock, paper or scissors. Disallow other options */
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

