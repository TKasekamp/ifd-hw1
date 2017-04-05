import {
    NEW_NUMBER_GAME_CREATED,
    NEW_WORD_GAME_CREATED
} from '../actions/index.js';
import wordReducer from './WordGameReducer';
import numberReducer from './NumberGameReducer';


const initialState = [];

const gameReducer = (state = initialState, action) => {
    if (action.type.startsWith('word/')) {
        return [
            ...state.slice(0, action.index),
            wordReducer(state[action.index], action),
            ...state.slice(action.index + 1)
        ]
    }
    else if (action.type.startsWith('number/')) {
        return [
            ...state.slice(0, action.index),
            numberReducer(state[action.index], action),
            ...state.slice(action.index + 1)
        ]
    }

    switch (action.type) {
        case NEW_NUMBER_GAME_CREATED: {

            const games = state.concat({
                id: action.payload.id,
                name : 'number'

            });
            return games;
        }
        case NEW_WORD_GAME_CREATED: {

            const games = state.concat({
                id: action.payload.id,
                name : 'word',
                gameOver : false,
                targetWord : action.payload.targetWord,
                results: []
            });
            return games;
        }

        default:
            return state;
    }
};

export default gameReducer;