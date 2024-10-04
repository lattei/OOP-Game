/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseBox = document.querySelector('#phrase ul');
        Object.values(this.phrase).forEach((letter) => {
            if (letter === " ") {
                console.log("there is a space");
                phraseBox.innerHTML += `<li class="space"> </li>`;

            } else {
                console.log("this a letter");
                phraseBox.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        });
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}