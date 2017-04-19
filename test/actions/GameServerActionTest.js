import {
    NEW_NUMBER_GAME_CREATED,
    NEW_NUMBER_GAME_FAILED,
    NEW_WORD_GAME_CREATED,
    NEW_WORD_GAME_FAILED,
    NUMBER_GUESS_FAILED,
    NUMBER_GUESS_SUCCEEDED,
    WORD_GUESS_FAILED,
    WORD_GUESS_SUCCEEDED
} from '../../src/actions/index';
import {createNumberGame, createWordGame, makeNumberGuess, makeWordGuess} from '../../src/actions/GameServerActions';

describe('gameServerActions', () => {
    let xhr;
    let requests;
    let dispatch;

    beforeEach(() => {
        // Mock out XMLHttpRequest with sinon
        global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

        // Store XMLHttpRequests to respond to them
        requests = [];
        xhr.onCreate = (xhr) => requests.push(xhr);
        dispatch = sinon.stub();
    });

    afterEach(() => {
        xhr.restore();
    });

    context('when number game created', () => {


        it('dispatches new number game requested', () => {
            createNumberGame({localId: 'localId', type: 'guess_number'})(dispatch);

            requests[0].respond(201, {}, JSON.stringify({
                id: 'game-id',
                type: 'guess_number',
                status: 'waiting_for_move'
            }));

            expect(dispatch).to.have.been.calledWith({
                type: NEW_NUMBER_GAME_CREATED,
                payload: {localId: 'localId', id: 'game-id', type: 'guess_number', status: 'waiting_for_move'}
            });
        });

        it('dispatches new number game failed when xhr fails', () => {
            createNumberGame({localId: 'localId', type: 'guess_number'})(dispatch);

            // Fails the pending request
            requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

            expect(dispatch).to.have.been.calledWith({
                type: NEW_NUMBER_GAME_FAILED,
                payload: {localId: 'localId', error: 'error'}
            });
        });

    });

    context('when number game guess made', () => {


        it('dispatches number game guess succeeded', () => {
            makeNumberGuess({id: 42, guess: 8, gameId: 'game-id'})(dispatch);

            requests[0].respond(201, {}, JSON.stringify({
                move: {comparedToAnswer: 'EQ', guess: 8},
                game: {id: 'game-id', type: 'guess_number', status: 'finished'}
            }));

            expect(dispatch).to.have.been.calledWith({
                type: NUMBER_GUESS_SUCCEEDED,
                payload: {
                    id: 42, move: {comparedToAnswer: 'EQ', guess: 8},
                    game: {id: 'game-id', type: 'guess_number', status: 'finished'}
                }
            });
        });

        it('dispatches number game guess failed when xhr fails', () => {
            makeNumberGuess({id: 42, guess: 8, gameId: 'game-id'})(dispatch);

            // Fails the pending request
            requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

            expect(dispatch).to.have.been.calledWith({
                type: NUMBER_GUESS_FAILED,
                payload: {id: 42, error: 'error'}
            });
        });

    });

    context('when word game created', () => {


        it('dispatches new word game requested', () => {
            createWordGame({localId: 'localId', type: 'guess_word'})(dispatch);

            requests[0].respond(201, {}, JSON.stringify({
                id: 'game-id',
                type: 'guess_word',
                status: 'waiting_for_move'
            }));

            expect(dispatch).to.have.been.calledWith({
                type: NEW_WORD_GAME_CREATED,
                payload: {localId: 'localId', id: 'game-id', type: 'guess_word', status: 'waiting_for_move'}
            });
        });

        it('dispatches new word game failed when xhr fails', () => {
            createWordGame({localId: 'localId', type: 'guess_word'})(dispatch);

            // Fails the pending request
            requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

            expect(dispatch).to.have.been.calledWith({
                type: NEW_WORD_GAME_FAILED,
                payload: {localId: 'localId', error: 'error'}
            });
        });

    });

    context('when word game guess made', () => {


        it('dispatches word game guess succeeded', () => {
            makeWordGuess({id: 42, guess: 'yyyyy', gameId: 'game-id'})(dispatch);

            requests[0].respond(201, {}, JSON.stringify({
                move: {
                    comparedToAnswer: 'EQ',
                    guess: 'yyyyy',
                    correct: false,
                    letterMatches: [false, false, false, false, false]
                },
                game: {id: 'game-id', type: 'guess_word', status: 'waiting_for_move'}
            }));

            expect(dispatch).to.have.been.calledWith({
                type: WORD_GUESS_SUCCEEDED,
                payload: {
                    id: 42,
                    move: {
                        comparedToAnswer: 'EQ',
                        guess: 'yyyyy',
                        correct: false,
                        letterMatches: [false, false, false, false, false]
                    },
                    game: {id: 'game-id', type: 'guess_word', status: 'waiting_for_move'}
                }
            });
        });

        it('dispatches word game guess failed when xhr fails', () => {
            makeWordGuess({id: 42, guess: 'yyyyy', gameId: 'game-id'})(dispatch);

            // Fails the pending request
            requests[0].respond(503, {}, JSON.stringify({error: 'error'}));

            expect(dispatch).to.have.been.calledWith({
                type: WORD_GUESS_FAILED,
                payload: {id: 42, error: 'error'}
            });
        });

    });
});
