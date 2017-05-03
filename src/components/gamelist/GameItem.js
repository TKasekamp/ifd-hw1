import React from 'react';

const GameItem = (props) => {
    let button = '';
    if (props.inFlight === 'created') {
        button = <button id='play-game' onClick={() => {
            props.play({id: props.id})
        }}>
            Play
        </button>;
    }
    return (
        <tr>
            <td>{props.type}</td>
            <td>{props.status}</td>
            <td>{props.inFlight}</td>
            <td>{button}</td>
        </tr>
    );
};
GameItem.propTypes = {
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    inFlight: React.PropTypes.string.isRequired,
    play: React.PropTypes.func.isRequired
};

export default GameItem;
