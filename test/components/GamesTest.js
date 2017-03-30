import React from 'react';
import {shallow} from 'enzyme';

import Games from '../../src/components/Games';
import NumberGameContainer from '../../src/containters/NumberGameContainer';
import WordGameContainer from '../../src/containters/WordGameContainer';

describe('Games', () => {
    it('renders with no input', () => {
        const games = shallow(<Games games={[]}/>);
        expect(games).to.exist;
        expect(games).to.not.contain.descendants(NumberGameContainer);
        expect(games).to.not.contain.descendants(WordGameContainer);
    });

    it('renders game for each input', () => {
        const games = [
            {id: 1, name: 'number'},
            {id: 2, name: 'word'},
            {id: 3, name: 'word'}
        ];

        const gameList = shallow(<Games games={games}/>);

        expect(gameList).to.have.exactly(1).descendants(NumberGameContainer);
        expect(gameList).to.have.exactly(2).descendants(WordGameContainer);
    });
});
