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

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        let scoreboard = document.querySelectorAll('img');
        for (let i = 0; i < scoreboard.length; i++) {
            if (scoreboard[i].src.includes('images/lostHeart.png')) {
                continue;
            }
            if (scoreboard[i].src.includes('images/liveHeart.png')) {
                scoreboard[i].src = 'images/lostHeart.png';
                this.missed += 1;
                break;
            }

        }
        if (this.missed === 5) {
            this.gameOver(true);
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(truthy) {
        let overlay = document.getElementById('overlay');
        let h1 = document.getElementById('game-over-message');
        overlay.style.display = 'show';

        if (truthy) {
            h1.style.display = 'show';
            overlay.className = 'lose';
        } else {
            overlay.className = 'win';
        }
    }


    handleInteraction() {
        this.activePhrase.checkLetter();
    }



 }
