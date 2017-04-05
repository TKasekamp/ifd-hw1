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

        expect(stateAfterSecondGame[0].id).to.eq(0);
        expect(stateAfterSecondGame[0].name).to.eq('number');
        expect(stateAfterSecondGame[0].gameOver).to.eq(false);
        expect(stateAfterSecondGame[0].results).to.eql([]);
        expect(stateAfterSecondGame[0].targetNumber).to.exist;

        expect(stateAfterSecondGame[1].id).to.eq(1);
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
        expect(stateAfter[0].results).to.eql([{guess: 'yyyyy', id: 0, result: [false, false, false, false, false]}]);

    });

    it('adds a guess to number game', () => {
        const state = gameReducer(undefined, newNumberGameCreated());

        const stateAfter = gameReducer(state, numberGuessSubmitted({guess: -8, id: 0}));
        expect(stateAfter.length).to.eq(1);

        expect(stateAfter[0].gameOver).to.eq(false);
        expect(stateAfter[0].results).to.eql([{guess: -8, id: 0, result: 'lesser'}]);

    });

    it('word changes to gameOver when needed', () => {
        const state = gameReducer(undefined, newWordGameCreated());

        state[0].targetWord = 'yyyyy';

        const stateAfter = gameReducer(state, wordGuessSubmitted({guess: 'yyyyy', id: 0}));
        expect(stateAfter.length).to.eq(1);

        expect(stateAfter[0].gameOver).to.eq(true);
        expect(stateAfter[0].results).to.eql([{guess: 'yyyyy', id: 1, result: [true, true, true, true, true]}]);

    });

    it('number changes to gameOver when needed', () => {
        const state = gameReducer(undefined, newNumberGameCreated());

        state[0].targetNumber = 3;
        const stateAfter = gameReducer(state, numberGuessSubmitted({guess: 3, id: 0}));
        expect(stateAfter.length).to.eq(1);

        expect(stateAfter[0].gameOver).to.eq(true);
        expect(stateAfter[0].results).to.eql([{guess: 3, id: 1, result: 'equal'}]);

    });

});

