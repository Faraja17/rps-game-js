// variables to keep track of the number of wins, losses, and ties
let wins = 0;
let losses = 0;
let ties = 0;
let buttonInnerHTML = "";
let computerMove = "";


// game intro detecting button clicks
// alert("Welcome to ROCK PAPER SCISSORS! " + "" + wins + " Wins " + "" + losses + " Losses " + "" + ties + " Ties ");
for (let i = 0; i <document.querySelectorAll(".move").length; i++) {
        
    document.querySelectorAll(".move")[i].addEventListener('click', function() {

        let buttonInnerHTML = this.innerHTML;
        
        console.log(buttonInnerHTML);

        playerChoice(buttonInnerHTML);
        computerChoice();
    });
}      

// function greeting() {
//     // inner player input loop
//         while ((playerMove === "r") || (playerMove === "p") || (playerMove === "s")) {
//                 playerChoice(); 
//                 computerChoice();
//                 gamePlay();
//                 playerMove = prompt("Enter your move: (r)ock (p)aper (s)scissors or (q)uit.");
//         }    
// }

function playerChoice(key) {
// display what the player chose
   switch (key) {
    case "r":
        document.querySelector(".playerMove").setAttribute("src", "images/playerRock.png");
        break;

    case "p":
        document.querySelector(".playerMove").setAttribute("src", "images/playerPaper.png");
        break;

    case "s":
        document.querySelector(".playerMove").setAttribute("src", "images/playerScissors.png");
        break;
    }
}

function computerChoice() {
// display what the computer chose
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        computerMove = "r";
        document.querySelector(".compMove").setAttribute("src", "images/computerRock.png");
    } 
    else if(randomNumber === 1) {
        computerMove = "p";
        document.querySelector(".compMove").setAttribute("src", "images/computerPaper.png");
    } 
    else if(randomNumber === 2) {
        computerMove = "s";
        document.querySelector(".compMove").setAttribute("src", "images/computerScissors.png");
    }
}

function gamePlay() {
// compare player vs. computer, then display and record the total wins/losses/ties

// tie
    if(buttonInnerHTML === computerMove) {
        alert("It is a tie!");
        ties++;
    }

// win
 
    else if(buttonInnerHTML === "r" && computerMove === "s") {
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

// greeting();