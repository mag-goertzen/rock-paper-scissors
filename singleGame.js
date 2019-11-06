function singleGame(playerSelection,computerSelection){

playerSelection = playerSelection.toUpperCase();
computerSelection = computerSelection.toUpperCase();

    if (playerSelection == computerSelection){
        gameResult = 'Play again, you both chose '+ playerSelection;
    
    }elseif (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        gameResult = 'You win!';
    
    }elseif (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        gameResult = 'The computer wins! BOO!';

    }elseif (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        gameResult = 'You win!';

    }elseif (playerSelection == 'SCISSORS' && computerSelection == 'ROCK'){
        gameResult = 'The computer wins! BOO!';

    }elseif (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        gameResult = 'You win!';
    
    }else (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        gameResult = 'The computer wins! BOO!';
    }
 
    return gameResult;
}