import React from 'react';
import ConnectForm from './ConnectForm';
import OnlinePlayerList from './OnlinePlayerList';
import PropTypes from 'prop-types';
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
    playerId: PropTypes.string.isRequired,
    onlinePlayers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    connected: PropTypes.bool.isRequired,
    onConnect: PropTypes.func.isRequired,
    onDisconnect: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default Header;
