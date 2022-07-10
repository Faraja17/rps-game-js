// variables to keep track of moves and the number of wins, losses, ties
let wins = 0;
let losses = 0;
let ties = 0;
let buttonInnerHTML = "";
let computerMove = "";


// game intro detecting button clicks

for (let i = 0; i <document.querySelectorAll(".move").length; i++) {
        
    document.querySelectorAll(".move")[i].addEventListener('click', function() {

        let buttonInnerHTML = this.innerHTML;

        playerChoice(buttonInnerHTML);
        computerChoice();
        gamePlay(buttonInnerHTML, computerMove);
        
        console.log(`player ${buttonInnerHTML}, computer ${computerMove}`);
        console.log(`Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`);
    });
}      

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

function gamePlay(buttonInnerHTML, computerMove) {
// compare player vs. computer, then display and record the total wins/losses/ties

// tie
    if(buttonInnerHTML == computerMove) {
        ties++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, 🚩Ties: ${ties}, Wins: ${wins}`;  
    }

// win
 
    else if(buttonInnerHTML === "r" && computerMove === "s") {
        wins++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, Ties: ${ties}, Wins: ${wins} 🚩`;   
    } 
    else if(buttonInnerHTML === "p" && computerMove === "r") {
        wins++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, Ties: ${ties}, Wins: ${wins} 🚩`;
    } 
    else if(buttonInnerHTML === "s" && computerMove === "p") {
        wins++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, Ties: ${ties}, Wins: ${wins} 🚩`;
    }

// loss
    else if(buttonInnerHTML === "r" && computerMove === "p") {
        losses++;
        document.querySelector(".report").innerHTML = `🚩 Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`;
    } 
    else if(buttonInnerHTML === "p" && computerMove === "s") {
        losses++;
        document.querySelector(".report").innerHTML = `🚩 Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`;
    } 
    else if(buttonInnerHTML === "s" && computerMove === "r") {
        losses++;
        document.querySelector(".report").innerHTML = `🚩 Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`;
    }
}
