import players from '../../src/reducers/Players';
import {connectRefused, connectRequested, disconnectRequested, messageReceived} from '../../src/actions/PlayerActions';

describe('PlayerReducer', () => {
    it('has nothing initially', () => {
        expect(players(undefined, {})).to.eql({message: '', connected: false, playerId: '', onlinePlayers: []});
    });


    it('changes message when connecting', () => {
        const state = players(undefined, connectRequested('hello'));

        expect(state.message).to.eq('Connecting...');
    });

    it('changes message when name taken', () => {
        const state = players(undefined, connectRefused({reason: 'player-name-taken'}));

        expect(state.message).to.eq('This name is taken. Choose another one!');
    });

    it('stores player name', () => {
        const state = players(undefined, messageReceived({
            eventName: 'connection:accepted',
            payload: {playerId: 'id'}
        }));

        expect(state.message).to.eq('');
        expect(state.playerId).to.eq('id');
        expect(state.connected).to.eq(true);
    });

    it('stores online players', () => {
        const state = players(undefined, messageReceived({
            eventName: 'online-players',
            payload: [{id: 'id', name: 'name'}]
        }));

        expect(state.message).to.eq('');
        expect(state.onlinePlayers).to.eql([{id: 'id', name: 'name'}]);
    });

    it('clears correctly when disconnected', () => {
        const state = players(undefined, messageReceived({
            eventName: 'connection:accepted',
            payload: {playerId: 'id'}
        }));
        const state2 = players(state, messageReceived({
            eventName: 'online-players',
            payload: [{id: 'id', name: 'name'}]
        }));
        const state3 = players(state2, disconnectRequested());

        expect(state3.message).to.eq('');
        expect(state3.connected).to.eq(false);
        expect(state3.playerId).to.eq('');
        expect(state.onlinePlayers).to.eql([]);
    });
});
