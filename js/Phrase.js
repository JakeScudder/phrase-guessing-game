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
    checkLetter() {
        //Listen for click
        document.querySelector('#qwerty').addEventListener('click', function(event){
            console.log('click');
            let arr = game.activePhrase.phrase.split("");
            //For each letter in the phrase, if that matches the letter that is clicked, return true;
            arr.forEach(letter => {
                if (event.target.textContent === letter) {
                    return true;
                } else {
                    return false;
                }
            });
        });
    }


    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter() {
        if (checkletter()) {
            //Find letters in the phrase
            let arr = this.phrase.split("")
            //Select all List Elements
            let li = document.querySelectorAll('li')
            //If the list element matches the class name of the letter then
            //display that element
            arr.forEach(letter => {
                for (let i = 0; i < li.length; i++) {
                    if (li[i].className = `hide letter ${letter}`) {
                        li[i].className = `show letter ${letter}`;
                    }
                }
            });
        }
    }
}
