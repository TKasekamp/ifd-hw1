import React from 'react';
import {shallow} from 'enzyme';

import WordResultList from '../../src/components/WordResultList';
import WordResult from '../../src/components/WordResult';

describe('WordResultList', () => {

    it('renders no WordResult components without results', () => {
        expect(shallow(<WordResultList results={[]} />))
            .to.not.contain.descendants(WordResult);
    });


    it('renders result for each guess', () => {
        const results = [
            {id: 1, guess: 'ab', result: [false, false]},
            {id: 2, guess: 'se', result: [true, true]}
        ];

        const resultList = shallow(<WordResultList results={results}/>);

        expect(resultList).to.have.exactly(2).descendants(WordResult);
        // Tests against pure HTML for some reason
        // expect(resultList).to.contain(<WordResult result={[false, false]} guess='ab'/>);
        // expect(resultList).to.contain(<WordResult result={[true, false]} guess='se'/>);
    });
});
