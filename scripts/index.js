// variables to keep track of moves and the number of wins, losses, ties
let wins = 0;
let losses = 0;
let ties = 0;
let key = "";
let computerMove = "";

// game intro detecting button clicks

for (let i = 0; i <document.querySelectorAll(".move").length; i++) {
        
    document.querySelectorAll(".move")[i].addEventListener('click', function() {

        let buttonInnerHTML = this.innerHTML;

        shake();
        setTimeout(function() {
            playerChoice(buttonInnerHTML);
            computerChoice();
            gamePlay(buttonInnerHTML, computerMove);
        }, 1250); /* milliseconds, so .01 seconds*/
        
        
        console.log(`player ${buttonInnerHTML}, computer ${computerMove}`);
        console.log(`Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`);
    });
}      

// detecting keyboard presses

document.addEventListener("keydown", function(event) {

    //change back to rock

    playerChoice(event.key);
    computerChoice();
    gamePlay(event.key, computerMove);

    console.log(`player ${event.key}, computer ${computerMove}`);
    console.log(`Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`);
});


const playerChoice = (key) => {
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

const computerChoice = () => {
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

const gamePlay = (key, computerMove) => {
// compare player vs. computer, then display and record the total wins/losses/ties

// tie
    if(key == computerMove) {
        ties++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, 🚩Ties: ${ties}, Wins: ${wins}`;  
    }

// win
 
    else if(key === "r" && computerMove === "s") {
        wins++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, Ties: ${ties}, Wins: ${wins} 🚩`;   
    } 
    else if(key === "p" && computerMove === "r") {
        wins++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, Ties: ${ties}, Wins: ${wins} 🚩`;
    } 
    else if(key === "s" && computerMove === "p") {
        wins++;
        document.querySelector(".report").innerHTML = `Losses: ${losses}, Ties: ${ties}, Wins: ${wins} 🚩`;
    }

// loss
    else if(key === "r" && computerMove === "p") {
        losses++;
        document.querySelector(".report").innerHTML = `🚩 Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`;
    } 
    else if(key === "p" && computerMove === "s") {
        losses++;
        document.querySelector(".report").innerHTML = `🚩 Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`;
    } 
    else if(key === "s" && computerMove === "r") {
        losses++;
        document.querySelector(".report").innerHTML = `🚩 Losses: ${losses}, Ties: ${ties}, Wins: ${wins}`;
    }
}

const shake = () => {
    //change back to rock
        document.querySelector(".compMove").setAttribute("src", "images/computerRock.png");
        document.querySelector(".playerMove").setAttribute("src", "images/playerRock.png");
    
    //move up
    let compFist = document.querySelector(".compMove");
    let container = document.querySelector(".animation")

    compFist.classList.add("up");
    container.classList.add("containerUp");
    
    //move down
    setTimeout(function() {
        compFist.classList.remove("up");
        container.classList.remove("containerUp");
    }, 250); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        compFist.classList.add("up");
        container.classList.add("containerUp");
    }, 500); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        compFist.classList.remove("up");
        container.classList.remove("containerUp");
    }, 750); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        compFist.classList.add("up");
        container.classList.add("containerUp");
    }, 1000); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        compFist.classList.remove("up");
        container.classList.remove("containerUp");
    }, 1250); /* milliseconds, so .01 seconds*/

    let playerFist = document.querySelector(".playerMove");

    playerFist.classList.add("up");
    container.classList.add("containerUp");
    
    //move down
    setTimeout(function() {
        playerFist.classList.remove("up");
        container.classList.remove("containerUp");        
    }, 250); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        playerFist.classList.add("up");
        container.classList.add("containerUp");
    }, 500); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        playerFist.classList.remove("up");
        container.classList.remove("containerUp");   
    }, 750); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        playerFist.classList.add("up");
        container.classList.add("containerUp");
    }, 1000); /* milliseconds, so .01 seconds*/

    //move down
    setTimeout(function() {
        playerFist.classList.remove("up");
        container.classList.remove("containerUp");   
    }, 1250); /* milliseconds, so .01 seconds*/
}