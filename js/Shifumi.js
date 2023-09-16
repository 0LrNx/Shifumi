let boutonPierre = document.getElementById('pierre');
let boutonFeuilles = document.getElementById('feuilles');
let boutonCiseaux = document.getElementById('ciseaux');
let resultat = document.getElementById('resultat');

let tabElements = ['Rock', 'Paper', 'Scissors'];

let scorePlayer = 0;
let scoreRobot = 0;

boutonPierre.addEventListener('click', () => {
    displayGame(tabElements[0], robotChoice());
    updateScore();
});

boutonFeuilles.addEventListener('click', () => {
    displayGame(tabElements[1], robotChoice());
    updateScore();
});

boutonCiseaux.addEventListener('click', () => {
    displayGame(tabElements[2], robotChoice());
    updateScore();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function robotChoice() {
    let randomPick = tabElements[getRandomInt(3)];
    return randomPick;
}

function displayGame(playerChoice, robotChoice) {
    // Display player choice
    let gamestatus = document.getElementById('joueur');
    gamestatus.innerHTML = playerChoice;

    // Display robot choice
    let robotStatus = document.getElementById('robot');
    robotStatus.innerHTML = robotChoice;

    // Display result
    let result = document.getElementById('resultat');
    result.innerHTML = gameIssue(playerChoice, robotChoice);
}

function gameIssue(playerChoice, robotChoice) {
    if (playerChoice == robotChoice) return "Tie";
    if (playerChoice == tabElements[1] && robotChoice == tabElements[0]) return "Win";
    if (playerChoice == tabElements[2] && robotChoice == tabElements[1]) return "Win";
    if (playerChoice == tabElements[0] && robotChoice == tabElements[2]) return "Win";
    else return "Lose";
}

function updateScore() {
    let scorePlayerElement = document.getElementById('score-player');
    let scoreRobotElement = document.getElementById('score-robot');
    
    let resultText = document.getElementById('resultat').innerText;
    
    if (resultText === "Win") {
        scorePlayer++;
    } else if (resultText === "Lose") {
        scoreRobot++;
    }

    scorePlayerElement.innerText = scorePlayer;
    scoreRobotElement.innerText = scoreRobot;
}
