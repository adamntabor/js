const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissor" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("You have not entered a valid game piece!");
  }
}

const getComputerChoice = () => {
  computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
    default:
      return "error!";
  }
}

const determineWinner = (userChoice,computerChoice) => {

  if (userChoice === "bomb") {
    return "User wins!";
  }

  if (userChoice === computerChoice) {
    return "Tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      return "Computer wins!";
    } else {
      return "User wins!"
    }
  }

if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "User wins!"
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();