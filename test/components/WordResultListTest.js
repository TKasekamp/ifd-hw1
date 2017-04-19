import React from 'react';
import {shallow} from 'enzyme';

import WordResultList from '../../src/components/WordResultList';
import WordResult from '../../src/components/WordResult';

describe('WordResultList', () => {
    it('renders no WordResult components without results', () => {
        expect(shallow(<WordResultList moves={[]}/>))
            .to.not.contain.descendants(WordResult);
    });

    it('renders result for each guess', () => {
        const results = [
            {id: 1, guess: 'ab', letterMatches: [false, false], correct: false, inFlight: 'created'},
            {id: 2, guess: 'se', letterMatches: [true, true], correct: true, inFlight: 'created'}
        ];

        const resultList = shallow(<WordResultList moves={results}/>);

        expect(resultList).to.have.exactly(2).descendants(WordResult);
        expect(resultList).to.contain(<WordResult move={results[0]} />);
        expect(resultList).to.contain(<WordResult move={results[1]}/>);
    });
});
