let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "(user)".fontsize(3).sub();
const smallCompWord = "(comp)".fontsize(3).sub();

function getComputerChoice(){
 const choices = ['r', 'p', 's'];
 return choices[Math.floor(Math.random()*3)];
}

function convertToWord(choice){
 if(choice == "r") return "Rock";
 if(choice == "p") return "Paper";
 if(choice == "s") return "Scissors";
}

function won(userChoice, computerChoice){
 const userChoice_div = document.getElementById(userChoice);
 userScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = convertToWord(userChoice)+smallUserWord+" beats "+convertToWord(computerChoice)+smallCompWord+ ", You win!!"
 userChoice_div.classList.add("green-glow");
 setTimeout(()=>userChoice_div.classList.remove("green-glow"), 500);
}

function lost(userChoice, computerChoice){
 const userChoice_div = document.getElementById(userChoice);
 computerScore++;
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = convertToWord(userChoice)+smallUserWord+" loses to "+convertToWord(computerChoice)+smallCompWord+ ", You lost!!"
 userChoice_div.classList.add("red-glow");
 setTimeout(()=>userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice){
 const userChoice_div = document.getElementById(userChoice);
 userScore_span.innerHTML = userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = convertToWord(userChoice)+smallUserWord+" draws to "+convertToWord(computerChoice)+smallCompWord+ ", Its a draw!!"
 userChoice_div.classList.add("grey-glow");
 setTimeout(()=>userChoice_div.classList.remove("grey-glow"), 500);
}

function game(userChoice){
 const computerChoice = getComputerChoice();
 switch(userChoice+computerChoice){
  case "rs":
  case "sp":
  case "pr":
   won(userChoice, computerChoice);
   break;
  case "sr":
  case "ps":
  case "rp":
   lost(userChoice, computerChoice);
   break
  case "rr":
  case "ss":
  case "pp":
   draw(userChoice, computerChoice);
   break
 }
}

main();

function main(){
 rock_div.addEventListener('click', ()=>game("r"));
 paper_div.addEventListener('click', ()=>game("p"));
 scissors_div.addEventListener('click', ()=>game("s"));
}



