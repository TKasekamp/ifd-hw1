import React from 'react';
import PropTypes from 'prop-types';
/*
 OnlinePlayer knows how to display itself.
 */
const OnlinePlayer = (props) => {
    let text = <div>{props.name}</div>;

    if (props.isPlayer) {
        text = <div>{props.name} (you)</div>;
    }

    return (
        <div>
            {text}
        </div>
    );
};
OnlinePlayer.propTypes = {
    name: PropTypes.string.isRequired,
    isPlayer: PropTypes.bool.isRequired
};

export default OnlinePlayer;
