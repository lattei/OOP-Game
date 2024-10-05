/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('Such devastation this was not my intention'), new Phrase('Ball up top'), new Phrase('Why are you running'), new Phrase('Halloween is not my favorite thing because it is a free pass for the killer'), new Phrase('Very demure very mindful')];
        this.activePhrase = null;
    }

    startGame() {
        const gameOverlay = document.getElementById('overlay');
        gameOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];

    }

    handleInteraction(button) {
        button.disabled = true;
        /*If the phrase does not include the guessed letter, add the `wrong` CSS class to the
selected letter's keyboard button and call the `removeLife()` method. */
        const char = button.textContent;
        if (!this.activePhrase.checkLetter(char)) {
            button.classList.add("wrong");
            this.removeLife();
        } else {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(char);
            this.checkForWin();
        }



    }

    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = "images/lostHeart.png"
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    checkForWin() {
        const hiddenLetters = document.querySelectorAll(`.hide`);
        if (hiddenLetters.length === 0) {
            //We invoke a gameOver! :)
            this.gameOver(true);
        } else {
            return false;
        }
    }

    gameOver(gameWon) {
        /*Checking to see if game is won or not */
        const gameOverlay = document.getElementById('overlay');
        const gameOverMsg = document.getElementById('game-over-message');
        if (!gameWon) {
            gameOverlay.style.display = "block";
            gameOverMsg.textContent = "Oop, you lost. Try again?";
            gameOverlay.classList.remove("start");
            gameOverlay.classList.remove("win");
            gameOverlay.classList.add("lose");
            
        } else {
            gameOverlay.style.display = "block";
            gameOverMsg.textContent = "Nice job buddy!";
            gameOverlay.classList.remove("start");
            gameOverlay.classList.remove("lose");
            gameOverlay.classList.add("win");
        }
        /* Resets the board upon gameOver */
        const listElems = document.querySelectorAll('#phrase li');
        listElems.forEach(listElement => listElement.remove());

        const onScreenKeyboard = document.querySelectorAll('#qwerty button');
        onScreenKeyboard.forEach(key => {
            key.disabled = false;
            key.classList.remove("chosen");
            key.classList.remove("wrong");
        });
        this.missed = 0;
        const hearts = document.querySelectorAll(".tries img");
        hearts.forEach(heart => {
            heart.src = "images/liveHeart.png"
        });

    }

}