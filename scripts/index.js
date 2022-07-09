// variables to keep track of the number of wins, losses, and ties
let wins = 0;
let losses = 0;
let ties = 0;
let playerMove = "";
let computerMove = "";


// game intro detecting button clicks
// alert("Welcome to ROCK PAPER SCISSORS! " + "" + wins + " Wins " + "" + losses + " Losses " + "" + ties + " Ties ");
for (let i = 0; i <document.querySelectorAll(".move").length; i++) {
        
    document.querySelectorAll(".move")[i].addEventListener('click', function() {

        let buttonInnerHTML = this.innerHTML;

        playerChoice(buttonInnerHTML);
        computerChoice();
    });
}      

function greeting() {
    // inner player input loop
        while ((playerMove === "r") || (playerMove === "p") || (playerMove === "s")) {
                playerChoice(); 
                computerChoice();
                gamePlay();
                playerMove = prompt("Enter your move: (r)ock (p)aper (s)scissors or (q)uit.");
        }    
        alert("Thank you for playing!");
}

function playerChoice() {
// display what the player chose
    if(playerMove === "r") {
        alert("ROCK versus. . .");
    } 
    else if(playerMove === "p") {
        alert("PAPER versus. . .");
    } 
    else if(playerMove === "s") {
        alert("SCISSORS versus. . .");
    }
}

function computerChoice() {
// display what the computer chose
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        computerMove = "r";
        alert("ROCK");
    } 
    else if(randomNumber === 1) {
        computerMove = "p";
        alert("PAPER");
    } 
    else if(randomNumber === 2) {
        computerMove = "s";
        alert("SCISSORS");
    }
}

function gamePlay() {
// compare player vs. computer, then display and record the total wins/losses/ties

// tie
    if(playerMove === computerMove) {
        alert("It is a tie!");
        ties++;
    }

// win
 
    else if(playerMove === "r" && computerMove === "s") {
        document.querySelector("img").setAttribute("src", "images/")
        wins++;
    } 
    else if(playerMove === "p" && computerMove === "r") {
        alert("You win!");
        wins++;
    } 
    else if(playerMove === "s" && computerMove === "p") {
        alert("You win!");
        wins++;
    }

// loss
    else if(playerMove === "r" && computerMove === "p") {
        alert("You lose!");
        losses++;
    } 
    else if(playerMove === "p" && computerMove === "s") {
        alert("You lose!");
        losses++;
    } 
    else if(playerMove === "s" && computerMove === "r") {
        alert("You lose!");
        losses++;
    }
}

greeting();