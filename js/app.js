/*
 * Create a list that holds all of your cards
 */

const everyCard = document.querySelectorAll('.card');

const listCards = ["fa fa-diamond","fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube" ];

const move = 0;

const container = document.querySelector('.container');

const popup = document.querySelector('.popup');

/*
 * Function for flipping the card
 */

function flipCard() {
for (let i = 0; i <= everyCard.length; i++) {
	const playCards = everyCard[i];
	playCards.addEventListener('click', function() {
		this.classList.add('open', 'show');
	});
};
countMoves();
}
flipCard();

/*
 * function fot verifying if the cards match or not
 */

function verifyMatch () {
    let openCard = document.querySelectorAll('.open');
    let oc = openCard.length;
    if (oc === 2 && openCard.children([0]).html() === openCard.children([1]).html()) {
        this.classList.remove('open', 'show');
        this.classList.add('match');
    } else {
        this.classList.remove('open', 'show');
        this.classList.add('unmatch');
    }
}
verifyMatch();

setTimeout(verifyMatch(), 1000);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

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

// Card's classes removal

function removeSymbols () {
    for (let i = 0; i <= everyCard.length; i++) {
    const playCards = everyCard[i];
    playCards.removeChild(playCards.childNodes[0]);
    };
}

// Shuffle symbols to the card

function shuffleSymbols () {
    for (let i = 0; i <= everyCard.length; i++) {
    const playCards = everyCard[i];
    playCards.append('<i></i>');
    };
    for (let y = 0; y <= listCards.length; y++) {
    $('i').addClass(function shuffle (listCards));
    };
}

// Function for move counter

function countMoves () {
    everyCard.onclick = function() {
        move += 1;
        $('.moves').innerHTML = move;
    }
    countStars();
}

// Function for take the stars away

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

// Function for running the timer

function runTimer() {
    everyCard.onclick = setTimer();
}
runTimer();

// Function for setting the timer
// Use from https://www.w3schools.com/jsref/met_win_clearinterval.asp

function setTimer() {
    var myVar = setInterval(function(){ myTimer() }, 1000);

    function myTimer() {
    var d = new Date();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}
}

// Function for stopping the timer

function myStopFunction() {
    clearInterval(myVar);
}

// Function for restarting the game

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

// Function for adjustment the text in Pop Up

function starsNo() {
    let sn = $('.fa fa-star').length;
    $('.starsNumber').html(sn);
}

// Function when game is over

function endOfGame() {
    let matchCard = document.querySelectorAll('.match');
    if (matchCard.length === 16) {
        myStopFunction();
        starsNo();
        countMoves();
        container.style.display === 'none';
        popup.style.display = 'block';
    }
}
endOfGame();

setTimeout(endOfGame(), 1000);

// Function for play game again when click on the button

function playAgain() {
    $('.button').onclick = function() {
        container.style.display = 'block';
        popup.style.display === 'none';
        restartGame();
    };
}
playAgain();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
