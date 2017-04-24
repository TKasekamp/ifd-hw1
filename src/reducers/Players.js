import {CONNECT_REFUSED, CONNECT_REQUESTED, DISCONNECT_REQUESTED, MESSAGE_RECEIVED} from '../actions/PlayerActions';

const initialState = {
    connected: false,
    playerId: '',
    onlinePlayers: [],
    message: ''
};

const CONNECTION_ACCEPTED = 'connection:accepted';
const ONLINE_PLAYERS = 'online-players';

const players = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT_REQUESTED:
            return {
                ...state,
                message: 'Connecting...'
            };

        case CONNECT_REFUSED:
            if(action.payload.reason === 'player-name-taken') {
                return {
                    ...state,
                    message: 'This name is taken. Choose another one!'
                };
            }
            return state;

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
                onlinePlayers: [],
                message: ''
            };
        default:
            return state;
    }
};

const connectionAccepted = (state, action) => {
    return {
        ...state,
        message: '',
        connected: true,
        playerId: action.payload.payload.playerId
    };
};

const onlinePlayers = (state, action) => {
    return {
        ...state,
        message: '',
        onlinePlayers: action.payload.payload
    };
};

export default players;
