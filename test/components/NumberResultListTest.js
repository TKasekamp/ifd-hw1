import React from 'react';
import {shallow} from 'enzyme';

import NumberResultList from '../../src/components/NumberResultList';
import NumberResult from '../../src/components/NumberResult';

describe('NumberResultList', () => {
    it('renders no NumberResult components without results', () => {
        expect(shallow(<NumberResultList moves={[]}/>))
            .to.not.contain.descendants(NumberResult);
    });

    it('renders result for each guess', () => {
        const results = [
            {id: 1, guess: 4, comparedToAnswer: 'GT', inFlight: 'created'},
            {id: 2, guess: 8, comparedToAnswer: 'LT', inFlight: 'created'}
        ];

        const resultList = shallow(<NumberResultList moves={results}/>);

        expect(resultList).to.have.exactly(2).descendants(NumberResult);
        expect(resultList).to.contain(<NumberResult move={results[0]} />);
        expect(resultList).to.contain(<NumberResult move={results[1]} />);
    });
});
