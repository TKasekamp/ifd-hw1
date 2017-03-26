/**
 * Created by Tonis on 26.03.2017.
 */
import {WordGame} from '../src/WordGame';

describe('WordGame', () => {
    it('has some generated value on construct', () => {
        const g = new WordGame();
        expect(g.getWord()).to.be.oneOf(['paper', 'grill', 'basil', 'hinge', 'ruler']);
        expect(g.getGameOver()).to.eql(false);
    });

    it('false if completely wrong', () => {
        const g = new WordGame();
        g.setWord('basil');
        const result = g.makeGuess('hinge');
        expect(result).to.eql([false, false, false, false, false]);
        expect(g.getGameOver()).to.eql(false);
    });

    it('true on one letter', () => {
        const g = new WordGame();
        g.setWord('basil');
        const result = g.makeGuess('paper');
        expect(result).to.eql([false, true, false, false, false]);
        expect(g.getGameOver()).to.eql(false);
    });

    it('true all if equal', () => {
        const g = new WordGame();
        g.setWord('basil');
        const result = g.makeGuess('basil');
        expect(result).to.eql([true, true, true, true, true]);
        expect(g.getGameOver()).to.eql(true);
    });

    it('guess array shorter than word', () => {
        const g = new WordGame();
        g.setWord('basil');
        const result = g.makeGuess('tank');
        expect(result).to.eql([false, true, false, false]);
        expect(g.getGameOver()).to.eql(false);
    });

    it('guess array longer than word', () => {
        const g = new WordGame();
        g.setWord('basil');
        const result = g.makeGuess('tanker');
        expect(result).to.eql([false, true, false, false, false, false]);
        expect(g.getGameOver()).to.eql(false);
    });
});
