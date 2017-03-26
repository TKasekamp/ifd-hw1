/**
 * Created by Tonis on 21.03.2017.
 */
import {Game} from '../src/NumberGame';

describe('Game', () => {
    it('has some generated value on construct', () => {
        const g = new Game();
        expect(g.getNumber()).to.be.within(0, 9);
        expect(g.getGameOver()).to.eql(false);
    });

    it('should return lesser', () => {
        const g = new Game();
        g.setNumber(5);
        const result = g.makeGuess(4);
        expect(result).to.eql('lesser');
        expect(g.getGameOver()).to.eql(false);
    });

    it('should return greater', () => {
        const g = new Game();
        g.setNumber(5);
        const result = g.makeGuess(6);
        expect(result).to.eql('greater');
        expect(g.getGameOver()).to.eql(false);
    });

    it('should return equal and game is over', () => {
        const g = new Game();
        g.setNumber(5);
        const result = g.makeGuess(5);
        expect(result).to.eql('equal');
        expect(g.getGameOver()).to.eql(true);
    });
});
