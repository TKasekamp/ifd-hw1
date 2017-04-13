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
        expect(result.comparedToAnswer).to.eql('LT');
        expect(result.status).to.eql('waiting_for_move');
    });

    it('should return greater', () => {
        const result = NumberGame.makeGuess(5, 6);
        expect(result.comparedToAnswer).to.eql('GT');
        expect(result.status).to.eql('waiting_for_move');
    });

    it('should return equal and game is over', () => {
        const result = NumberGame.makeGuess(5, 5);
        expect(result.comparedToAnswer).to.eql('EQ');
        expect(result.status).to.eql('finished');
    });
});
