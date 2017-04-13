import gameReducer from '../../src/reducers/GameReducer';
import {
    newNumberGameCreated, newWordGameCreated, numberGuessSubmitted, wordGuessSubmitted,
} from '../../src/actions/index';

describe('Gamereducer', () => {
    it('has nothing initially', () => {
        expect(gameReducer(undefined, {})).to.eql([]);
    });

    it('adds a new game when game created', () => {
        const stateAfterFirstGame = gameReducer(undefined, newNumberGameCreated());
        const stateAfterSecondGame = gameReducer(stateAfterFirstGame, newWordGameCreated());
        expect(stateAfterSecondGame.length).to.eq(2);

        expect(stateAfterSecondGame[0].id).to.exist;
        expect(stateAfterSecondGame[0].name).to.eq('number');
        expect(stateAfterSecondGame[0].status).to.eq('waiting_for_move');
        expect(stateAfterSecondGame[0].results).to.eql([]);
        expect(stateAfterSecondGame[0].targetNumber).to.exist;

        expect(stateAfterSecondGame[1].id).to.exist;
        expect(stateAfterSecondGame[1].name).to.eq('word');
        expect(stateAfterSecondGame[1].gameOver).to.eq(false);
        expect(stateAfterSecondGame[1].results).to.eql([]);
        expect(stateAfterSecondGame[1].targetWord).to.exist;
    });

    it('adds a guess to word game', () => {
        const state = gameReducer(undefined, newWordGameCreated());

        const stateAfter = gameReducer(state, wordGuessSubmitted({guess: 'yyyyy', id: 0}));
        expect(stateAfter.length).to.eq(1);

        expect(stateAfter[0].gameOver).to.eq(false);
        expect(stateAfter[0].results.length).to.eq(1);
        expect(stateAfter[0].results[0].guess).to.eq('yyyyy');
    });

    it('adds a guess to number game', () => {
        const state = gameReducer(undefined, newNumberGameCreated());

        const stateAfter = gameReducer(state, numberGuessSubmitted({guess: -8, id: 0}));
        expect(stateAfter.length).to.eq(1);

        expect(stateAfter[0].status).to.eq('waiting_for_move');
        expect(stateAfter[0].results.length).to.eq(1);
        expect(stateAfter[0].results[0].guess).to.eq(-8);
    });

    it('word changes to gameOver when needed', () => {
        const state = gameReducer(undefined, newWordGameCreated());

        state[0].targetWord = 'yyyyy';

        const stateAfter = gameReducer(state, wordGuessSubmitted({guess: 'yyyyy', id: 0}));
        expect(stateAfter.length).to.eq(1);

        expect(stateAfter[0].gameOver).to.eq(true);
        expect(stateAfter[0].results.length).to.eq(1);
        expect(stateAfter[0].results[0].guess).to.eq('yyyyy');
    });

    it('number changes to gameOver when needed', () => {
        const state = gameReducer(undefined, newNumberGameCreated());

        state[0].targetNumber = 3;
        const stateAfter = gameReducer(state, numberGuessSubmitted({guess: 3, id: 0}));
        expect(stateAfter.length).to.eq(1);

        expect(stateAfter[0].status).to.eq('finished');
        expect(stateAfter[0].results.length).to.eq(1);
        expect(stateAfter[0].results[0].guess).to.eq(3);
    });
});
