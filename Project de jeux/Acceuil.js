let playerScore = 0;
let computerScore = 0;

// Fonction principale du jeu
function playGame(playerChoice) {
  const playerImg = document.getElementById("playerChoice");
  const computerImg = document.getElementById("computerChoice");

  // Détermine le choix de l'ordinateur
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  // Met à jour les images des choix
  playerImg.src = getImage(playerChoice);
  computerImg.src = getImage(computerChoice);

  // Calcul du résultat
  const result = determineWinner(playerChoice, computerChoice);
  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  }

  // Met à jour le score
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

// Réinitialise le jeu
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("playerChoice").src = "images/question.png";
  document.getElementById("computerChoice").src = "images/question.png";
}

// Détermine le gagnant
function determineWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === 1 && computer === 3) || // Pierre bat Ciseaux
    (player === 2 && computer === 1) || // Feuille bat Pierre
    (player === 3 && computer === 2)    // Ciseaux battent Feuille
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Retourne l'image correspondant au choix
function getImage(choice) {
  if (choice === 1) return "Image/image pierre.webp";
  if (choice === 2) return "Image/Image main originale.jpeg";
  if (choice === 3) return "Image/image main ciseau.webp";
}
