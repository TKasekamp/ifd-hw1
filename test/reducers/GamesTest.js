import games, {filterGames} from '../../src/reducers/Games';
import {
    newGameCreated,
    newGameFailed,
    newGameRequested,
    numberGuessFailed,
    numberGuessSubmitted,
    numberGuessSucceeded,
    wordGuessFailed,
    wordGuessSubmitted,
    wordGuessSucceeded
} from '../../src/actions/index';

describe('Gamereducer', () => {
    it('has nothing initially', () => {
        expect(games(undefined, {})).to.eql({games: []});
    });


    it('adds a new game when game requested', () => {
        const stateAfterFirstGame = games(undefined, newGameRequested('guess_number'));
        const stateAfterSecondGame = games(stateAfterFirstGame, newGameRequested('guess_word'));
        expect(stateAfterSecondGame.games.length).to.eq(2);

        expect(stateAfterSecondGame.games[0].id).to.exist;
        expect(stateAfterSecondGame.games[0].type).to.eq('guess_number');
        expect(stateAfterSecondGame.games[0].status).to.eq('');
        expect(stateAfterSecondGame.games[0].inFlight).to.eq('inFlight');
        expect(stateAfterSecondGame.games[0].moves).to.eql([]);

        expect(stateAfterSecondGame.games[1].id).to.exist;
        expect(stateAfterSecondGame.games[1].type).to.eq('guess_word');
        expect(stateAfterSecondGame.games[1].status).to.eq('');
        expect(stateAfterSecondGame.games[0].inFlight).to.eq('inFlight');
        expect(stateAfterSecondGame.games[1].moves).to.eql([]);
    });

    describe('numberGame', () => {
        it('adds a new number game when requested', () => {
            const stateAfterFirstGame = games(undefined, newGameRequested('guess_number'));
            expect(stateAfterFirstGame.games.length).to.eq(1);

            expect(stateAfterFirstGame.games[0].id).to.exist;
            expect(stateAfterFirstGame.games[0].type).to.eq('guess_number');
            expect(stateAfterFirstGame.games[0].status).to.eq('');
            expect(stateAfterFirstGame.games[0].inFlight).to.eq('inFlight');
            expect(stateAfterFirstGame.games[0].moves).to.eql([]);
        });


        it('sets number game as not in flight when succeeds', () => {
            const state = games(undefined, newGameRequested('guess_number'));
            const stateAfterFirstGame = games(state, newGameCreated({
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
            const state = games(undefined, newGameRequested('guess_number'));
            const stateAfterFirstGame = games(state, newGameFailed({
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
            const stateAfter = games({
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
            const state = games({
                    games: [{
                        id: 'id',
                        type: 'guess_number',
                        status: 'waiting_for_move',
                        moves: [],
                        inFlight: 'created'
                    }]
                },
                numberGuessSubmitted({guess: -8, id: 'id'}));

            const stateAfter = games(state,
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
            const state = games({
                    games: [{
                        id: 'id',
                        type: 'guess_number',
                        status: 'waiting_for_move',
                        moves: [],
                        inFlight: 'created'
                    }]
                },
                numberGuessSubmitted({guess: -8, id: 'id'}));

            const stateAfter = games(state,
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

    describe('wordGame', () => {
        it('adds a new word game when requested', () => {
            const stateAfterFirstGame = games(undefined, newGameRequested('guess_word'));
            expect(stateAfterFirstGame.games.length).to.eq(1);

            expect(stateAfterFirstGame.games[0].id).to.exist;
            expect(stateAfterFirstGame.games[0].type).to.eq('guess_word');
            expect(stateAfterFirstGame.games[0].status).to.eq('');
            expect(stateAfterFirstGame.games[0].inFlight).to.eq('inFlight');
            expect(stateAfterFirstGame.games[0].moves).to.eql([]);
        });


        it('sets word game as not in flight when succeeds', () => {
            const state = games(undefined, newGameRequested('guess_word'));
            const stateAfterFirstGame = games(state, newGameCreated({
                localId: state.games[0].id,
                id: 'id',
                type: 'guess_word',
                status: 'waiting_for_move'
            }));

            expect(stateAfterFirstGame.games.length).to.eq(1);

            expect(stateAfterFirstGame.games[0].id).to.eq('id');
            expect(stateAfterFirstGame.games[0].type).to.eq('guess_word');
            expect(stateAfterFirstGame.games[0].status).to.eq('waiting_for_move');
            expect(stateAfterFirstGame.games[0].inFlight).to.eq('created');
            expect(stateAfterFirstGame.games[0].moves).to.eql([]);
        });

        it('sets word game as failed when server error', () => {
            const state = games(undefined, newGameRequested('guess_word'));
            const stateAfterFirstGame = games(state, newGameFailed({
                localId: state.games[0].id,
                error: 'Error'
            }));

            expect(stateAfterFirstGame.games.length).to.eq(1);

            expect(stateAfterFirstGame.games[0].id).to.exist;
            expect(stateAfterFirstGame.games[0].type).to.eq('guess_word');
            expect(stateAfterFirstGame.games[0].status).to.eq('');
            expect(stateAfterFirstGame.games[0].inFlight).to.eq('failed');
            expect(stateAfterFirstGame.games[0].moves).to.eql([]);
        });


        it('adds a guess to word game when submitted', () => {
            const stateAfter = games({
                    games: [{
                        id: 'id',
                        type: 'guess_word',
                        status: 'waiting_for_move',
                        moves: [],
                        inFlight: 'created'
                    }]
                },
                wordGuessSubmitted({guess: 'yyyyy', id: 'id'}));

            expect(stateAfter.games[0].status).to.eq('waiting_for_move');
            expect(stateAfter.games[0].moves.length).to.eq(1);
            expect(stateAfter.games[0].moves[0].guess).to.eq('yyyyy');
            expect(stateAfter.games[0].moves[0].inFlight).to.eq('inFlight');
            expect(stateAfter.games[0].moves[0].correct).to.eq(false);
            expect(stateAfter.games[0].moves[0].letterMatches).to.eql([]);
        });

        it('word game guess submission succeeds', () => {
            const state = games({
                    games: [{
                        id: 'id',
                        type: 'guess_word',
                        status: 'waiting_for_move',
                        moves: [],
                        inFlight: 'created'
                    }]
                },
                wordGuessSubmitted({guess: 'yyyyy', id: 'id'}));

            const stateAfter = games(state,
                wordGuessSucceeded({
                    id: state.games[0].moves[0].id,
                    move: {
                        guess: 'yyyyy',
                        correct: true,
                        letterMatches: [true, true, true, true, true]
                    },
                    game: {id: 'id', type: 'guess_word', status: 'finished'}
                }));

            expect(stateAfter.games[0].status).to.eq('finished');
            expect(stateAfter.games[0].moves.length).to.eq(1);
            expect(stateAfter.games[0].moves[0].guess).to.eq('yyyyy');
            expect(stateAfter.games[0].moves[0].inFlight).to.eq('created');
            expect(stateAfter.games[0].moves[0].correct).to.eq(true);
            expect(stateAfter.games[0].moves[0].letterMatches).to.eql([true, true, true, true, true]);
        });

        it('word game guess submission fails', () => {
            const state = games({
                    games: [{
                        id: 'id',
                        type: 'guess_word',
                        status: 'waiting_for_move',
                        moves: [],
                        inFlight: 'created'
                    }]
                },
                wordGuessSubmitted({guess: 'yyyyy', id: 'id'}));

            const stateAfter = games(state,
                wordGuessFailed({
                    id: state.games[0].moves[0].id,
                    error: 'Error'
                }));

            expect(stateAfter.games[0].status).to.eq('waiting_for_move');
            expect(stateAfter.games[0].moves.length).to.eq(1);
            expect(stateAfter.games[0].moves[0].guess).to.eq('yyyyy');
            expect(stateAfter.games[0].moves[0].inFlight).to.eq('failed');
            expect(stateAfter.games[0].moves[0].correct).to.eq(false);
            expect(stateAfter.games[0].moves[0].letterMatches).to.eql([]);
        });
    });
    describe('gameFilter', () => {
        it('shows with status finished', () => {
            const games = [
                {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'created'},
                {id: '2', type: 'guess_word', status: 'finished', moves: [], inFlight: 'created'},
                {id: '3', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'}
            ];
            const result = filterGames({games: games, showFinished: true});
            expect(result.length).to.eq(1);
            expect(result[0].status).to.eq('finished');
        });

        it('shows with status not finished', () => {
            const games = [
                {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'created'},
                {id: '2', type: 'guess_word', status: 'finished', moves: [], inFlight: 'created'},
                {id: '3', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'}
            ];
            const result = filterGames({games: games, showFinished: false});
            expect(result.length).to.eq(2);
            expect(result[0].status).to.eq('waiting_for_move');
            expect(result[1].status).to.eq('waiting_for_move');
        });
    });
});
