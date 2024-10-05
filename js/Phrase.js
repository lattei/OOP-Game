/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseBox = document.querySelector('#phrase ul');
        let phrasing = Object.values(this.phrase);
        phrasing.forEach((letter) => {
            if (letter === " ") {
                
                phraseBox.innerHTML += `<li class="space"> </li>`;

            } else {
                
                phraseBox.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        });
    }
    /* Returns a bool if char is in phrase */
    checkLetter(char) {
        return this.phrase.includes(char);

    }

    showMatchedLetter(letter) {
        const letterClass = document.querySelectorAll(`.${letter}`);
        for (let i = 0; i < letterClass.length; i++) {
            let matchingLetterClass = letterClass[i];
            // matchingLetterClass.classList.remove("hide");
            // matchingLetterClass.classList.add("show");
            matchingLetterClass.classList.replace("hide","show");
        }

    }
}