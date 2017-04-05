import {combineReducers} from 'redux';
import WordGameReducer from './WordGameReducer';
import GameReducer from './GameReducer';

// `combineReducers` is used to create different _slices_ of application state
// which are managed by different reducers.
export default combineReducers({
    wordReducer: WordGameReducer,
    gameReducer: GameReducer

})
;
