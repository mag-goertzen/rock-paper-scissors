function singleGame(playerSelection,computerSelection) {


playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase();
let gameResult;

    if (playerSelection === 'rock'){
        if (computerSelection === 'scissors')
        {gameResult = 'You win!';}
        else if (computerSelection === 'paper')
        {gameResult = 'The computer wins! BOO!';}
        else 
        {gameResult = 'Play again, you both chose '+ computerSelection;};
    } else {}; 

    if (playerSelection === 'scissors'){
        if (computerSelection === 'paper') 
            {gameResult = 'You win!';}
        else if (computerSelection === 'rock')
            {gameResult = 'The computer wins! BOO!';}
        else
        {gameResult = 'Play again, you both chose '+ computerSelection;};
    } else {}; 

    if (playerSelection === 'paper'){
        if (computerSelection === 'rock')
            {gameResult = 'You win!';}
        else if (computerSelection === 'scissors')
            {gameResult = 'The computer wins! BOO!';} 
        else 
        {gameResult = 'Play again, you both chose '+ computerSelection;};
    } else {};       
        

return gameResult;
}

