import {
    NEW_GAME_CREATED,
    NEW_GAME_FAILED,
    NUMBER_GUESS_FAILED,
    NUMBER_GUESS_SUCCEEDED,
    WORD_GUESS_FAILED,
    WORD_GUESS_SUCCEEDED
} from '../../src/actions/index';
import {createGame, makeNumberGuess, makeWordGuess} from '../../src/actions/GameServerActions';
import {
    CONNECT_REFUSED, CONNECT_REQUESTED, connectRefused, connectRequested,
    DISCONNECT_REQUESTED, disconnectRequested, MESSAGE_RECEIVED, messageReceived
} from '../../src/actions/PlayerActions';

describe('playerActionTest', () => {

    describe('connectRequested', () => {
        it('has correct payload type', () => {
            expect(connectRequested('qwerty').type).to.eq(CONNECT_REQUESTED);
        });
        it('has correct game type', () => {
            expect(connectRequested({playerName: 'qwerty'}).payload.playerName).to.eq('qwerty');
        });
    });

    describe('connectRefused', () => {
        it('has correct payload type', () => {
            expect(connectRefused().type).to.eq(CONNECT_REFUSED);
        });
    });

    describe('disconnectRequested', () => {
        it('has correct payload type', () => {
            expect(disconnectRequested().type).to.eq(DISCONNECT_REQUESTED);
        });
    });

    describe('messageReceived', () => {
        it('has correct payload type', () => {
            expect(messageReceived().type).to.eq(MESSAGE_RECEIVED);
        });
    });
});
