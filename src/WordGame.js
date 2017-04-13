export class WordGame {

    constructor() {
        this.words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
    }

    static selectWord(words) {
        return words[Math.floor(Math.random() * words.length)];
    }

    static makeGuess(target, guess) {
        let result = [];
        let check = true;
        let status = 'waiting_for_move';

        for (let i = 0, len = guess.length; i < len; i++) {
            let r = guess[i] === target[i];

            if(r) {
                check = check && r;
            } else {
                check = false;
            }
            result.push(r);
        }

        if(target === guess) {
            status = 'finished';
        }
        return {result, status};
    }

}
