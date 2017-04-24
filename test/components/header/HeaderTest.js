import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../../src/components/header/Header';
import ConnectForm from '../../../src/components/header/ConnectForm';
import OnlinePlayerList from '../../../src/components/header/OnlinePlayerList';

describe('Header', () => {
    it('initially renders only connect form', () => {
        const onConnect = sinon.stub();
        const onDisconnect = sinon.stub();

        const header = shallow(<Header connected={false} onDisconnect={onDisconnect} onConnect={onConnect}
                                       onlinePlayers={[]} playerId={''} message={''}/>);
        expect(header).to.contain(<ConnectForm onDisconnect={onDisconnect} onConnect={onConnect} connected={false}/>);
        expect(header).to.not.contain(<OnlinePlayerList playerId={'3'} onlinePlayers={[]}/>);
    });

    it('renders correctly if connected', () => {
        const onConnect = sinon.stub();
        const onDisconnect = sinon.stub();

        const header = shallow(<Header connected={true} onDisconnect={onDisconnect} onConnect={onConnect}
                                       onlinePlayers={[]} playerId={'4'} message={''}/>);
        expect(header).to.contain(<ConnectForm onDisconnect={onDisconnect} onConnect={onConnect} connected={true}/>);
        expect(header).to.contain(<OnlinePlayerList playerId={'4'} onlinePlayers={[]}/>);
    });

    it('renders message correctly', () => {
        const onConnect = sinon.stub();
        const onDisconnect = sinon.stub();
        const header = shallow(<Header connected={true} onDisconnect={onDisconnect} onConnect={onConnect}
                                       onlinePlayers={[]} playerId={'4'} message={'asdf'}/>);

        expect(header).to.contain('asdf');
    });
});
