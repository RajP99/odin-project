let user_score = comp_score = 0;

function game(){
    function playRound(playerSelection, computerSelection) {
        if ((playerSelection === "rock" && computerSelection === "scissors") 
        || (playerSelection === "paper" && computerSelection === "rock") 
        || (playerSelection === "scissors" && computerSelection === "paper")) {
            user_score += 1;
            return(`Computer choice: ${computerSelection}, You WIN`);
        }

        else if ((playerSelection === "rock" && computerSelection === "paper") 
        || (playerSelection === "paper" && computerSelection === "scissors") 
        || (playerSelection === "scissors" && computerSelection === "rock")) {
            comp_score += 1;
            return(`Computer choice: ${computerSelection}, You LOSE`);
        }

        else {
            return(`Computer choice: ${computerSelection}, TIE`);
        }
    }

    function computerPlay() {
        let arr = ["rock", "paper", "scissors"];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    const user_choice = prompt("Enter your move").toLowerCase();
    const computer_choice = computerPlay();
    console.log(playRound(user_choice, computer_choice));
}

game();
game();
game();
game();
game();

if (user_score > comp_score){
    console.log("YOU WIN");
} else if (user_score < comp_score){
    console.log("YOU LOSE");
} else {
    console.log("TIE GAME");
}
