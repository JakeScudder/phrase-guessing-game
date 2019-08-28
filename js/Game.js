/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         let missed = 0
         let phrases = createPhrases();
         let activePhrase = null;
     }

     /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game */

    createPhrases() {
        let phrases = [
        {phrase:"Home is where the heart is"},
        {phrase:"Catch a tiger by the toe"},
        {phrase:"Run Forest, run"},
        {phrase:"With great power comes great responsibility"},
        {phrase:"To infinity and beyond"}
        ];
        return phrases;
    };



 }
