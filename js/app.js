/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const gameOverlay = document.getElementById('overlay');
const startButton = document.querySelector('#btn__reset');
const onScreenKeyboard = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');

startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
});



onScreenKeyboard.addEventListener('click', (e) => {
    const clicked  = e.target;
    clicked.className === 'key' ? game.handleInteraction(clicked) : null;
})

/* Exceeds Expectations: Handling Keyboard input */
document.addEventListener('keyup', (e) => {
    const tappedKey = e.key.toLowerCase();
    if (gameOverlay.style.display === 'none') {
        keys.forEach(key => {
        tappedKey === key.textContent ? game.handleInteraction(key) : null;
        });
    }
    
})