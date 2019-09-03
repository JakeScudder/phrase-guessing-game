/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let divUl = document.querySelector("#phrase ul");
        let html = "";

        //Split the phrase into an array of characters then check each letter and assign it a class
        let arr = this.phrase.split("")
        arr.forEach(character => {
            let test = /[a-z]/.test(character);
            if (test) {
                html += `<li class="hide letter ${character}">${character}</li>`;
            } else {
                html += '<li class="space"> </li>'
            }

        });

        divUl.innerHTML = html;
        return divUl;
    }
    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        let phrase = this.phrase
        if (phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        let li = document.querySelectorAll('li')
        for (let i = 0; i < li.length; i++) {
            if (li[i].className === `hide letter ${letter}`) {
                li[i].className = `show letter ${letter}`;
            } else {
            }
        }
    }
}
