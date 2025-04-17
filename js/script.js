
let rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', function(){playGame(1);});

let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', function(){playGame(2);});

let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', function(){playGame(3);});