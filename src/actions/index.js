// Action creators can have side-effects
import {WordGame} from '../WordGame';
let nextGameId = 1;
let wordGuessId = 1;
let numberGuessId = 1;
let words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];

export const NEW_NUMBER_GAME_CREATED = 'NEW_NUMBER_GAME_CREATED';
export const newNumberGameCreated = () => (
    {
        type: NEW_NUMBER_GAME_CREATED,
        payload:  {
            id: nextGameId++
        }
    }
);

export const NEW_WORD_GAME_CREATED = 'NEW_WORD_GAME_CREATED';
export const newWordGameCreated = (name) => (
    {
        type: NEW_WORD_GAME_CREATED,
        payload:  {
            id: nextGameId++,
            targetWord: WordGame.selectWord(words)
        }
    }
);

export const WORD_GUESS_SUBMITTED = 'WORD_GUESS_SUBMITTED';
export const wordGuessSubmitted = (guess) => (
    {
        type: WORD_GUESS_SUBMITTED,
        payload:  {
            guess: guess.guess,
            id: wordGuessId++
        }
    }
);

export const NUMBER_GUESS_SUBMITTED = 'NUMBER_GUESS_SUBMITTED';
export const numberGuessSubmitted = (guess) => (
    {
        type: WORD_GUESS_SUBMITTED,
        payload:  {
            guess: guess.guess,
            id: numberGuessId++
        }
    }
);
