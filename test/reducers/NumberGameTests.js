import gameReducer from '../../src/reducers/GameReducer';
import {
    newNumberGameCreated,
    newNumberGameFailed,
    newNumberGameRequested,
    numberGuessFailed,
    numberGuessSubmitted,
    numberGuessSucceeded
} from '../../src/actions/index';

describe('GamereducerNumber', () => {
    it('adds a new number game when requested', () => {
        const stateAfterFirstGame = gameReducer(undefined, newNumberGameRequested());
        expect(stateAfterFirstGame.games.length).to.eq(1);

        expect(stateAfterFirstGame.games[0].id).to.exist;
        expect(stateAfterFirstGame.games[0].type).to.eq('guess_number');
        expect(stateAfterFirstGame.games[0].status).to.eq('');
        expect(stateAfterFirstGame.games[0].inFlight).to.eq('inFlight');
        expect(stateAfterFirstGame.games[0].moves).to.eql([]);
    });


    it('sets number game as not in flight when succeeds', () => {
        const state = gameReducer(undefined, newNumberGameRequested());
        const stateAfterFirstGame = gameReducer(state, newNumberGameCreated({
            localId: state.games[0].id,
            id: 'id',
            type: 'guess_number',
            status: 'waiting_for_move'
        }));

        expect(stateAfterFirstGame.games.length).to.eq(1);

        expect(stateAfterFirstGame.games[0].id).to.eq('id');
        expect(stateAfterFirstGame.games[0].type).to.eq('guess_number');
        expect(stateAfterFirstGame.games[0].status).to.eq('waiting_for_move');
        expect(stateAfterFirstGame.games[0].inFlight).to.eq('created');
        expect(stateAfterFirstGame.games[0].moves).to.eql([]);
    });

    it('sets number game as failed when server error', () => {
        const state = gameReducer(undefined, newNumberGameRequested());
        const stateAfterFirstGame = gameReducer(state, newNumberGameFailed({
            localId: state.games[0].id,
            error: 'Error'
        }));

        expect(stateAfterFirstGame.games.length).to.eq(1);

        expect(stateAfterFirstGame.games[0].id).to.exist;
        expect(stateAfterFirstGame.games[0].type).to.eq('guess_number');
        expect(stateAfterFirstGame.games[0].status).to.eq('');
        expect(stateAfterFirstGame.games[0].inFlight).to.eq('failed');
        expect(stateAfterFirstGame.games[0].moves).to.eql([]);
    });


    it('adds a guess to number game when submitted', () => {

        const stateAfter = gameReducer({
                games: [{
                    id: 'id',
                    type: 'guess_number',
                    status: 'waiting_for_move',
                    moves: [],
                    inFlight: 'created'
                }]
            },
            numberGuessSubmitted({guess: -8, id: 'id'}));

        expect(stateAfter.games[0].status).to.eq('waiting_for_move');
        expect(stateAfter.games[0].moves.length).to.eq(1);
        expect(stateAfter.games[0].moves[0].guess).to.eq(-8);
        expect(stateAfter.games[0].moves[0].inFlight).to.eq('inFlight');
        expect(stateAfter.games[0].moves[0].comparedToAnswer).to.eq('');
    });

    it('number game guess submission succeeds', () => {
        const state = gameReducer({
                games: [{
                    id: 'id',
                    type: 'guess_number',
                    status: 'waiting_for_move',
                    moves: [],
                    inFlight: 'created'
                }]
            },
            numberGuessSubmitted({guess: -8, id: 'id'}));

        const stateAfter = gameReducer(state,
            numberGuessSucceeded({
                id: state.games[0].moves[0].id,
                move: {guess: -8, comparedToAnswer: 'EQ'},
                game: {id: 'id', status: 'finished', type: 'guess_number'}
            }));

        expect(stateAfter.games[0].status).to.eq('finished');
        expect(stateAfter.games[0].moves.length).to.eq(1);
        expect(stateAfter.games[0].moves[0].guess).to.eq(-8);
        expect(stateAfter.games[0].moves[0].inFlight).to.eq('created');
        expect(stateAfter.games[0].moves[0].comparedToAnswer).to.eq('EQ');
    });

    it('number game guess submission fails', () => {
        const state = gameReducer({
                games: [{
                    id: 'id',
                    type: 'guess_number',
                    status: 'waiting_for_move',
                    moves: [],
                    inFlight: 'created'
                }]
            },
            numberGuessSubmitted({guess: -8, id: 'id'}));

        const stateAfter = gameReducer(state,
            numberGuessFailed({
                id: state.games[0].moves[0].id,
                error: 'Error'
            }));

        expect(stateAfter.games[0].status).to.eq('waiting_for_move');
        expect(stateAfter.games[0].moves.length).to.eq(1);
        expect(stateAfter.games[0].moves[0].guess).to.eq(-8);
        expect(stateAfter.games[0].moves[0].inFlight).to.eq('failed');
        expect(stateAfter.games[0].moves[0].comparedToAnswer).to.eq('');
    });
});
