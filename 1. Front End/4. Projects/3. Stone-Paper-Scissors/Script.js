let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const sms=document.querySelector("#sms");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=> {
    const options=["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}
const showWinner=(userWin,userChoice,compChoice)=> {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You won the game!");
        sms.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        sms.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lost the game");
        sms.innerText=`You lost! Computer's ${compChoice} beats your ${userChoice} `;
        sms.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=> {
    console.log("User choice is: ",userChoice);
    //Generate computer  choice..
    const compChoice=genCompChoice();
    console.log("Computer choice is: ",compChoice);
    if(userChoice===compChoice) {
        console.log("Game was draw");
        sms.innerText="Game was draw. Play again.";
        sms.style.backgroundColor="#081b31";
    } 
    else {
        let userWin=true;
        if(userChoice==="rock") {
            // Computer choice will be ---> Paper or Scissors
            userWin=compChoice==="scissors"? true:false;
        } else if (userChoice==="paper") {
            // Computer choice will be ---> Rock or Scissors
            userWin=compChoice==="rock"? true:false;
        } else {
            // Computer choice will be ---> Rock or Paper 
            userWin=compChoice==="paper"? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        //console.log("Choice was clicked : ",userChoice);
        playGame(userChoice);
    })
});