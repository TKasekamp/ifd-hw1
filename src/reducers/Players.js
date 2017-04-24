import {DISCONNECT_REQUESTED, MESSAGE_RECEIVED} from '../actions/PlayerActions';

const initialState = {
    connected: false,
    playerId: '',
    onlinePlayers: []
};

const CONNECTION_ACCEPTED = 'connection:accepted';
const ONLINE_PLAYERS = 'online-players';

const players = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_RECEIVED:
            if (action.payload.eventName === CONNECTION_ACCEPTED) {
                return connectionAccepted(state, action);
            }
            else if (action.payload.eventName === ONLINE_PLAYERS) {
                return onlinePlayers(state, action);
            }
            return state;

        case DISCONNECT_REQUESTED:
            return {
                connected: false,
                playerId: '',
                onlinePlayers: []
            };
        default:
            return state;
    }
};

const connectionAccepted = (state, action) => {
    return {
        ...state,
        connected: true,
        playerId: action.payload.payload.playerId
    };
};

const onlinePlayers = (state, action) => {
    return {
        ...state,
        onlinePlayers: action.payload.payload
    };
};

export default players;
