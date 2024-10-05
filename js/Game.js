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

    handleInteraction() {


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
            this.gameOver(true);
        } else {
            return false;
        }
    }

    gameOver(gameWon) {
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
    }

}