import React from 'react';
import {shallow} from 'enzyme';
import OnlinePlayerList from '../../src/components/OnlinePlayerList';
import OnlinePlayer from '../../src/components/OnlinePlayer';

describe('OnlinePlayerList', () => {
    it('renders item for each player', () => {
        const players = [
            {id: '1', name: 'QWERTY'},
            {id: '2', name: 'AZERTY'},
        ];

        const playerList = shallow(<OnlinePlayerList playerId={'2'} onlinePlayers={players}/>);

        expect(playerList).to.have.exactly(2).descendants(OnlinePlayer);
        expect(playerList).to.contain(<OnlinePlayer isPlayer={false} name={'QWERTY'}/>);
        expect(playerList).to.contain(<OnlinePlayer isPlayer={true} name={'AZERTY'}/>);
    });
});
