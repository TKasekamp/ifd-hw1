/**
 * Game holds the generated number and current status.
 */
export class NumberGame {

    static generateNumber() {
        return Math.floor(Math.random() * (9));
    }

    static makeGuess(target, guess) {
        let result = 'equal';
        let gameOver = false;

        if (guess > target) {
            result = 'greater';
        } else if (guess < target) {
            result = 'lesser';
        } else {
            gameOver = true;
        }
        return {result, gameOver};
    }
}
