import {Counter} from '../src/Counter';

describe('Counter', () => {
    it('has default count of 0', () => {
        const c = new Counter();
        expect(c.getCount()).to.eql(0);
    });

    it('increases count', () => {
        const c = new Counter();
        c.increase();
        expect(c.getCount()).to.eql(1);
    });

    it('displays correct text', () => {
        const c = new Counter();
        expect(c.getClickText()).to.eql('Clicked on 0 times');
        c.increase();
        expect(c.getClickText()).to.eql('Clicked on 1 times');
    });
});

