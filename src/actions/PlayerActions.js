import {createPayloadForwardingAction} from './index';

// CONNECT
export const CONNECT_REQUESTED = 'CONNECT_REQUESTED';
export const connectRequested = (obj) => (
    {
        type: CONNECT_REQUESTED,
        payload: {
            playerName: obj.playerName
        }
    }
);

export const CONNECT_REFUSED = 'CONNECT_REFUSED';
export const connectRefused = createPayloadForwardingAction(CONNECT_REFUSED);

export const CONNECTED = 'CONNECTED';
export const connected = createPayloadForwardingAction(CONNECTED);

// DISCONNECT
export const DISCONNECT_REQUESTED = 'DISCONNECT_REQUESTED';
export const disconnectRequested = createPayloadForwardingAction(DISCONNECT_REQUESTED);

// MESSAGE
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const messageReceived = createPayloadForwardingAction(MESSAGE_RECEIVED);
