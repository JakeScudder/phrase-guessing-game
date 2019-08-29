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
        {phrase:"Run Forest run"},
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

    startGame() {
        
    }



 }
