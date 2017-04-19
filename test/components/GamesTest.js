import React from 'react';
import {shallow} from 'enzyme';

import Games from '../../src/components/Games';
import NumberGameContainer from '../../src/containers/NumberGameContainer';
import WordGameContainer from '../../src/containers/WordGameContainer';

describe('Games', () => {
    it('renders with no input', () => {
        const games = shallow(<Games games={[]}/>);
        expect(games).to.exist;
        expect(games).to.not.contain.descendants(NumberGameContainer);
        expect(games).to.not.contain.descendants(WordGameContainer);
    });

    it('renders game for each input', () => {
        const games = [
            {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'created'},
            {id: '2', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'},
            {id: '3', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'}
        ];

        const gameList = shallow(<Games games={games}/>);

        expect(gameList).to.have.exactly(1).descendants(NumberGameContainer);
        expect(gameList).to.have.exactly(2).descendants(WordGameContainer);
    });
});
