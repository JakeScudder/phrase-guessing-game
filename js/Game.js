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
        {phrase:"A diamond in the rough"},
        {phrase:"With great power comes great responsibility"},
        {phrase:"A drop in the ocean"},
        {phrase:"A fool and his money are soon parted"},
        {phrase:"A fool's paradise"},
        {phrase:"A journey of a thousand miles begins with a single step"},
        {phrase:"A penny for your thoughts"},
        {phrase:"Chick flick"},
        {phrase:"Heard it through the grapevine"},
        {phrase:"Hell or high water"},
        {phrase:"Hold your horses"},
        {phrase:"Hush puppies"},
        {phrase:"How now brown cow"},
        {phrase:"Shiver me timbers"},
        {phrase:"The shot heard round the world"},
        {phrase:"Speak of the Devil"},
        {phrase:"Spill the beans"},
        {phrase:"Give it to me straight"},
        {phrase:"Dumb it down a shade"},
        {phrase:"Such is life"},
        {phrase:"thats all she wrote"},
        {phrase:"the bees knees"},
        {phrase:"the belle of the ball"},
        {phrase:"The jig is up"},
        {phrase:"the pen is mightier than the sword"},
        {phrase:"the road less travelled"},
        {phrase:"the skys the limit"},
        {phrase:"things that go bump in the night"},
        ];
        return phrases;
    };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * 30);
        return this.phrases[randomNum];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
      Initially the overlay is hidden, a random phrase is chosen.
      this.activePhrase is assigned to the new Phrase object and a randomPhrase is passed in as an argument
      addPhraseToDisplay is called on the activePhrase object
    */
    startGame() {
        //Reset keyboard to play the next game
        let keys = document.querySelectorAll('.keyrow button')
        for (let i = 0; i < keys.length; i++) {
            keys[i].className = 'key';
            keys[i].disabled = false;
        }
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        let randomPhrase = this.getRandomPhrase()
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();




        //Add Hearts
        let scoreboard = document.querySelectorAll('img');
        for (let i = 0; i < scoreboard.length; i++) {
            if (scoreboard[i].src.includes('images/lostHeart.png')) {
                scoreboard[i].src = 'images/liveHeart.png'
            }
        }
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
     * @param {boolean} truthy - If gameOver is True, the player lost.
     */
    gameOver(truthy) {
        let overlay = document.getElementById('overlay');
        let h1 = document.getElementById('game-over-message');
        h1.textContent = "Sorry, better luck next time!";
        overlay.style.display = 'block';
        if (truthy) {
            h1.style.display = 'block';
            overlay.className = 'lose';
        } else {
            h1.textContent = "Congratulations, you win!";
            h1.style.display = 'block';
            overlay.className = 'win';
        }
        //Remove li elements from phrase
        let li = document.querySelectorAll('#phrase li')
        li.forEach(li => li.remove());


    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.checkLetter(button.textContent)) {
            button.className = 'wrong';
            this.removeLife();
        } else if (this.activePhrase.checkLetter(button.textContent)){
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                    this.gameOver(false);
                }
        }

        }




 }
