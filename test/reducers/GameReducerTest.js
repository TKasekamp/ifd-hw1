import gameReducer from '../../src/reducers/GameReducer';
import {
    newNumberGameCreated, newNumberGameFailed, newNumberGameRequested, newWordGameCreated, numberGuessSubmitted,
    wordGuessSubmitted,
} from '../../src/actions/index';

describe('Gamereducer', () => {
    it('has nothing initially', () => {
        expect(gameReducer(undefined, {})).to.eql({games: []});
    });

    it('adds a new game when game requested', () => {
        const stateAfterFirstGame = gameReducer(undefined, newNumberGameRequested());
        const stateAfterSecondGame = gameReducer(stateAfterFirstGame, newWordGameCreated());
        expect(stateAfterSecondGame.games.length).to.eq(2);

        expect(stateAfterSecondGame.games[0].id).to.exist;
        expect(stateAfterSecondGame.games[0].type).to.eq('guess_number');
        expect(stateAfterSecondGame.games[0].status).to.eq('');
        expect(stateAfterSecondGame.games[0].inFlight).to.eq('inFlight');
        expect(stateAfterSecondGame.games[0].moves).to.eql([]);

        expect(stateAfterSecondGame.games[1].id).to.exist;
        expect(stateAfterSecondGame.games[1].type).to.eq('guess_word');
        expect(stateAfterSecondGame.games[1].status).to.eq('waiting_for_move');
        expect(stateAfterSecondGame.games[1].moves).to.eql([]);
    });

    it('adds a guess to word game', () => {
        const state = gameReducer(undefined, newWordGameCreated());

        const stateAfter = gameReducer(state, wordGuessSubmitted({guess: 'yyyyy', id: 0}));
        expect(stateAfter.games.length).to.eq(1);

        expect(stateAfter.games[0].status).to.eq('waiting_for_move');
        expect(stateAfter.games[0].moves.length).to.eq(1);
        expect(stateAfter.games[0].moves[0].guess).to.eq('yyyyy');
    });

    it('word changes to gameOver when needed', () => {
        const state = gameReducer(undefined, newWordGameCreated());

        state.games[0].targetWord = 'yyyyy';

        const stateAfter = gameReducer(state, wordGuessSubmitted({guess: 'yyyyy', id: 0}));
        expect(stateAfter.games.length).to.eq(1);

        expect(stateAfter.games[0].status).to.eq('finished');
        expect(stateAfter.games[0].moves.length).to.eq(1);
        expect(stateAfter.games[0].moves[0].guess).to.eq('yyyyy');
    });

});
