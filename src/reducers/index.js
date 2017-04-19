import {combineReducers} from 'redux';
import games from './Games';

// `combineReducers` is used to create different _slices_ of application state
// which are managed by different reducers.
export default combineReducers({
    games: games

})
;
