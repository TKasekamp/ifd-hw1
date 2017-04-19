import {
    NEW_GAME_REQUESTED,
    newGameRequested,
    NUMBER_GUESS_SUBMITTED,
    numberGuessSubmitted,
    WORD_GUESS_SUBMITTED,
    wordGuessSubmitted
} from '../../src/actions/index';

describe('newNumberGameRequested', () => {
    it('has increasing game index', () => {
        const submissions = [
            newGameRequested('guess_number'),
            newGameRequested('guess_number')
        ];
        expect(parseInt(submissions[1].payload.localId)).to.eq(
            parseInt(submissions[0].payload.localId) + 1
        );
    });

    it('has correct game type', () => {
        expect(newGameRequested('guess_number').payload.type).to.eq('guess_number');
    });

    it('both games increment with the same number', () => {
        const submissions = [
            newGameRequested('guess_number'),
            newGameRequested('guess_number'),
            newGameRequested('guess_word')
        ];
        expect(parseInt(submissions[2].payload.localId)).to.eq(
            parseInt(submissions[0].payload.localId) + 2
        );
    });

    it('has correct payload type', () => {
        expect(newGameRequested('guess_number').type).to.eq(NEW_GAME_REQUESTED);
    });
});

describe('newWordGameCreated', () => {
    it('has increasing game index', () => {
        const submissions = [
            newGameRequested('guess_word'),
            newGameRequested('guess_word')
        ];
        expect(parseInt(submissions[1].payload.localId)).to.eq(
            parseInt(submissions[0].payload.localId) + 1
        );
    });

    it('has correct game type', () => {
        expect(newGameRequested('guess_word').payload.type).to.eq('guess_word');
    });

    it('has correct payload type', () => {
        expect(newGameRequested('guess_word').type).to.eq(NEW_GAME_REQUESTED);
    });
});

describe('number guess', () => {
    it('has increasing guess id', () => {
        const submissions = [
            numberGuessSubmitted({guess: 3, id: 5}),
            numberGuessSubmitted({guess: 3, id: 5}),
        ];
        expect(submissions[1].payload.id).to.eq(
            submissions[0].payload.id + 1
        );
    });

    it('has correct id', () => {
        expect(numberGuessSubmitted({guess: 3, id: 5}).payload.gameId).to.eq(5);
    });

    it('has correct payload type', () => {
        expect(numberGuessSubmitted({guess: 3, id: 5}).type).to.eq(NUMBER_GUESS_SUBMITTED);
    });
});

describe('word guess', () => {
    it('has increasing guess id', () => {
        const submissions = [
            wordGuessSubmitted({guess: 'hello', id: 5}),
            wordGuessSubmitted({guess: 'hello', id: 5}),
        ];
        expect(submissions[1].payload.id).to.eq(
            submissions[0].payload.id + 1
        );
    });

    it('has correct id', () => {
        expect(wordGuessSubmitted({guess: 'hello', id: 5}).payload.gameId).to.eq(5);
    });

    it('has correct payload type', () => {
        expect(wordGuessSubmitted({guess: 3, id: 5}).type).to.eq(WORD_GUESS_SUBMITTED);
    });
});
