import React from 'react';
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
    name: React.PropTypes.string.isRequired,
    isPlayer: React.PropTypes.bool.isRequired
};

export default OnlinePlayer;
