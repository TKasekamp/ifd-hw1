import React from 'react';
import {shallow} from 'enzyme';

import WordResult from '../../src/components/WordResult';

describe('WordResult', () => {
    it('renders', () => {
        expect(shallow(<WordResult key="1" guess='ga' result={[true, false]}/>)).to.exist;
    });

    it('renders no WordResult components without result', () => {
        expect(shallow(<WordResult key="1" guess='ga' result={[]}/>))
            .to.not.contain(<a></a>);
    });

    it('renders with correct class', () => {
        const result = shallow(<WordResult key="1" guess='ga' result={[true, false]}/>);
        expect(result).to.include.text('ga');
        expect(result).to.have.exactly(2).descendants('a');
        // Testing render paths
        expect(result).to.contain(<a className="win">g</a>);
        expect(result).to.contain(<a className="fail">a</a>);
    });
});
