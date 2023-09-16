let boutonPierre = document.getElementById('pierre');
let boutonFeuilles = document.getElementById('feuilles');
let boutonCiseaux = document.getElementById('ciseaux');
let boutonPuits = document.getElementById('puits');

let resultat = document.getElementById('resultat');

let tabElements = ['Rock', 'Paper', 'Scissors', 'Puits'];

let scorePlayer = 0;
let scoreRobot = 0;

let gameHistory = [];

let consecutiveLosses = 0;


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

boutonPuits.addEventListener('click', () => {
    displayGame(tabElements[3], robotChoice());
    updateScore();
    consecutiveLosses = 0;
    boutonPuits.style.display = 'none';
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


    let resultText = gameIssue(playerChoice, robotChoice);

    // Cheat code
    if (resultText === "Lose") {
        consecutiveLosses++;
    } else {
        consecutiveLosses = 0;
    }

    if (consecutiveLosses >= 2) {
        document.getElementById('puits').style.display = 'block';
    } else {
        document.getElementById('puits').style.display = 'none';
    }


    // History
    gameHistory.push({
        playerChoice: playerChoice,
        robotChoice: robotChoice,
        result: resultText
    });
    displayGameHistory();
}

function gameIssue(playerChoice, robotChoice) {
    if (playerChoice == robotChoice) return "Tie";
    if (playerChoice == tabElements[1] && robotChoice == tabElements[0]) return "Win";
    if (playerChoice == tabElements[2] && robotChoice == tabElements[1]) return "Win";
    if (playerChoice == tabElements[0] && robotChoice == tabElements[2]) return "Win";
    if (playerChoice == tabElements[3]) return "Win";
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

    //Historique 
    displayGameHistory();
}


function displayGameHistory() {
    let historyTable = document.getElementById('game-history').querySelector('tbody');
    historyTable.innerHTML = '';

    gameHistory.forEach((game, index) => {
        let row = historyTable.insertRow();
        let playerCell = row.insertCell(0);
        let resultCell = row.insertCell(1);
        let robotCell = row.insertCell(2);

        playerCell.textContent = game.playerChoice;
        robotCell.textContent = game.robotChoice;

        let emoji = '';
        if (game.result === 'Win') {
            emoji = '✅';
        } else if (game.result === 'Lose') {
            emoji = '❌';
        } else {
            emoji = '🏳️';
        }
        resultCell.textContent = emoji;
    });
}

// BTN RESET SCORES
let btnReset = document.getElementById('btn-reset');


btnReset.addEventListener('click', resetScore);

function resetScore() {
    scorePlayer = 0;
    scoreRobot = 0;
    gameHistory = [];
    consecutiveLosses = 0;
    displayGameHistory();

    let scorePlayerElement = document.getElementById('score-player');
    let scoreRobotElement = document.getElementById('score-robot');
    let gamestatus = document.getElementById('joueur');
    let robotStatus = document.getElementById('robot');

    gamestatus.innerHTML = '';
    robotStatus.innerHTML = '';
    resultat.innerHTML= '';

    scorePlayerElement.innerText = scorePlayer;
    scoreRobotElement.innerText = scoreRobot;
}


