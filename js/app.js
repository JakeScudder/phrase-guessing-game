/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;

document.getElementById('btn__reset').addEventListener('click', function(){
  game = new Game();
  game.startGame();
});
