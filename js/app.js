const everyCard = document.querySelectorAll('.card');

const listCards = ['fa fa-diamond','fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];

const move = 0;

const container = document.querySelector('.container');

const popup = document.querySelector('.popup');

 /**
* @description Flips the cards
* @returns {functions}
*/

function flipCard() {
for (let i = 0; i <= everyCard.length; i++) {
	const playCards = everyCard[i];
	playCards.addEventListener('click', function() {
		this.classList.add('open', 'show');
	});
};
countMoves();
verifyMatch();
noMatch();
}
flipCard();

 /**
* @description Verifies if the cards match or not
*/

function verifyMatch () {
    let openCard = document.querySelectorAll('.open');
    let oc = openCard.length;
    if (oc === 2 && openCard.children([0]).html() === openCard.children([1]).html()) {
        this.removeClass('open', 'show').addClass('match');
    } else {
        this.removeClass('open', 'show').addClass('unmatch');
    };
}

setTimeout(verifyMatch(), 2000);

 /**
* @description Removes class if cards don't match
*/

function noMatch() {
    $('.card').removeClass('unmatch');
}
setTimeout(noMatch(), 2200);

/**
* @description Shuffles cards
* @param {array}
* @returns {array}
* @source http://stackoverflow.com/a/2450976
*/

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/**
* @description Removes card's classes
*/

function removeSymbols () {
    for (let i = 0; i <= everyCard.length; i++) {
    const playCards = everyCard[i];
    playCards.removeChild(playCards.childNodes[0]);
    };
}

/**
* @description Shuffles the symbols to the card
*/

function shuffleSymbols () {
    for (let i = 0; i <= everyCard.length; i++) {
    const playCards = everyCard[i];
    playCards.append('<i></i>');
    };
    for (let y = 0; y <= listCards.length; y++) {
    $('i').addClass(function shuffle (listCards));
    };
}

 /**
* @description Moves a counter
* @returns {function}
*/

function countMoves () {
    everyCard.onclick = function() {
        move += 1;
        $('.moves').innerHTML = move;
    }
    countStars();
}

 /**
* @description Takes the stars away
*/

function countStars() {
    if (move <= 17) {
        return null;
    } if else (move > 17 || move <= 22) {
       $('.third').removeChild('i') &&
       $('.third').append('<i class="fa fa-star-o">');
    } if else (move > 22 || move <= 27) {
       $('.second, .third').removeChild('i') &&
       $('.second, .third').append('<i class="fa fa-star-o">');
    } else {
       $('.first, .second, .third').removeChild('i') &&
       $('.first, .second, .third').append('<i class="fa fa-star-o">');
    };
}

/**
* @description Runs the timer
* @returns {function}
*/

function runTimer() {
    everyCard.onclick = setTimer();
}
runTimer();

/**
* @description Sets the timer
* @source https://www.w3schools.com/jsref/met_win_clearinterval.asp
*/

function setTimer() {
    var myVar = setInterval(function(){ myTimer() }, 1000);

    function myTimer() {
    var d = new Date();
    document.getElementById('timer').innerHTML = d.toLocaleTimeString();
    }
}

/**
* @description Stops the timer
* @source https://www.w3schools.com/jsref/met_win_clearinterval.asp
*/

function myStopFunction() {
    clearInterval(myVar);
}

/**
* @description Restarts the game
* @returns {function}
*/

function restartGame() {
    $('.restart').onclick = function() {
        removeSymbols();
        shuffleSymbols();
        countMoves();
        countStars();
        runTimer();
    }
}
restartGame();

/**
* @description Adjusts the text in Pop Up
*/

function starsNo() {
    let sn = $('.fa fa-star').length;
    $('.starsNumber').html(sn);
}

/**
* @description Finishes the game
* @returns {function}
*/

function endOfGame() {
    let matchCard = document.querySelectorAll('.match');
    if (matchCard.length === 16) {
        myStopFunction();
        starsNo();
        countMoves();
        container.style.display === 'none';
        popup.style.display = 'block';
    };
}
endOfGame();

setTimeout(endOfGame(), 1000);

/**
* @description Plays game again when click on the button
* @returns {function}
*/

function playAgain() {
    $('.button').onclick = function() {
        container.style.display = 'block';
        popup.style.display === 'none';
        restartGame();
    }
}
playAgain();