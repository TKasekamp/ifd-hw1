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
            {id: 1, guess: 'ab', letterMatches: [false, false]},
            {id: 2, guess: 'se', letterMatches: [true, true]}
        ];

        const resultList = shallow(<WordResultList moves={results}/>);

        expect(resultList).to.have.exactly(2).descendants(WordResult);
        expect(resultList).to.contain(<WordResult letterMatches={[false, false]} guess='ab'/>);
        expect(resultList).to.contain(<WordResult letterMatches={[true, true]} guess='se'/>);
    });
});
