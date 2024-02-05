let computerScore = 0;
let playerScore = 0;

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

function playRound(player_Selection, computer_Selection)
{

    if(player_Selection == computer_Selection)
    {
        return "Its a Tie!";
    }

    else if(player_Selection == "rock")
    {
        if(computer_Selection == "paper")
        {
            computerScore ++;
            return "You lose! Paper beats Rock!";
        }
        playerScore++;
        return  "You Won! Rock beats Scissors!";
    }

    else if(player_Selection == "paper")
    {
        if(computer_Selection == "scissors")
        {
            computerScore ++;
            return "You lose! Scissors beats Paper!";
        }
        playerScore++;
        return  "You Won! Paper beats Rock!";
    }

    else if(player_Selection == "scissors")
    {
        if(computer_Selection == "rock")
        {
            computerScore ++;
            return "You lose! Rock beats Scissors!";
        }
        playerScore++;
        return  "You Won! Scissors beats Paper!";
    }
}

for(let i = 0; i < 5; i++)
{
    let player_Selection = prompt("Please enter 'Rock', 'Paper' or 'Scissors'.").toLowerCase();
    let computer_Selection = getComputerChoice();
    console.log(playRound(player_Selection, computer_Selection));
    console.log("Your Score:\n", playerScore);
    console.log("Computer Score:\n", computerScore);
}

if(playerScore > computerScore)
{
    console.log("You Won the Game!");
}

else if(playerScore < computerScore)
{
    console.log("You Lost the Game!");
}

else if(playerScore == computerScore)
{
    console.log("You Tied");
}