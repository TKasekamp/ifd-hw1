import React from 'react';
import GameItem from './GameItem';

const GameList = (props) => {
    const resultElements = props.games.map((game) => {
        return (
            <GameItem key={game.id} status={game.status} type={game.type} inFlight={game.inFlight}>
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
    games: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired,
        inFlight: React.PropTypes.string.isRequired,
    })).isRequired
};

export default GameList;
