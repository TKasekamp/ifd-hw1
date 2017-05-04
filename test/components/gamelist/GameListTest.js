import React from 'react';
import {shallow} from 'enzyme';
import GameList from '../../../src/components/gamelist/GameList';
import GameItem from '../../../src/components/gamelist/GameItem';

describe('GameList', () => {
    it('renders no GameItem components without results', () => {
        expect(shallow(<GameList play={sinon.stub()} games={[]}/>))
            .to.not.contain.descendants(GameItem);
    });

    it('renders result for each guess', () => {
        const games = [
            {id: '1', type: 'guess_number', status: 'waiting_for_move', moves: [], inFlight: 'created'},
            {id: '2', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'},
            {id: '3', type: 'guess_word', status: 'waiting_for_move', moves: [], inFlight: 'created'}
        ];

        const resultList = shallow(<GameList play={sinon.stub()} games={games}/>);

        expect(resultList).to.have.exactly(3).descendants(GameItem);
    });
});
