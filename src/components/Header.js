import React from 'react';
import NumberResult from './NumberResult';
import OnlinePlayer from './OnlinePlayer';
import ConnectForm from './ConnectForm';
import OnlinePlayerList from './OnlinePlayerList';

const Header = (props) => {
    let form = '';
    if (props.connected) {
        form = <button type='submit' onClick={props.onDisconnect}>
            Disconnect
        </button>;

    }
    else {
        form = <ConnectForm onConnect={props.onConnect}/>;

    }
    let playerList = '';
    if (props.connected) {
        playerList = <OnlinePlayerList onlinePlayers={props.onlinePlayers} playerId={props.playerId}/>
    }

    return (
        <div>
            {form} {playerList}
        </div>
    );
};

Header.propTypes = {
    playerId: React.PropTypes.string.isRequired,
    onlinePlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
    }).isRequired).isRequired,
    connected: React.PropTypes.bool.isRequired,
    onConnect: React.PropTypes.func.isRequired,
    onDisconnect: React.PropTypes.func.isRequired,
};

export default Header;
