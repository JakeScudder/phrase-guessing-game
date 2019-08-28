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
         let arr = this.phrase.split("")
         arr.forEach(letter => `<li class="hide letter ${letter}">${letter}</li>`)
     }
 }
