/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;
let keyboard = document.getElementsByClassName('key');
let h1 = document.getElementById('game-over-message');

// starts new game when the start game button is pressed
document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
    keyResponse();
});

// Select all the keys on the Keyboard
// Then loop over them and apply the event listener which then applies handleInteraction()

for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener('click', function(event){
    game.handleInteraction(event.target);
    console.log('click');
    });
}

//Keyboard functionality:
//Loops through all keyboard buttons, if the event from the keyboard press
//matches the textContent of the keyboard element button,
//then that game.handleInteraction method is called on that element.
function keyResponse() {
    for (let i = 0; i < keyboard.length; i++) {
            document.addEventListener('keydown', function(event) {
                    if (keyboard[i].textContent === event.key) {
                        game.handleInteraction(keyboard[i]);
                }
            });
    }
}
