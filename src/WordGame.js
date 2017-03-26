/**
 * Game holds the selected word and current status.
 */
export class WordGame {

    constructor() {
        this.words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
        this.selectWord();
        this.gameOver = false;
    }

    selectWord() {
        this.word = this.words[Math.floor(Math.random() * this.words.length)];
    }

    makeGuess(guess) {
        let result = [];

        return result;
    }

    getWord() {
        return this.word;
    }

    setWord(word) {
        this.word = word;
    }

    getGameOver() {
        return this.gameOver;
    }
}
