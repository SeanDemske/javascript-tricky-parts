function guessingGame() {
    let gameOver = false;
    let counter = 0;
    const randomNum = Math.floor(Math.random() * 100);
    return function(guess) {
        if (gameOver) {
            return "The game is over, you already won!"
        }
        counter++;
        if (guess === randomNum) {
            gameOver = true;
            return `You win! You found ${randomNum} in ${counter} guesses.`;
        }
        if (guess < randomNum) {
            return `${guess} is too low!`;
        }
        if (guess > randomNum) {
            return `${guess} is too high!`
        }
    }
}

module.exports = { guessingGame };
