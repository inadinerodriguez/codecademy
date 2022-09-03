const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Oops. Looks like you entered wrong. Try again!");
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game is a tie";
    }
    if (userChoice === "bomb") {
      return "You Won!!!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer won!";
      } else {
        return "You won!!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer wins!!";
      } else if (computerChoice === "rock") {
        return "You won!!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "The computer won!!";
      } else if (computerChoice === "paper") {
        return "You Won!!!";
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("scissors");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();