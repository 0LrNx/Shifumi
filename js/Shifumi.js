let boutonPierre = document.getElementById('pierre');
let boutonFeuilles = document.getElementById('feuilles');
let boutonCiseaux = document.getElementById('ciseaux');
let resultat = document.getElementById('resultat');

let joueurSpan = document.getElementById('joueur');
let robotSpan = document.getElementById('robot');

let tabElements = ['Pierre', 'Feuilles', 'Ciseaux'];
let robotChoice = tabElements[getRandomInt(3)];

boutonPierre.addEventListener('click', () => {
    joueurSpan.textContent = 'Joueur : Pierre';
    robot.textContent = 'Robot : ' + robotChoice;
    getWinner();
});

boutonFeuilles.addEventListener('click', () => {
    joueurSpan.textContent = 'Joueur : Feuilles';
    robot.textContent = 'Robot : ' + robotChoice;
    getWinner();
});

boutonCiseaux.addEventListener('click', () => {
    joueurSpan.textContent = 'Joueur : Ciseaux';
    robot.textContent = 'Robot : ' + robotChoice;
    getWinner();
});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function getWinner() {
    if (joueurSpan.textContent === 'Joueur : Pierre' && robotSpan.textContent === 'Robot : Ciseaux') {
        return resultat.textContent = 'Résultat : Gagné';
    } else if (joueurSpan.textContent === 'Joueur : Feuilles' && robotSpan.textContent === 'Robot : Pierre') {
        return resultat.textContent = 'Resultat : Gagné';
    } else if (joueurSpan.textContent === 'Joueur : Ciseaux' && robotSpan.textContent === 'Robot : Feuilles') {
        return resultat.textContent = 'Résultat : Gagné';
    } else if (joueurSpan.textContent === 'Joueur : Pierre' && robotSpan.textContent === 'Robot : Feuilles') {
        return resultat.textContent = 'Résultat : Perdu';
    } else if (joueurSpan.textContent === 'Joueur : Feuilles' && robotSpan.textContent === 'Robot : Ciseaux') {
        return resultat.textContent = 'Résultat : Perdu';
    } else if (joueurSpan.textContent === 'Joueur : Ciseaux' && robotSpan.textContent === 'Robot : Pierre') {
        return resultat.textContent = 'Résultat : Perdu';
    } else {
        return resultat.textContent = 'Résultat : Egalité';
    }
}