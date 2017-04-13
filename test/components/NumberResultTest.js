import React from 'react';
import {shallow} from 'enzyme';

import NumberResult from '../../src/components/NumberResult';

describe('NumberResult', () => {
    it('renders', () => {
        expect(shallow(<NumberResult key="1" guess={3} comparedToAnswer='GT'/>)).to.exist;
    });

    it('renders equal with correct class', () => {
        const result = shallow(<NumberResult key="1" guess={3} comparedToAnswer='EQ'/>);
        expect(result).to.include.text('3');
        expect(result).to.include.text('correct');
        expect(result.find('.win')).to.exist;
    });

    it('renders greater with correct class', () => {
        const result = shallow(<NumberResult key="1" guess={5} comparedToAnswer='GT'/>);
        expect(result).to.include.text('5');
        expect(result).to.include.text('greater');
        expect(result.find('.fail')).to.exist;
    });

    it('renders lesser with correct class', () => {
        const result = shallow(<NumberResult key="1" guess={8} comparedToAnswer='LT'/>);
        expect(result).to.include.text('8');
        expect(result).to.include.text('lesser');
        expect(result.find('.fail')).to.exist;
    });
});
