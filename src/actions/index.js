let nextGameId = 0;
let guessId = 0;

export const createPayloadForwardingAction = (type) => (payload) =>
    ({type: type, payload: payload});

// COMMON GAME CREATION
export const NEW_GAME_REQUESTED = 'NEW_GAME_REQUESTED';
export const newGameRequested = (type) => (
    {
        type: NEW_GAME_REQUESTED,
        payload: {
            localId: (nextGameId++).toString(),
            type: type
        }
    }
);

export const NEW_GAME_CREATED = 'NEW_GAME_CREATED';
export const newGameCreated = createPayloadForwardingAction(NEW_GAME_CREATED);

export const NEW_GAME_FAILED = 'NEW_GAME_FAILED';
export const newGameFailed = createPayloadForwardingAction(NEW_GAME_FAILED);

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
