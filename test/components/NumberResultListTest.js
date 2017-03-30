import React from 'react';
import {shallow} from 'enzyme';

import NumberResultList from '../../src/components/NumberResultList';
import NumberResult from '../../src/components/NumberResult';

describe('NumberResultList', () => {
    it('renders no NumberResult components without results', () => {
        expect(shallow(<NumberResultList results={[]}/>))
            .to.not.contain.descendants(NumberResult);
    });

    it('renders result for each guess', () => {
        const results = [
            {id: 1, guess: 4, result: 'greater'},
            {id: 2, guess: 8, result: 'lesser'}
        ];

        const resultList = shallow(<NumberResultList results={results}/>);

        expect(resultList).to.have.exactly(2).descendants(NumberResult);
        expect(resultList).to.contain(<NumberResult result='greater' guess={4}/>);
        expect(resultList).to.contain(<NumberResult result='lesser' guess={8}/>);
    });
});
