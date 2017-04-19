import {WordGame} from '../WordGame';
import {NumberGame} from '../NumberGame';
let nextGameId = 0;
let guessId = 0;
let words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];

const createPayloadForwardingAction = (type) => (payload) =>
    ({type: type, payload: payload});

export const NEW_NUMBER_GAME_REQUESTED = 'NEW_NUMBER_GAME_REQUESTED';
export const newNumberGameRequested = () => (
    {
        type: NEW_NUMBER_GAME_REQUESTED,
        payload: {
            localId: (nextGameId++).toString(),
            type: 'guess_number'
        }
    }
);


export const NEW_NUMBER_GAME_CREATED = 'NEW_NUMBER_GAME_CREATED';
export const newNumberGameCreated = createPayloadForwardingAction(NEW_NUMBER_GAME_CREATED);

export const NEW_NUMBER_GAME_FAILED = 'NEW_NUMBER_GAME_FAILED';
export const newNumberGameFailed = createPayloadForwardingAction(NEW_NUMBER_GAME_FAILED);

export const NUMBER_GUESS_SUBMITTED = 'NUMBER_GUESS_SUBMITTED';
export const numberGuessSubmitted = (guess) => (
    {
        type: NUMBER_GUESS_SUBMITTED,
        payload: {
            guess: guess.guess,
            id: guessId++,
            gameId: guess.id
        }
    }
);


export const NUMBER_GUESS_SUCCEEDED = 'NUMBER_GUESS_SUCCEEDED';
export const numberGuessSucceeded = createPayloadForwardingAction(NUMBER_GUESS_SUCCEEDED);

export const NUMBER_GUESS_FAILED = 'NUMBER_GAME_FAILED';
export const numberGuessFailed = createPayloadForwardingAction(NUMBER_GUESS_FAILED);

export const NEW_WORD_GAME_CREATED = 'NEW_WORD_GAME_CREATED';
export const newWordGameCreated = () => (
    {
        type: NEW_WORD_GAME_CREATED,
        payload: {
            id: nextGameId++,
            targetWord: WordGame.selectWord(words)
        }
    }
);

export const WORD_GUESS_SUBMITTED = 'WORD_GUESS_SUBMITTED';
export const wordGuessSubmitted = (guess) => (
    {
        type: WORD_GUESS_SUBMITTED,
        payload: {
            guess: guess.guess,
            id: guessId++,
            index: guess.id
        }
    }
);


