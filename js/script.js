{
const rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', function(){playGame(1);});

const paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', function(){playGame(2);});

const scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', function(){playGame(3);});
}