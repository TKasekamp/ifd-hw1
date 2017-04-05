/**
 * Game holds the selected word and current status.
 */
export class WordGame {

    constructor() {
        this.words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
    }

    selectWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }

    static selectWord(words) {
        return words[Math.floor(Math.random() * words.length)];
    }

    static makeGuess(target, guess) {
        let result = [];
        let check = true;

        for (let i = 0, len = guess.length; i < len; i++) {
            let r = guess[i] === target[i];

            if(r) {
                check = check && r;
            } else {
                check = false;
            }
            result.push(r);
        }

        let gameOver = target === guess;
        // console.log(check);
        return {result, gameOver};
    }

    // getWord() {
    //     return this.word;
    // }
    //
    // setWord(word) {
    //     this.word = word;
    // }
    //
    // getGameOver() {
    //     return this.gameOver;
    // }
    //
    // winCheck(check) {
    //     if(check) {
    //         this.gameOver = true;
    //     }
    // }
}
