import React from 'react';
import ConnectForm from './ConnectForm';
import OnlinePlayerList from './OnlinePlayerList';

const Header = (props) => {
    let form = <ConnectForm onConnect={props.onConnect} onDisconnect={props.onDisconnect} connected={props.connected}/>;

    let playerList = '';
    if (props.connected) {
        playerList = <OnlinePlayerList onlinePlayers={props.onlinePlayers} playerId={props.playerId}/>;
    }

    return (
        <div>
            <div>{props.message}</div>
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
    message: React.PropTypes.string.isRequired
};

export default Header;
