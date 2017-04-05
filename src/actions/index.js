// Action creators can have side-effects
import {WordGame} from '../WordGame';
let nextGameId = 1;
let wordGuessId = 1;
let words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];

export const NEW_GAME_CREATED = 'NEW_GAME_CREATED';
export const newGameCreated = (name) => (
    {
        type: NEW_GAME_CREATED,
        payload:  {
            name: name,
            id: nextGameId++
        }
    }
);

export const NEW_WORD_GAME_CREATED = 'NEW_WORD_GAME_CREATED';
export const newWordGameCreated = (name) => (
    {
        type: NEW_WORD_GAME_CREATED,
        payload:  {
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

// Export action type constants for reducers to use
export const COMMENT_SUBMITTED = 'COMMENT_SUBMITTED';
export const commentSubmitted = () => {
  // An action must be a plain JavaScript object (no instances of classes!)
  return {
    type: COMMENT_SUBMITTED,
    payload: {
      id: 1
    }
  };
};

export const AUTHOR_SET = 'AUTHOR_SET';
export const authorSet = (author) => (
  {
    type: AUTHOR_SET,
    payload: author
  }
);

// A helper function can be created to create trivial actions and avoid
// clutter.
const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});

export const TEXT_SET = 'TEXT_SET';
export const textSet = createPayloadForwardingAction(TEXT_SET);
