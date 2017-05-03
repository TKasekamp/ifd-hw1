import React from 'react';

const GameItem = (props) => {
    return (
        <tr>
            <td>{props.type}</td>
            <td>{props.status}</td>
            <td>{props.inFlight}</td>
        </tr>
    );
};
GameItem.propTypes = {
    type: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    inFlight: React.PropTypes.string.isRequired
};

export default GameItem;
