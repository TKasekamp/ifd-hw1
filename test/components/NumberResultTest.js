import React from 'react';
import {shallow} from 'enzyme';

import NumberResult from '../../src/components/NumberResult';

describe('NumberResult', () => {
    it('renders', () => {
        expect(shallow(<NumberResult key="1"
                                     move={{id: 1, guess: 3, comparedToAnswer: 'GT', inFlight: 'created'}}/>)).to.exist;
    });

    it('renders equal with correct class', () => {
        const result = shallow(<NumberResult key="1"
                                             move={{id: 1, guess: 3, comparedToAnswer: 'EQ', inFlight: 'created'}}/>);
        expect(result).to.include.text('3');
        expect(result).to.include.text('correct');
        expect(result.find('.win')).to.exist;
    });

    it('renders greater with correct class', () => {
        const result = shallow(<NumberResult key="1"
                                             move={{id: 1, guess: 5, comparedToAnswer: 'GT', inFlight: 'created'}}/>);
        expect(result).to.include.text('5');
        expect(result).to.include.text('greater');
        expect(result.find('.fail')).to.exist;
    });

    it('renders lesser with correct class', () => {
        const result = shallow(<NumberResult key="1"
                                             move={{id: 1, guess: 8, comparedToAnswer: 'LT', inFlight: 'created'}}/>);
        expect(result).to.include.text('8');
        expect(result).to.include.text('lesser');
        expect(result.find('.fail')).to.exist;
    });

    it('renders inFlight', () => {
        const result = shallow(<NumberResult key="1"
                                             move={{id: 1, guess: 3, comparedToAnswer: '', inFlight: 'inFlight'}}/>);
        expect(result).to.include.text('3');
        expect(result).to.include.text('Submitting');
    });

    it('renders server error', () => {
        const result = shallow(<NumberResult key="1"
                                             move={{id: 1, guess: 3, comparedToAnswer: '', inFlight: 'failed'}}/>);
        expect(result).to.include.text('3');
        expect(result).to.include.text('Server');
        expect(result.find('.fail')).to.exist;
    });
});
