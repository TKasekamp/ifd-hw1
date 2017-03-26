import React from 'react';
import NumberGameContainer from '../containters/NumberGameContainer';
import WordGameContainer from '../containters/WordGameContainer';

const Games = (props) => {
    const resultElements = props.games.map((game) => {
        if (game.name == 'number') {
            return (<NumberGameContainer key={game.id}/>);
        } else if (game.name == 'word') {
            return (<WordGameContainer key={game.id}/>);
        }
    });
    return (
        <div>
            <h2>Games</h2>
            <div className='flexbox-container result-list'>{resultElements}</div>
        </div>
    );
};

Games.propTypes = {
    games: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
    })).isRequired
};

export default Games;
