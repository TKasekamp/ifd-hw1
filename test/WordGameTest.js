/**
 * Created by Tonis on 26.03.2017.
 */
import {WordGame} from '../src/WordGame';

describe('WordGame', () => {

    it('false if completely wrong', () => {
        const result = WordGame.makeGuess('basil', 'hinge');
        expect(result.result).to.eql([false, false, false, false, false]);
        expect(result.gameOver).to.eql(false);
    });

    it('true on one letter', () => {
        const result = WordGame.makeGuess('basil', 'paper');
        expect(result.result).to.eql([false, true, false, false, false]);
        expect(result.gameOver).to.eql(false);
    });

    it('true all if equal', () => {
        const result = WordGame.makeGuess('basil', 'basil');
        expect(result.result).to.eql([true, true, true, true, true]);
        expect(result.gameOver).to.eql(true);
    });

    it('guess array shorter than word', () => {
        const result = WordGame.makeGuess('basil', 'task');
        expect(result.result).to.eql([false, true, true, false]);
        expect(result.gameOver).to.eql(false);
    });

    it('game not over if partial match', () => {
        const result = WordGame.makeGuess('hello', 'hel');
        expect(result.result).to.eql([true, true, true]);
        expect(result.gameOver).to.eql(false);
    });

    it('guess array longer than word', () => {
        const result = WordGame.makeGuess('basil', 'banker');
        expect(result.result).to.eql([true, true, false, false, false, false]);
        expect(result.gameOver).to.eql(false);
    });
});
