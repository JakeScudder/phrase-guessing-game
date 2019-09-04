/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;

document.getElementById('btn__reset').addEventListener('click', function(){
  game = new Game();
  game.startGame();
});

// Select all the keys on the Keyboard
// Then loop over them and apply the event listener which then applies handleInteraction()
let keyboard = document.getElementsByClassName('key');
for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener('click', function(event){
    game.handleInteraction(event.target);
    });
}

for (let i = 0; i < keyboard.length; i++) {
    document.addEventListener('keydown', function(event) {
        if (keyboard[i].textContent === event.key) {
            game.handleInteraction(keyboard[i]);
        }
    });
}
