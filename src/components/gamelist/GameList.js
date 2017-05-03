import React from 'react';
import GameItem from './GameItem';
import PropTypes from 'prop-types';
const GameList = (props) => {
    const resultElements = props.games.map((game) => {
        return (
            <GameItem key={game.id} status={game.status} type={game.type} inFlight={game.inFlight} id={game.id}
                      play={props.play}>
            </GameItem>
        );
    });
    return (
        <div>
            <h3>Games</h3>
            <table>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Status</th>
                    <th>In flight</th>
                    <th>Play</th>
                </tr>
                </thead>
                <tbody>
                {resultElements}
                </tbody>
            </table>
        </div>
    );
};

GameList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        inFlight: PropTypes.string.isRequired,
    })).isRequired,
    play: PropTypes.func.isRequired
};

export default GameList;
