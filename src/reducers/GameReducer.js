import {
    NEW_NUMBER_GAME_CREATED,
    NEW_WORD_GAME_CREATED
} from '../actions/index.js';

const initialState = {
    games: []
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_NUMBER_GAME_CREATED: {

            const games = state.games.concat({
                id: action.payload.id,
                name : 'number'

            });
            return {...state, games};
        }
        case NEW_WORD_GAME_CREATED: {

            const games = state.games.concat({
                id: action.payload.id,
                name : 'word',
                gameOver : false,
                targetWord : action.payload.targetWord,
                results: []
            });
            return {...state, games};
        }

        default:
            return state;
    }
};

export default gameReducer;