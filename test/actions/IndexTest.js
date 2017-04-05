import {
    NEW_NUMBER_GAME_CREATED,
    NEW_WORD_GAME_CREATED,
    newNumberGameCreated,
    newWordGameCreated,
    NUMBER_GUESS_SUBMITTED,
    numberGuessSubmitted,
    WORD_GUESS_SUBMITTED,
    wordGuessSubmitted
} from '../../src/actions/index';

describe('newNumberGameCreated', () => {
    it('has increasing game index', () => {
        const submissions = [
            newNumberGameCreated(),
            newNumberGameCreated()
        ];
        expect(submissions[1].payload.id).to.eq(
            submissions[0].payload.id + 1
        );
    });

    it('has generated number', () => {
        expect(newNumberGameCreated().payload.targetNumber).to.exist;
    });

    it('both games increment with the same number', () => {
        const submissions = [
            newNumberGameCreated(),
            newNumberGameCreated(),
            newWordGameCreated()
        ];
        expect(submissions[2].payload.id).to.eq(
            submissions[0].payload.id + 2
        );
    });

    it('has correct payload type', () => {
        expect(newNumberGameCreated().type).to.eq(NEW_NUMBER_GAME_CREATED);
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
        expect(numberGuessSubmitted({guess: 3, id: 5}).payload.index).to.eq(5);
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
