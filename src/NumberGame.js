/**
 * Game holds the generated number and current status.
 */
export class NumberGame {

    static generateNumber() {
        return Math.floor(Math.random() * (9));
    }

    static makeGuess(target, guess) {
        let comparedToAnswer = 'EQ';
        let gameOver = false;

        if (guess > target) {
            comparedToAnswer = 'GT';
        } else if (guess < target) {
            comparedToAnswer = 'LT';
        } else {
            gameOver = true;
        }
        return {comparedToAnswer, gameOver};
    }
}
