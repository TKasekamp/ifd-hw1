import {combineReducers} from 'redux';
import GameReducer from './GameReducer';

// `combineReducers` is used to create different _slices_ of application state
// which are managed by different reducers.
export default combineReducers({
    gameReducer: GameReducer

})
;
