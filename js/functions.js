function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(number){
    if (number == 1) {
        moveName = 'kamień';
    }
    else if (number == 2){
        moveName = 'papier';
    }
    else if (number == 3){
        moveName = 'nożyce';
    }
    else {
        moveName = 'Nieprawidłowy ruch!';
    }
    return moveName;
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves: ', argComputerMove, argPlayerMove);
    let outcome = 'nieznany wynik';
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        outcome = 'Brawo, wygrałeś!';
    }
    else if ((argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove== 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
        outcome = 'Przykro mi, przegrałeś!';
    }
    else if (argComputerMove == argPlayerMove) {
        outcome = 'Remis!';
    }
    else if (argPlayerMove != 'kamień' && argPlayerMove != 'papier' && argPlayerMove != 'nożyce') {
        outcome = argPlayerMove + ' Wybierz 1: kamień, 2: papier lub 3: nożyce.';    
    }

    printMessage('Twój ruch to: ' + argPlayerMove);
    printMessage('Ruch komputera to: ' + argComputerMove);
    printMessage(outcome);
}

function playGame(playGameInput){
    clearMessages();
    let playerInput = playGameInput;
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = `nieznany ruch`;
    playerMove = getMoveName(playerInput);

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = 'nieznany ruch';
    computerMove = getMoveName(randomNumber);

    displayResult(computerMove, playerMove)
}