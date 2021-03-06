import {NEW_GAME_REQUESTED, NUMBER_GUESS_SUBMITTED, WORD_GUESS_SUBMITTED} from '../actions/index';
import {createGame, makeNumberGuess, makeWordGuess} from '../actions/GameServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
        [NEW_GAME_REQUESTED]: createGame,
        [NUMBER_GUESS_SUBMITTED]: makeNumberGuess,
        [WORD_GUESS_SUBMITTED]: makeWordGuess
    }
;

const gameServerMiddleware = (store) => (next) => (action) => {
    const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (serverAction) {
        serverAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default gameServerMiddleware;
