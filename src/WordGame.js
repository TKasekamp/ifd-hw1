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
        let check = true;

        for (let i = 0, len = guess.length; i < len; i++) {
            let r = guess[i] === this.word[i];

            if(r) {
                check = check && r;
            } else {
                check = false;
            }
            result.push(r);
        }
        this.winCheck(check);
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

    winCheck(check) {
        if(check) {
            this.gameOver = true;
        }
    }
}
