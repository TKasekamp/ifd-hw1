/**
 * Game holds the generated number and current status.
 */
export class NumberGame {
    constructor() {
        this.generateNumber();
        this.gameOver = false;
    }

    generateNumber() {
        this.number = Math.floor(Math.random() * (9));
    }

    makeGuess(guess) {
        let result = 'equal';

        if (guess > this.number) {
            result = 'greater';
        } else if (guess < this.number) {
            result = 'lesser';
        } else {
            this.gameOver = true;
        }
        return result;
    }

    getNumber() {
        return this.number;
    }

    setNumber(number) {
        this.number = number;
    }

    getGameOver() {
        return this.gameOver;
    }


}
