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
        let divUl = document.querySelectorAll("#phrase ul");
        console.log(divUl)
        let html = "";

        //Split the phrase into an array of characters then check each letter and assign it a class
        let arr = this.phrase.split("")
        arr.forEach(character => {
            let test = /[a-z]/.test(character);
            if (test) {
                html += `<li class="hide letter ${character}">${character}</li>`
            } else {
                html += '<li class="space"> </li>'
            }

        });

        return divUl.innerHTML = html;
    }
}
