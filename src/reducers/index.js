import {combineReducers} from 'redux';
import games from './Games';
import players from './Players';

export default combineReducers({
    games: games,
    players: players
})
;
