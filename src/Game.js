/**
 * Created by Tonis on 21.03.2017.
 */
import {Result} from './Result';

export class Game {
    constructor() {
        this.generateNumber();
    }

    generateNumber() {
        this.number = Math.floor(Math.random() * (9));
    }

    makeGuess(guess) {
        result = 'equal';

        if (guess > this.number) {
            result = 'greater';
        }
        else if (guess < this.number) {
            result = 'lesser';
        }
        return new Result(guess, result);
    }

    getNumber() {
        return this.number;
    }

    setNumber(number) {
        this.number = number;
    }


}