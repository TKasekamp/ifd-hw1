import {
    WORD_GUESS_SUBMITTED,
} from '../actions/index.js';

const initialState = {
    targetWord : '',
    gameOver: false,
    results: []
};

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case WORD_GUESS_SUBMITTED: {
            const wordGuesses = state.results.concat({
                id: action.payload.id,
                guess : action.payload.guess,
                result : [false, false, false, false, false]
            });
            return {...state, results: wordGuesses};
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
