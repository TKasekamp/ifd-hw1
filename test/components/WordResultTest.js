import React from 'react';
import {shallow} from 'enzyme';

import WordResult from '../../src/components/WordResult';

describe('WordResult', () => {
    it('renders', () => {
        expect(shallow(<WordResult key="1" move={{
            id: '1',
            guess: 'ga',
            letterMatches: [true, false],
            correct: false,
            inFlight: 'created'
        }}/>)).to.exist;
    });

    it('renders no WordResult components without result', () => {
        expect(shallow(<WordResult key="1" move={{
            id: '1',
            guess: '',
            letterMatches: [],
            correct: false,
            inFlight: 'created'
        }}/>))
            .to.not.contain(<a></a>);
    });

    it('renders with correct class', () => {
        const result = shallow(<WordResult key="1" move={{
            id: '1',
            guess: 'ga',
            letterMatches: [true, false],
            correct: false,
            inFlight: 'created'
        }}/>);
        expect(result).to.include.text('ga');
        expect(result).to.have.exactly(2).descendants('a');
        // Testing render paths
        expect(result).to.contain(<a className="win">g</a>);
        expect(result).to.contain(<a className="fail">a</a>);
    });

    it('renders inFlight', () => {
        const result = shallow(<WordResult key="1" move={{
            id: '1',
            guess: 'ga',
            letterMatches: [true, false],
            correct: false,
            inFlight: 'inFlight'
        }}/>);
        expect(result).to.include.text('ga');
        expect(result).to.include.text('Submitting');
    });

    it('renders server error', () => {
        const result = shallow(<WordResult key="1" move={{
            id: '1',
            guess: 'ga',
            letterMatches: [true, false],
            correct: false,
            inFlight: 'failed'
        }}/>);
        expect(result).to.include.text('ga');
        expect(result).to.include.text('Server');
        expect(result.find('.fail')).to.exist;
    });
});
