/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;

document.getElementById('btn__reset').addEventListener('click', function(){
  game = new Game();
  game.startGame();
});

let keyboard = document.getElementsByClassName('key');
for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener('click', function(event){
    game.handleInteraction(event.target);
    });
}
