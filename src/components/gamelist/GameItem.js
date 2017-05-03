import React from 'react';
import PropTypes from 'prop-types';

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
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    inFlight: PropTypes.string.isRequired,
    play: PropTypes.func.isRequired
};

export default GameItem;
