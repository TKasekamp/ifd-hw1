import {NEW_NUMBER_GAME_REQUESTED, NUMBER_GUESS_SUBMITTED} from '../actions/index';
import {createNewGame, makeNumberGuess} from '../actions/GameServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
    [NEW_NUMBER_GAME_REQUESTED]: createNewGame,
    [NUMBER_GUESS_SUBMITTED]: makeNumberGuess
};

const gameServerMiddleware = (store) => (next) => (action) => {
    const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (serverAction) {
        serverAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default gameServerMiddleware;
