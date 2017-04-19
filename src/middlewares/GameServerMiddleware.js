import {NEW_NUMBER_GAME_REQUESTED} from '../actions/index';
import {createNewGame} from '../actions/GameServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
    [NEW_NUMBER_GAME_REQUESTED]: createNewGame
};

const gameServerMiddleware = (store) => (next) => (action) => {
    const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (serverAction) {
        serverAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default gameServerMiddleware;
