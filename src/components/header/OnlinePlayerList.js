import React from 'react';
import OnlinePlayer from './OnlinePlayer';
import PropTypes from 'prop-types';
const OnlinePlayerList = (props) => {
    const players = props.onlinePlayers.map((player) => {
        return (
            <OnlinePlayer name={player.name} isPlayer={props.playerId === player.id} key={player.id}>
            </OnlinePlayer>
        );
    });
    return (
        <div>
            <h3>Online players</h3>
            <div className='flexbox-container result-list'>{players}</div>
        </div>
    );
};

OnlinePlayerList.propTypes = {
    playerId: PropTypes.string.isRequired,
    onlinePlayers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired).isRequired
};

export default OnlinePlayerList;
