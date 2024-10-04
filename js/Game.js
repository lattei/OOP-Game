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

}