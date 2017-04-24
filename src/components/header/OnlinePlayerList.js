import React from 'react';
import OnlinePlayer from './OnlinePlayer';

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
    playerId: React.PropTypes.string.isRequired,
    onlinePlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
    }).isRequired).isRequired
};

export default OnlinePlayerList;
