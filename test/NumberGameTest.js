/**
 * Created by Tonis on 21.03.2017.
 */
import {NumberGame} from '../src/NumberGame';

describe('NumberGame', () => {
    it('has some generated value on construct', () => {
        expect(NumberGame.generateNumber()).to.be.within(0, 9);
    });

    it('should return lesser', () => {
        const result = NumberGame.makeGuess(5, 4);
        expect(result.result).to.eql('lesser');
        expect(result.gameOver).to.eql(false);
    });

    it('should return greater', () => {
        const result = NumberGame.makeGuess(5, 6);
        expect(result.result).to.eql('greater');
        expect(result.gameOver).to.eql(false);
    });

    it('should return equal and game is over', () => {
        const result = NumberGame.makeGuess(5, 5);
        expect(result.result).to.eql('equal');
        expect(result.gameOver).to.eql(true);
    });
});
