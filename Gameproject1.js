let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgs = document.querySelector("#message");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
   const options = ["rock","paper","scissors"];
   const ranIdx = Math.floor(Math.random() * 3);
   return options[ranIdx];
};

const drawGame = () => {
    console.log("Now Game is draw.");
    msgs.innerText="Game is draw.Play again."
    msgs.style.backgroundColor = "blue";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msgs.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msgs.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msgs.innerText=`you loose! ${compChoice} beats Your ${userChoice}`;
        msgs.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
 const compChoice = genCompChoice();


if(userChoice === compChoice){
    //Draw game
    drawGame();
  } else{
    let userWin = true;
    if(userChoice === "rock"){
        //paper,scissors
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper") {
        //scissors,rock
        userWin=compChoice === "scissors" ? false : true;
    }else{
        //paper, rock
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice)
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
     const userChoice = choice.getAttribute("id"); 
     playGame(userChoice); 
    });
});