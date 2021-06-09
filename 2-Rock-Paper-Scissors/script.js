let player_score = computer_score = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.value));
    });
});

function playRound(playerSelection) {
    computerSelection = computerPlay();
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        updateScore("win");
    }

    else if ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "rock")) {
        updateScore("lose");
    }

    else {
        updateScore("tie");
    }
}

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function updateScore(result) {
    score_h2 = document.getElementById("score");
    player_score_para = document.getElementById("player-score");
    computer_score_para = document.getElementById("computer-score");

    if (result === "win") {
        score_h2.innerHTML = "Player Wins the Round!";
        player_score++;
    } else if (result === "lose") {
        score_h2.innerHTML = "Computer Wins the Round!";
        computer_score++;
    } else {
        score_h2.innerHTML = "Tie Round!";
    }

    player_score_para.innerHTML = `Player: ${player_score}`;
    computer_score_para.innerHTML = `Computer: ${computer_score}`;

    if (gameOver()) {
        resetGame();
    }
}

function gameOver() {
    return (player_score === 5 || computer_score === 5)
}

function resetGame() {
    if (player_score == 5) {
        alert("You WIN!");
    } else {
        alert("You LOSE");
    }

    score_h2 = document.getElementById("score");
    score_h2.innerHTML = "Score";

    player_score = computer_score = 0;

    player_score_para = document.getElementById("player-score");
    computer_score_para = document.getElementById("computer-score");
    player_score_para.innerHTML = `Player: ${player_score}`;
    computer_score_para.innerHTML = `Computer: ${computer_score}`;
}