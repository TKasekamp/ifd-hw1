import {
    WORD_GUESS_SUBMITTED,
} from '../actions/index.js';
import {WordGame} from '../WordGame';

const wordReducer = (state = {}, action) => {
    switch (action.type) {
        case WORD_GUESS_SUBMITTED: {
            const r = WordGame.makeGuess(state.targetWord, action.payload.guess);

            const wordGuesses = state.results.concat({
                id: action.payload.id,
                guess : action.payload.guess,
                result : r.result
            });
            return {...state, results: wordGuesses, gameOver: r.gameOver};
        }
        default:
            return state;
    }
};

export default wordReducer;

