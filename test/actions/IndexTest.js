import {
    NEW_NUMBER_GAME_CREATED, NEW_NUMBER_GAME_REQUESTED,
    NEW_WORD_GAME_CREATED,
    newNumberGameCreated, newNumberGameRequested,
    newWordGameCreated,
    NUMBER_GUESS_SUBMITTED,
    numberGuessSubmitted,
    WORD_GUESS_SUBMITTED,
    wordGuessSubmitted
} from '../../src/actions/index';

describe('newNumberGameRequested', () => {
    it('has increasing game index', () => {
        const submissions = [
            newNumberGameRequested(),
            newNumberGameRequested()
        ];
        expect(parseInt(submissions[1].payload.localId)).to.eq(
            parseInt(submissions[0].payload.localId) + 1
        );
    });

    it('has correct game type', () => {
        expect(newNumberGameRequested().payload.type).to.eq('guess_number');
    });

    it('both games increment with the same number', () => {
        const submissions = [
            newNumberGameCreated(),
            newNumberGameCreated(),
            newWordGameCreated()
        ];
        expect(parseInt(submissions[2].payload.localId)).to.eq(
            parseInt(submissions[0].payload.localId) + 2
        );
    });

    it('has correct payload type', () => {
        expect(newNumberGameRequested().type).to.eq(NEW_NUMBER_GAME_REQUESTED);
    });
});

describe('newWordGameCreated', () => {
    it('has increasing game index', () => {
        const submissions = [
            newWordGameCreated(),
            newWordGameCreated()
        ];
        expect(submissions[1].payload.id).to.eq(
            submissions[0].payload.id + 1
        );
    });

    it('has generated number', () => {
        expect(newWordGameCreated().payload.targetWord).to.exist;
    });

    it('has correct payload type', () => {
        expect(newWordGameCreated().type).to.eq(NEW_WORD_GAME_CREATED);
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
        expect(wordGuessSubmitted({guess: 'hello', id: 5}).payload.index).to.eq(5);
    });

    it('has correct payload type', () => {
        expect(wordGuessSubmitted({guess: 3, id: 5}).type).to.eq(WORD_GUESS_SUBMITTED);
    });
});
