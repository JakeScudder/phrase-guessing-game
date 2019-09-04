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
        //Reset keyboard class names to play the next game
        let keys = document.querySelectorAll('.keyrow button')
        for (let i = 0; i < keys.length; i++) {
            keys[i].className = 'key';
            keys[i].disabled = false;
        }
        let overlay = document.getElementById('overlay');
        overlay.className = "animated fadeOutRight";
        let randomPhrase = this.getRandomPhrase()
        this.activePhrase = new Phrase(randomPhrase.phrase);
        this.activePhrase.addPhraseToDisplay();

        //If hearts were changed to lost hearts, live hearts are repopulated
        let scoreboard = document.querySelectorAll('img');
        for (let i = 0; i < scoreboard.length; i++) {
            if (scoreboard[i].src.includes('images/lostHeart.png')) {
                scoreboard[i].src = 'images/liveHeart.png'
            }
        }
        //Remove previous games winning phrase
        let h5 = document.querySelectorAll('h5');
        h5.forEach(winPhrase => winPhrase.style.display = 'none')
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    * Creates an empty array
    * If current list item has a className of show letter ${letter}
    * Then it is true and pushed into the truthyArray
    * If it is a space, it is also true and pushed into the arraay
    * If the truthyArray include a false, it is false
    * If it is entirely true, the function resolves to true
    */
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
     *
     * A for loop runs until it encounters a live heart, then it changes that image to a lost heart
     * The missed counter is increased and the loop breaks
     * Checks if the missed counter is = to 5
     * gameOver function initiated if counter = 5
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
        if (truthy) {
            h1.textContent = "Sorry, better luck next time!";
            h1.style.display = 'block';
            overlay.className = 'lose animated fadeInUp';
        } else {
            h1.textContent = "Congratulations, you win!";
            h1.style.display = 'block';
            overlay.className = 'win animated fadeInUp';
        }
        //Include phrase in winning screen
        let h5Test = document.getElementById('win-phrase');
        if (h5Test === null) {
            let h2 = document.getElementById('game-title');
            let phraseAnswer = this.activePhrase.phrase
            let h5 = document.createElement('p');
            h5.innerHTML = `<h5 id='win-phrase'>"${phraseAnswer}"</h5>`
            h2.appendChild(h5);
        }

        //Remove li elements from phrase when game is over
        let li = document.querySelectorAll('#phrase li')
        li.forEach(li => li.remove());

        //Disable keyboard event listener until game is started again
        if (h1.style.display === 'block') {
            document.removeEventListener('keydown', keyResponse);
        }


    }

    /**
     * Handles onscreen keyboard button clicks
     * Also handles actual keyboard presses
     * @param (HTMLButtonElement) button - The clicked or keydown button element
     * If the previous letter was correct, checkForWin() then call gameOver() if checkForWin
     * evaluates to true
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
