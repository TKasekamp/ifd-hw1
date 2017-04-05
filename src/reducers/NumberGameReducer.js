import {
    NEW_NUMBER_GAME_CREATED,
} from '../actions/index.js';
import {WordGame} from '../WordGame';

const initialState = {
    targetNumber : 3,
    gameOver: false,
    results: []
};

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_NUMBER_GAME_CREATED: {
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

// Selector functions are usually specified close to reducers as they must be
// pure functions that operator on state (similar to reducers).
export const filterComments = ({comments, filterText}) => {
    return comments.filter((comment) =>
        comment.author.match(filterText) || comment.text.match(filterText)
    );
};
