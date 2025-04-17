let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';
if (randomNumber == 1) {
    computerMove = 'kamień';
}
else if (randomNumber == 2){
    computerMove = 'papier';
}
else if (randomNumber == 3){
    computerMove = 'nożyce';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = `nieznany ruch`;
if (playerInput == '1') {
    playerMove = 'kamień';
}
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nożyce';
}

let outcome = 'nieznany wynik';
if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
    outcome = 'Brawo, wygrałeś!';
}
else if ((computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'papier') || (computerMove == 'kamień' && playerMove == 'nożyce')) {
    outcome = 'Przykro mi, przegrałeś!';
}
else if (computerMove == playerMove) {
    outcome = 'Remis!';
}
else if (playerInput != '1' && playerInput != '2' && playerInput != '3') {
    outcome = 'Niperawidłowy ruch! Wybierz 1: kamień, 2: papier lub 3: nożyce.';
}

printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);
printMessage(outcome);