let nextGameId = 0;
let guessId = 0;

const createPayloadForwardingAction = (type) => (payload) =>
    ({type: type, payload: payload});

// NUMBER GAME

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

// NUMBER GAME GUESS

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

// WORD GAME

export const NEW_WORD_GAME_REQUESTED = 'NEW_WORD_GAME_REQUESTED';
export const newWordGameRequested = () => (
    {
        type: NEW_WORD_GAME_REQUESTED,
        payload: {
            localId: (nextGameId++).toString(),
            type: 'guess_word'
        }
    }
);

export const NEW_WORD_GAME_CREATED = 'NEW_WORD_GAME_CREATED';
export const newWordGameCreated = createPayloadForwardingAction(NEW_WORD_GAME_CREATED);

export const NEW_WORD_GAME_FAILED = 'NEW_WORD_GAME_FAILED';
export const newWordGameFailed = createPayloadForwardingAction(NEW_WORD_GAME_FAILED);

// WORD GAME GUESS

export const WORD_GUESS_SUBMITTED = 'WORD_GUESS_SUBMITTED';
export const wordGuessSubmitted = (guess) => (
    {
        type: WORD_GUESS_SUBMITTED,
        payload: {
            guess: guess.guess,
            id: guessId++,
            gameId: guess.id
        }
    }
);

export const WORD_GUESS_SUCCEEDED = 'WORD_GUESS_SUCCEEDED';
export const wordGuessSucceeded = createPayloadForwardingAction(WORD_GUESS_SUCCEEDED);

export const WORD_GUESS_FAILED = 'WORD_GAME_FAILED';
export const wordGuessFailed = createPayloadForwardingAction(WORD_GUESS_FAILED);
