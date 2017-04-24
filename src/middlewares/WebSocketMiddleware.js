import {CONNECT_REQUESTED, connected, connectRefused, DISCONNECT_REQUESTED, messageReceived} from '../actions/PlayerActions';
import {connect} from '../WebSocket';

// Using WebSocket abstraction from basic websocket example
const webSocketMiddleware = (store) => (next) => {
    let connection = null;
    return (action) => {
        if (action.type === CONNECT_REQUESTED) {
            connection = connect({
                onOpen: () => store.dispatch(connected()),
                onClose: ({reason}) => store.dispatch(connectRefused({reason})),
                parameters: {playerName: action.payload.playerName},
                onMessage: ({eventName, payload}) => store.dispatch(messageReceived({eventName, payload}))
            });
        } else if (action.type === DISCONNECT_REQUESTED) {
            connection.close();
        }
        return next(action);
    };
};
export default webSocketMiddleware;
