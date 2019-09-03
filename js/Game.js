/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
     constructor() {
         this.missed = 0
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     };

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game */

    createPhrases() {
        let phrases = [
        {phrase:"Home is where the heart is"},
        {phrase:"Catch a tiger by the toe"},
        {phrase:"Run Forrest run"},
        {phrase:"With great power comes great responsibility"},
        {phrase:"To infinity and beyond"}
        ];
        return phrases;
    };


    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * 5);
        return this.phrases[randomNum];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
      Initially the overlay is hidden, a random phrase is chosen.
      this.activePhrase is assigned to the new Phrase object and a randomPhrase is passed in as an argument
      addPhraseToDisplay is called on the activePhrase object
    */
    startGame() {
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        let randomPhrase = this.getRandomPhrase()
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin() {
        let li = document.querySelectorAll('#phrase li');
        let truthyArray = [];
        li.forEach(letterElement => {
            if (letterElement.className === `show letter ${letterElement.textContent}`) {
                truthyArray.push(true);
            } else if (letterElement.className === "space"){
                truthyArray.push(true);
            } else {
                truthyArray.push(false);
            }
        });
        if (truthyArray.includes(false)) {
            return false;
        } else {
            return true;
        }
    }

    removeLife() {

    }

    gameOver() {

    }


    handleInteraction() {
        this.activePhrase.checkLetter();
    }



 }
