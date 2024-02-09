const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

let computerScore = 0;
let playerScore = 0;

const roundResult = document.querySelector('#roundResult');
const computerS = document.querySelector('#computerS');
const playerS = document.querySelector('#playerS');
const result = document.querySelector('#result');


function getComputerChoice(x)
{
    x = Math.floor(Math.random() * 3) + 1;
    if(x == 1) 
    {
        return "rock";
    }
    else if(x == 2)
    {
        return "paper";
    }
    else if(x == 3)
    {
        return "scissors";
    }
}


rockButton.addEventListener('click', () => {
    player_Selection = "rock";
    if(playerScore < 5 && computerScore < 5)
    {
        playRound(player_Selection);
    }
    if(playerScore == 5)
    {
        result.style.cssText = "color: blanchedalmond; background-color: cadetblue; border-radius: 15px; padding: 8px";
        result.textContent = "You Won!"
    }

    if(computerScore == 5)
    {
        result.style.cssText = "color: blanchedalmond; background-color: cadetblue; border-radius: 15px; padding: 8px";
        result.textContent = "You Loose!"
    }
})

paperButton.addEventListener('click', () => {
    player_Selection = "paper";
    if(playerScore < 5 && computerScore < 5)
    {
        playRound(player_Selection);
    }

    if(playerScore == 5)
    {
        result.style.cssText = "color: blanchedalmond; background-color: cadetblue; border-radius: 15px; padding: 8px";
        result.textContent = "You Won!";
    }

    if(computerScore == 5)
    {
        result.style.cssText = "color: blanchedalmond; background-color: cadetblue; border-radius: 15px; padding: 8px";
        result.textContent = "You Loose!";
    }
})

scissorsButton.addEventListener('click', () => {
    player_Selection = "scissors";
    if(playerScore < 5 && computerScore < 5)
    {
        playRound(player_Selection);
    }
    if(playerScore == 5)
    {
        result.style.cssText = "color: blanchedalmond; background-color: cadetblue; border-radius: 15px; padding: 8px";
        result.textContent = "You Won!"
    }

    if(computerScore == 5)
    {
        result.style.cssText = "color: blanchedalmond; background-color: cadetblue; border-radius: 15px; padding: 8px";
        result.textContent = "You Loose!"
    }
})


function playRound(player_Selection)
{
    let computer_Selection = getComputerChoice();

    if(player_Selection == computer_Selection)
    {
        roundResult.textContent = "It's a tie!";
        
    }

    else if(player_Selection == "rock")
    {
        if(computer_Selection == "paper")
        {
            computerScore ++;
            computerS.textContent = computerScore;
            playerS.textContent = playerScore;
            roundResult.textContent = "You lose! Paper beats Rock!"
        }
        else
        {
            playerScore++;
            computerS.textContent = computerScore;
            playerS.textContent = playerScore;
            roundResult.textContent = "You Won! Rock beats Scissors!"
        }
    }

    else if(player_Selection == "paper")
    {
        if(computer_Selection == "scissors")
        {
            computerScore ++;
            computerS.textContent = computerScore;
            playerS.textContent = playerScore;
            roundResult.textContent = "You lose! Scissors beats Paper!"
        }
        else
        {
            playerScore++;
            computerS.textContent = computerScore;
            playerS.textContent = playerScore;
            roundResult.textContent = "You Won! Paper beats Rock!"
        }
    }

    else if(player_Selection == "scissors")
    {
        if(computer_Selection == "rock")
        {
            computerScore ++;
            computerS.textContent = computerScore;
            playerS.textContent = playerScore;
            roundResult.textContent = "You lose! Rock beats Scissors!"
        }
        else
        {
            playerScore++;
            computerS.textContent = computerScore;
            playerS.textContent = playerScore;
            roundResult.textContent = "You Won! Scissors beats Paper!"
        }
    }
}