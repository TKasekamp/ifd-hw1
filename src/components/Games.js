import React from 'react';
import NumberGameContainer from '../containers/NumberGameContainer';
import WordGameContainer from '../containers/WordGameContainer';


const Games = (props) => {
    const resultElements = props.games.map((game, index) => {
        if (game.type === 'guess_number') {
            return (
                <NumberGameContainer game={game} key={index}/>);
        } else if (game.type === 'guess_word') {
            return (<WordGameContainer game={game} key={index}/>);
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
        type: React.PropTypes.string,
        gameOver: React.PropTypes.bool,
        results: React.PropTypes.array,
        targetWord: React.PropTypes.string,
        targetNumber: React.PropTypes.number
    })).isRequired
};

export default Games;
